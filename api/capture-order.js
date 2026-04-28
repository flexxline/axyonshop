const { formatMoney } = require("./_lib/catalog");
const { parseBody, requireMethod, sendJson } = require("./_lib/http");
const { getAccessToken, paypalApi } = require("./_lib/paypal");
const { publicOrderItems, verifyOrderToken } = require("./_lib/security");

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw Object.assign(new Error(message), { statusCode: 409 });
  }
}

function summarizeCapture(capture, signed) {
  const unit = capture.purchase_units?.[0];
  const payment = unit?.payments?.captures?.[0];
  const payer = capture.payer || {};

  return {
    success: true,
    orderCode: signed.orderCode,
    paypalOrderID: capture.id,
    paypalCaptureID: payment?.id || null,
    payer: payer.name?.given_name || payer.email_address || "Customer",
    payerEmail: payer.email_address || "Not provided",
    payerId: payer.payer_id || null,
    status: capture.status,
    captureStatus: payment?.status || "UNKNOWN",
    total: formatMoney(signed.totalCents),
    currency: signed.currency,
    date: new Date().toLocaleDateString("es-ES"),
    hour: new Date().toLocaleTimeString("es-ES"),
    risk: signed.risk,
    items: signed.items || []
  };
}

module.exports = async (req, res) => {
  if (!requireMethod(req, res, "POST")) return;

  try {
    const { orderID } = await parseBody(req);
    if (!orderID || !/^[A-Z0-9]+$/.test(orderID)) {
      return sendJson(res, 400, { error: "Missing or invalid orderID" });
    }

    const token = await getAccessToken();
    const approvedOrder = await paypalApi(`/v2/checkout/orders/${orderID}`, token);
    const approvedUnit = approvedOrder.purchase_units?.[0];
    const signed = verifyOrderToken(approvedUnit?.custom_id);

    assertEqual(approvedOrder.status, "APPROVED", "PayPal order is not approved");
    assertEqual(approvedUnit?.reference_id, signed.orderCode, "PayPal reference mismatch");
    assertEqual(approvedUnit?.amount?.currency_code, signed.currency, "PayPal currency mismatch");
    assertEqual(approvedUnit?.amount?.value, formatMoney(signed.totalCents), "PayPal amount mismatch");

    const capture = await paypalApi(`/v2/checkout/orders/${orderID}/capture`, token, {
      method: "POST",
      headers: {
        "PayPal-Request-Id": `capture-${orderID}`
      }
    });

    assertEqual(capture.status, "COMPLETED", "PayPal order was not completed");

    const unit = capture.purchase_units?.[0];
    const payment = unit?.payments?.captures?.[0];
    const paidAmount = payment?.amount;

    assertEqual(unit?.reference_id, signed.orderCode, "PayPal reference mismatch");
    assertEqual(paidAmount?.currency_code, signed.currency, "PayPal currency mismatch");
    assertEqual(paidAmount?.value, formatMoney(signed.totalCents), "PayPal amount mismatch");
    assertEqual(payment?.status, "COMPLETED", "PayPal capture was not completed");

    const receipt = summarizeCapture(capture, {
      ...signed,
      risk: { score: signed.riskScore },
      items: publicOrderItems({
        items: capture.purchase_units[0].items?.map((item) => ({
          id: item.sku || item.name,
          name: item.name,
          qty: Number(item.quantity),
          unitCents: Math.round(Number(item.unit_amount?.value || 0) * 100),
          lineCents:
            Math.round(Number(item.unit_amount?.value || 0) * 100) * Number(item.quantity || 1)
        })) || [],
        totalCents: signed.totalCents,
        currency: signed.currency
      })
    });

    return sendJson(res, 200, receipt);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return sendJson(res, statusCode, {
      error: statusCode >= 500 ? "Could not verify PayPal payment" : error.message
    });
  }
};
