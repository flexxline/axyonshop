const PAYPAL_BASE =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

function assertPayPalConfig() {
  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_SECRET) {
    throw Object.assign(new Error("PayPal credentials are not configured"), { statusCode: 500 });
  }
}

function getAuthHeader() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");
  return `Basic ${auth}`;
}

async function paypalFetch(path, options = {}) {
  assertPayPalConfig();
  const response = await fetch(`${PAYPAL_BASE}${path}`, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data?.message || data?.error_description || data?.error || "PayPal request failed";
    throw Object.assign(new Error(message), {
      statusCode: response.status,
      paypal: data
    });
  }

  return data;
}

async function getAccessToken() {
  const data = await paypalFetch("/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: getAuthHeader(),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  if (!data.access_token) {
    throw Object.assign(new Error("PayPal access token missing"), { statusCode: 502 });
  }

  return data.access_token;
}

async function paypalApi(path, token, options = {}) {
  return paypalFetch(path, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
}

module.exports = {
  getAccessToken,
  paypalApi
};
