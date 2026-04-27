const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const ordersPath = path.join(__dirname, "orders.json");

function readOrders() {
  if (!fs.existsSync(ordersPath)) fs.writeFileSync(ordersPath, "[]");
  return JSON.parse(fs.readFileSync(ordersPath, "utf8"));
}

function saveOrders(orders) {
  fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2));
}

function paypalBase() {
  return process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const res = await fetch(`${paypalBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  const data = await res.json();
  return data.access_token;
}

app.post("/api/create-order", async (req, res) => {
  const { items, total } = req.body;

  if (!items || !Array.isArray(items) || !total) {
    return res.status(400).json({ error: "Invalid cart" });
  }

  const token = await getAccessToken();

  const paypalRes = await fetch(`${paypalBase()}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Axyon Order",
          amount: {
            currency_code: "EUR",
            value: Number(total).toFixed(2)
          }
        }
      ]
    })
  });

  const data = await paypalRes.json();
  res.json(data);
});

app.post("/api/capture-order", async (req, res) => {
  const { orderID, items, total } = req.body;

  const token = await getAccessToken();

  const captureRes = await fetch(
    `${paypalBase()}/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );

  const capture = await captureRes.json();

  if (capture.status !== "COMPLETED") {
    return res.status(400).json({ error: "Payment not completed" });
  }

  const orderCode = "AX-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  const order = {
    orderCode,
    paypalOrderID: orderID,
    payer: capture.payer?.name?.given_name || "Customer",
    email: capture.payer?.email_address || "Not provided",
    items,
    total,
    date: new Date().toLocaleDateString("es-ES"),
    hour: new Date().toLocaleTimeString("es-ES"),
    status: "PAID_PENDING_DISCORD_TICKET"
  };

  const orders = readOrders();
  orders.push(order);
  saveOrders(orders);

  res.json({
    success: true,
    orderCode
  });
});

app.get("/api/order/:code", (req, res) => {
  const orders = readOrders();
  const order = orders.find(o => o.orderCode === req.params.code);

  if (!order) return res.status(404).json({ error: "Order not found" });

  res.json(order);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Axyon server running");
});