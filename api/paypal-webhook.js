const { parseBody, requireMethod, sendJson } = require("./_lib/http");
const { getAccessToken, paypalApi } = require("./_lib/paypal");

function header(req, name) {
  return req.headers[name.toLowerCase()];
}

module.exports = async (req, res) => {
  if (!requireMethod(req, res, "POST")) return;

  try {
    if (!process.env.PAYPAL_WEBHOOK_ID) {
      return sendJson(res, 503, { error: "PAYPAL_WEBHOOK_ID is not configured" });
    }

    const event = await parseBody(req);
    const token = await getAccessToken();
    const verification = await paypalApi("/v1/notifications/verify-webhook-signature", token, {
      method: "POST",
      body: JSON.stringify({
        auth_algo: header(req, "paypal-auth-algo"),
        cert_url: header(req, "paypal-cert-url"),
        transmission_id: header(req, "paypal-transmission-id"),
        transmission_sig: header(req, "paypal-transmission-sig"),
        transmission_time: header(req, "paypal-transmission-time"),
        webhook_id: process.env.PAYPAL_WEBHOOK_ID,
        webhook_event: event
      })
    });

    if (verification.verification_status !== "SUCCESS") {
      return sendJson(res, 401, { error: "Invalid PayPal webhook signature" });
    }

    console.log("Verified PayPal webhook", {
      id: event.id,
      type: event.event_type,
      resource: event.resource?.id
    });

    return sendJson(res, 200, { ok: true });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return sendJson(res, statusCode, {
      error: statusCode >= 500 ? "Webhook verification failed" : error.message
    });
  }
};
