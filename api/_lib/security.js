const crypto = require("crypto");

const ORDER_TTL_MS = 15 * 60 * 1000;
const velocity = new Map();

function getSigningSecret() {
  const secret = process.env.ORDER_SIGNING_SECRET || process.env.PAYPAL_SECRET;
  if (!secret || secret.length < 24) {
    throw Object.assign(new Error("ORDER_SIGNING_SECRET must be configured"), { statusCode: 500 });
  }
  return secret;
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function signPayload(payload) {
  const body = base64url(JSON.stringify(payload));
  const signature = crypto
    .createHmac("sha256", getSigningSecret())
    .update(body)
    .digest("base64url");
  return `${body}.${signature}`;
}

function hmac(value) {
  return crypto.createHmac("sha256", getSigningSecret()).update(value).digest("base64url");
}

function createOrderToken({ orderCode, order, risk }) {
  const created = Date.now().toString(36);
  const cartHash = fingerprintCart(order).slice(0, 20);
  const value = [
    orderCode,
    created,
    order.currency,
    order.totalCents,
    cartHash,
    risk.score
  ].join(":");
  return `${value}:${hmac(value)}`;
}

function verifyOrderToken(token) {
  if (!token || typeof token !== "string") {
    throw Object.assign(new Error("Order token missing"), { statusCode: 403 });
  }

  const parts = token.split(":");
  if (parts.length !== 7) {
    throw Object.assign(new Error("Order token malformed"), { statusCode: 403 });
  }

  const [orderCode, createdBase36, currency, totalCentsRaw, cartHash, riskScoreRaw, signature] = parts;
  const value = parts.slice(0, 6).join(":");
  const expected = hmac(value);

  if (
    signature.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  ) {
    throw Object.assign(new Error("Order token signature mismatch"), { statusCode: 403 });
  }

  const createdAt = Number.parseInt(createdBase36, 36);
  if (!createdAt || Date.now() - createdAt > ORDER_TTL_MS) {
    throw Object.assign(new Error("Order session expired"), { statusCode: 403 });
  }

  return {
    orderCode,
    createdAt,
    currency,
    totalCents: Number(totalCentsRaw),
    cartHash,
    riskScore: Number(riskScoreRaw)
  };
}

function verifyPayload(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    throw Object.assign(new Error("Order signature missing"), { statusCode: 403 });
  }

  const [body, signature] = token.split(".");
  const expected = crypto
    .createHmac("sha256", getSigningSecret())
    .update(body)
    .digest("base64url");

  if (
    signature.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  ) {
    throw Object.assign(new Error("Order signature mismatch"), { statusCode: 403 });
  }

  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  if (!payload.createdAt || Date.now() - payload.createdAt > ORDER_TTL_MS) {
    throw Object.assign(new Error("Order session expired"), { statusCode: 403 });
  }

  return payload;
}

function fingerprintCart(order) {
  return crypto
    .createHash("sha256")
    .update(
      JSON.stringify({
        currency: order.currency,
        totalCents: order.totalCents,
        items: order.items.map((item) => [item.id, item.variantId || "default", item.qty, item.unitCents])
      })
    )
    .digest("hex");
}

function assessRisk({ req, ip, order }) {
  const now = Date.now();
  const key = `${ip}:${req.headers["user-agent"] || "unknown"}`;
  const recent = (velocity.get(key) || []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  velocity.set(key, recent);

  let score = 0;
  const reasons = [];

  if (!req.headers["user-agent"]) {
    score += 25;
    reasons.push("missing_user_agent");
  }

  if (recent.length >= 8) {
    score += 40;
    reasons.push("checkout_velocity");
  }

  if (order.totalCents >= 20000) {
    score += 25;
    reasons.push("high_value_order");
  }

  if (order.items.some((item) => item.qty >= 10)) {
    score += 20;
    reasons.push("bulk_quantity");
  }

  return {
    score,
    reasons,
    decision: score >= 60 ? "REVIEW" : "ACCEPT"
  };
}

function publicOrderItems(order) {
  return order.items.map((item) => ({
    id: item.id,
    variantId: item.variantId || "default",
    name: item.name,
    variantName: item.variantName || "",
    qty: item.qty,
    price: (item.unitCents / 100).toFixed(2),
    total: (item.lineCents / 100).toFixed(2)
  }));
}

module.exports = {
  assessRisk,
  createOrderToken,
  fingerprintCart,
  publicOrderItems,
  signPayload,
  verifyOrderToken,
  verifyPayload
};
