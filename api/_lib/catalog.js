const fs = require("fs");
const path = require("path");

const CURRENCY = "EUR";
const MIN_ORDER_CENTS = 300;
const MAX_ORDER_CENTS = 50000;
const MAX_CART_LINES = 12;
const MAX_QTY_PER_LINE = 25;

let cachedProducts;

function loadProducts() {
  if (cachedProducts) return cachedProducts;

  const appPath = path.join(process.cwd(), "public", "js", "app.js");
  const source = fs.readFileSync(appPath, "utf8");
  const start = source.indexOf("const products = [");
  if (start === -1) throw new Error("Product catalog not found");

  const arrayStart = source.indexOf("[", start);
  const arrayEnd = source.indexOf("\n];", arrayStart);
  if (arrayStart === -1 || arrayEnd === -1) throw new Error("Product catalog is malformed");

  const literal = source.slice(arrayStart, arrayEnd + 2);
  const products = Function(`"use strict"; return (${literal});`)();
  cachedProducts = new Map(products.map((product) => [product.id, product]));
  return cachedProducts;
}

function toCents(value) {
  return Math.round(Number(value || 0) * 100);
}

function formatMoney(cents) {
  return (cents / 100).toFixed(2);
}

function normalizeCart(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw Object.assign(new Error("Cart is empty"), { statusCode: 400 });
  }

  if (items.length > MAX_CART_LINES) {
    throw Object.assign(new Error("Cart has too many different products"), { statusCode: 400 });
  }

  const catalog = loadProducts();
  const compact = new Map();

  for (const rawItem of items) {
    const id = String(rawItem?.id || "").trim();
    const product = catalog.get(id);
    const qty = Number(rawItem?.qty);

    if (!product) {
      throw Object.assign(new Error("Unknown product in cart"), { statusCode: 400 });
    }

    if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QTY_PER_LINE) {
      throw Object.assign(new Error("Invalid product quantity"), { statusCode: 400 });
    }

    if (product.stock <= 0 || qty > product.stock) {
      throw Object.assign(new Error(`${product.name} is out of stock`), { statusCode: 409 });
    }

    const existing = compact.get(id);
    compact.set(id, existing ? existing + qty : qty);
  }

  const lines = Array.from(compact.entries()).map(([id, qty]) => {
    const product = catalog.get(id);
    const unitCents = toCents(product.price);
    return {
      id,
      name: product.name,
      category: product.category,
      qty,
      unitCents,
      lineCents: unitCents * qty
    };
  });

  const totalCents = lines.reduce((sum, item) => sum + item.lineCents, 0);

  if (totalCents < MIN_ORDER_CENTS) {
    throw Object.assign(new Error("Minimum purchase is EUR 3.00"), { statusCode: 400 });
  }

  if (totalCents > MAX_ORDER_CENTS) {
    throw Object.assign(new Error("Order requires manual review"), { statusCode: 403 });
  }

  return {
    currency: CURRENCY,
    totalCents,
    total: formatMoney(totalCents),
    items: lines
  };
}

module.exports = {
  CURRENCY,
  formatMoney,
  normalizeCart
};
