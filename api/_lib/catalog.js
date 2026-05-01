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

function productVariants(product) {
  return Array.isArray(product.variants) && product.variants.length
    ? product.variants
    : [{ id: "default", name: "Default", price: product.price, stock: product.stock }];
}

function getVariant(product, variantId) {
  const variants = productVariants(product);
  return variants.find((variant) => variant.id === variantId) || variants[0];
}

function lineKey(productId, variantId) {
  return `${productId}::${variantId || "default"}`;
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
    const variantId = String(rawItem?.variantId || "default").trim();
    const product = catalog.get(id);
    const qty = Number(rawItem?.qty);

    if (!product) {
      throw Object.assign(new Error("Unknown product in cart"), { statusCode: 400 });
    }

    if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QTY_PER_LINE) {
      throw Object.assign(new Error("Invalid product quantity"), { statusCode: 400 });
    }

    const variant = getVariant(product, variantId);
    const stock = Number.isFinite(Number(variant.stock)) ? Number(variant.stock) : Number(product.stock);

    if (stock <= 0 || qty > stock) {
      throw Object.assign(new Error(`${product.name} is out of stock`), { statusCode: 409 });
    }

    const key = lineKey(id, variant.id);
    const existing = compact.get(key);
    const nextQty = existing ? existing + qty : qty;
    if (nextQty > stock) {
      throw Object.assign(new Error(`${product.name} is out of stock`), { statusCode: 409 });
    }
    compact.set(key, nextQty);
  }

  const lines = Array.from(compact.entries()).map(([key, qty]) => {
    const [id, variantId] = key.split("::");
    const product = catalog.get(id);
    const variant = getVariant(product, variantId);
    const unitCents = toCents(variant.price);
    const hasNamedVariant = variant.name && variant.name !== "Default";
    return {
      id,
      variantId: variant.id,
      name: hasNamedVariant ? `${product.name} - ${variant.name}` : product.name,
      productName: product.name,
      variantName: hasNamedVariant ? variant.name : "",
      category: product.category,
      qty,
      unitCents,
      lineCents: unitCents * qty
    };
  });

  const subtotalCents = lines.reduce((sum, item) => sum + item.lineCents, 0);
  const feeCents = Math.round(subtotalCents * 0.10);

  if (feeCents > 0) {
    lines.push({
      id: "payment-fee",
      variantId: "default",
      name: "Payment Fee (10%)",
      productName: "Payment Fee (10%)",
      variantName: "",
      category: "Fee",
      qty: 1,
      unitCents: feeCents,
      lineCents: feeCents
    });
  }

  const totalCents = subtotalCents + feeCents;

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
