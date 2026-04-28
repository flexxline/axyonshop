const { normalizeCart } = require("./_lib/catalog");
const { getClientIp, parseBody, requireMethod, sendJson } = require("./_lib/http");
const { getAccessToken, paypalApi } = require("./_lib/paypal");
const { assessRisk, createOrderToken, publicOrderItems } = require("./_lib/security");

function makeOrderCode() {
  return `AX-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

module.exports = async (req, res) => {
  if (!requireMethod(req, res, "POST")) return;

  try {
    const { items } = await parseBody(req);
    const order = normalizeCart(items);
    const ip = getClientIp(req);
    const risk = assessRisk({ req, ip, order });

    if (risk.decision === "REVIEW") {
      return sendJson(res, 403, {
        error: "Order requires manual review",
        risk
      });
    }

    const orderCode = makeOrderCode();
    const orderToken = createOrderToken({ orderCode, order, risk });

    const token = await getAccessToken();
    const paypalOrder = await paypalApi("/v2/checkout/orders", token, {
      method: "POST",
      headers: {
        "PayPal-Request-Id": orderCode
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: orderCode,
            custom_id: orderToken,
            invoice_id: orderCode,
            description: "Axyon Order",
            amount: {
              currency_code: order.currency,
              value: order.total,
              breakdown: {
                item_total: {
                  currency_code: order.currency,
                  value: order.total
                }
              }
            },
            items: order.items.map((item) => ({
              name: item.name.slice(0, 127),
              sku: `${item.id}:${item.variantId || "default"}`.slice(0, 127),
              quantity: String(item.qty),
              unit_amount: {
                currency_code: order.currency,
                value: (item.unitCents / 100).toFixed(2)
              },
              category: "DIGITAL_GOODS"
            }))
          }
        ]
      })
    });

    return sendJson(res, 200, {
      id: paypalOrder.id,
      orderCode,
      amount: order.total,
      currency: order.currency,
      items: publicOrderItems(order),
      risk
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return sendJson(res, statusCode, {
      error: statusCode >= 500 ? "Could not create secure PayPal order" : error.message
    });
  }
};
