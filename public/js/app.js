const products = [
  {id:"fa-discord-accounts",name:"FA Discord Accounts",category:"Social",price:0.04,popular:95,stock:5671,desc:"Fresh Discord accounts with instant delivery."},
  {id:"rockstar-tool",name:"Rockstar Tool",category:"Tools",price:18,popular:90,stock:0,desc:"Premium Rockstar gaming tool."},
  {id:"fivem-spoofer",name:"FiveM Spoofer",category:"Tools",price:2.06,popular:85,stock:377,desc:"FiveM anti-ban spoofer."},
  {id:"cs2-prime-accounts",name:"CS2 Prime Accounts",category:"Gaming",price:10.62,popular:88,stock:70,desc:"Counter-Strike 2 Prime accounts."},
  {id:"cs2-hours-accounts",name:"CS2 Hours Accounts",category:"Gaming",price:2.81,popular:80,stock:7,desc:"CS2 accounts with hours."},
  {id:"cs2-prime-nfa-accounts",name:"CS2 Prime NFA Accounts",category:"Gaming",price:1.24,popular:75,stock:33,desc:"CS2 Prime NFA accounts."},
  {id:"apex-legend-accounts",name:"Apex Legend Accounts",category:"Gaming",price:4.86,popular:82,stock:50,desc:"Apex Legends gaming accounts."},
  {id:"valorant-accounts",name:"Valorant Accounts",category:"Gaming",price:4.2,popular:90,stock:407,desc:"Valorant Riot accounts."},
  {id:"rainbow-six-siege-accounts",name:"Rainbow Six Siege Accounts",category:"Gaming",price:4.2,popular:85,stock:99,desc:"Rainbow Six Siege accounts."},
  {id:"fa-fortnite-accounts",name:"FA Fortnite Accounts",category:"Gaming",price:0.49,popular:95,stock:873,desc:"Fresh Fortnite accounts."},
  {id:"fortnite-vbucks-accounts",name:"Fortnite V-Bucks Accounts",category:"Gaming",price:3.12,popular:80,stock:134,desc:"Fortnite accounts with V-Bucks."},
  {id:"permanent-spoofer",name:"Permament Spoofer [ALL GAMES]",category:"Tools",price:5.4,popular:88,stock:0,desc:"Permanent spoofer for all games."},
  {id:"lusive-ultimate-software",name:"Lusive Ultimate Software",category:"Software",price:0.65,popular:85,stock:0,desc:"Ultimate gaming software suite."},
  {id:"accounts-generator",name:"Accounts Generator",category:"Tools",price:18.6,popular:90,stock:83,desc:"Bulk accounts generator."},
  {id:"black-ops-6-accounts",name:"Black Ops 6 Accounts",category:"Gaming",price:14.4,popular:85,stock:0,desc:"Call of Duty Black Ops 6 accounts."},
  {id:"disney-plus-accounts",name:"Disney+ Accounts",category:"Streaming",price:0.08,popular:80,stock:1059,desc:"Disney+ streaming accounts."},
  {id:"paramount-plus",name:"Paramount+",category:"Streaming",price:0.13,popular:75,stock:340,desc:"Paramount+ streaming service."},
  {id:"twitch-follower-accounts",name:"Twitch Follower Accounts",category:"Social",price:0.04,popular:70,stock:159,desc:"Twitch follower accounts."},
  {id:"roblox-robux",name:"Roblox (Robux's)",category:"Gaming",price:3.54,popular:85,stock:896,desc:"Roblox accounts with Robux."},
  {id:"clash-royale-accounts",name:"Clash Royale Accounts",category:"Gaming",price:1.88,popular:75,stock:222,desc:"Clash Royale gaming accounts."},
  {id:"bo6-wz4-external",name:"BO6/WZ4 External",category:"Tools",price:18,popular:80,stock:0,desc:"Black Ops 6/Warzone 4 external tool."},
  {id:"spotify",name:"Spotify",category:"Streaming",price:2.82,popular:85,stock:0,desc:"Spotify premium accounts."},
  {id:"temporary-spoofer",name:"Temporary Spoofer [ALL GAMES]",category:"Tools",price:0.65,popular:70,stock:0,desc:"Temporary spoofer for all games."},
  {id:"chatgpt-accounts",name:"ChatGPT Accounts",category:"AI",price:2.25,popular:90,stock:69,desc:"ChatGPT premium accounts."},
  {id:"gemini-pro-accounts",name:"Gemini Pro Accounts",category:"AI",price:0.65,popular:80,stock:60,desc:"Google Gemini Pro accounts."},
  {id:"fivem-ready",name:"FiveM Ready [ Fresh ]",category:"Gaming",price:0.18,popular:85,stock:874,desc:"Fresh FiveM ready accounts."},
  {id:"youtube-lifetime-accounts",name:"YouTube Lifetime Accounts",category:"Social",price:1.11,popular:75,stock:146,desc:"YouTube lifetime accounts."},
  {id:"rockstar-activation-codes",name:"Rockstar Activation Codes [Automatic Delivery]",category:"Gaming",price:0.11,popular:70,stock:0,desc:"Rockstar automatic activation codes."},
  {id:"tiktok-1k-followers",name:"TikTok Accounts 1k+ Followers",category:"Social",price:3.84,popular:80,stock:0,desc:"TikTok accounts with 1k+ followers."},
  {id:"netflix-lifetime",name:"Netflix Lifetime",category:"Streaming",price:0.13,popular:95,stock:1633,desc:"Netflix lifetime accounts."},
  {id:"nord-vpn-lifetime",name:"Nord VPN Lifetime",category:"VPN",price:0.26,popular:85,stock:191,desc:"NordVPN lifetime subscription."},
  {id:"cyberghost-vpn-1year",name:"CyberGhost VPN 1 Year",category:"VPN",price:0.49,popular:80,stock:273,desc:"CyberGhost VPN 1 year."},
  {id:"tiktok-10k-followers",name:"TikTok Accounts 10k+ Followers",category:"Social",price:21.3,popular:85,stock:0,desc:"TikTok accounts with 10k+ followers."},
  {id:"fivem-bundle",name:"FiveM Bundle",category:"Gaming",price:0.26,popular:75,stock:0,desc:"FiveM accounts bundle."},
  {id:"tunnelbear-vpn",name:"TunnelBear VPN",category:"VPN",price:0.25,popular:70,stock:175,desc:"TunnelBear VPN accounts."},
  {id:"ipvanish-vpn-1year",name:"IP Vanish VPN 1 Year",category:"VPN",price:0.13,popular:75,stock:215,desc:"IPVanish VPN 1 year."},
  {id:"tiktok-20k-followers",name:"TikTok Accounts 20k+ Followers",category:"Social",price:35.4,popular:90,stock:0,desc:"TikTok accounts with 20k+ followers."},
  {id:"pure-vpn",name:"Pure VPN",category:"VPN",price:0.65,popular:80,stock:271,desc:"PureVPN accounts."},
  {id:"discord-generator",name:"Discord Generator [ LIFETIME ]",category:"Tools",price:36,popular:85,stock:35,desc:"Lifetime Discord accounts generator."},
  {id:"chatgpt-plus-generator",name:"ChatGPT+ Generator",category:"Tools",price:30,popular:90,stock:46,desc:"ChatGPT Plus accounts generator."},
  {id:"fortnite-accounts-gen",name:"Fortnite Accounts Gen",category:"Tools",price:30,popular:85,stock:23,desc:"Fortnite accounts generator."},
  {id:"mullvad-vpn-lifetime",name:"Mullvad VPN Lifetime",category:"VPN",price:4.38,popular:80,stock:30,desc:"Mullvad VPN lifetime."},
  {id:"hotspot-shield-vpn-1year",name:"HotSpot Shield VPN 1 Year",category:"VPN",price:1.25,popular:75,stock:19,desc:"HotSpot Shield VPN 1 year."},
  {id:"rdr2-social-club-accounts",name:"RDR2 Social Club Accounts",category:"Gaming",price:4.44,popular:70,stock:6,desc:"Red Dead Redemption 2 Social Club accounts."},
  {id:"steam-generator",name:"Steam Generator [ LIFETIME ]",category:"Tools",price:6,popular:85,stock:49,desc:"Lifetime Steam accounts generator."},
  {id:"vpn-generator",name:"VPN Generator [ LIFETIME ]",category:"Tools",price:12,popular:80,stock:35,desc:"Lifetime VPN accounts generator."},
  {id:"gta-5-accounts",name:"GTA 5 Accounts",category:"Gaming",price:7.8,popular:85,stock:10,desc:"Grand Theft Auto 5 accounts."},
  {id:"fa-steam-accounts",name:"FA Steam Accounts",category:"Gaming",price:0.01,popular:95,stock:40238,desc:"Fresh Steam accounts."},
  {id:"rambler-email-accounts",name:"Rambler.ru Email Accounts",category:"Social",price:0.03,popular:70,stock:0,desc:"Rambler.ru email accounts."},
  {id:"dayz-accounts",name:"DayZ Accounts",category:"Gaming",price:1.44,popular:75,stock:19,desc:"DayZ gaming accounts."},
  {id:"50-100-level-ranked",name:"50 - 100 Level [ Ranked Ready ]",category:"Gaming",price:18.6,popular:80,stock:54,desc:"High level ranked accounts."},
  {id:"ea-fc-26",name:"EA FC 26",category:"Gaming",price:14.4,popular:85,stock:11,desc:"EA FC 26 accounts."},
  {id:"escape-from-tarkov-accounts",name:"Escape From Tarkov Accounts",category:"Gaming",price:13.13,popular:80,stock:25,desc:"Escape From Tarkov Accounts."},
  {id:"capcut-pro-lifetime",name:"Capcut Pro Lifetime",category:"Software",price:0.28,popular:75,stock:108,desc:"CapCut Pro lifetime subscription."},
  {id:"minecraft-account",name:"Minecraft Account (Full Access)",category:"Gaming",price:3.44,popular:85,stock:11,desc:"Full access Minecraft accounts."},
  {id:"14x-1month-server-boosts",name:"14x 1 Month Server Boosts",category:"Social",price:4.06,popular:80,stock:44,desc:"Discord server boosts."},
  {id:"rust-accounts",name:"Rust Accounts",category:"Gaming",price:8.16,popular:85,stock:26,desc:"Rust gaming accounts."},
  {id:"rust-nfa-accounts",name:"Rust NFA Accounts",category:"Gaming",price:1.13,popular:75,stock:47,desc:"Rust NFA accounts."},
  {id:"ufc-lifetime-accounts",name:"UFC Lifetime Accounts",category:"Streaming",price:0.63,popular:70,stock:117,desc:"UFC lifetime accounts."},
  {id:"rockstar-products-supplier",name:"Rockstar & Products Supplier",category:"Services",price:24,popular:85,stock:10,desc:"Rockstar products supplier service."},
  {id:"rockstar-activation-code-method",name:"Rockstar Activation Code Method",category:"Services",price:120,popular:90,stock:85,desc:"Rockstar activation code method."},
  {id:"spotify-lifetime-account",name:"Spotify Lifetime Account",category:"Streaming",price:2.82,popular:80,stock:5,desc:"Spotify lifetime account."},
  {id:"hbo-max-lifetime-accounts",name:"HBO Max Lifetime Accounts",category:"Streaming",price:0.13,popular:85,stock:1136,desc:"HBO Max lifetime accounts."},
  {id:"050-nfa-accounts",name:"0.50$ NFA Accounts",category:"Gaming",price:24,popular:80,stock:89,desc:"Cheap NFA accounts."},
  {id:"instagram-1k-followers",name:"Instagram 1k+ Followers",category:"Social",price:4.08,popular:75,stock:21,desc:"Instagram accounts with 1k+ followers."},
  {id:"crunchyroll-mega-fan",name:"Crunchyroll [MEGA FAN MEMBER] Lifetime",category:"Streaming",price:0.13,popular:80,stock:283,desc:"Crunchyroll Mega Fan lifetime."},
  {id:"instagram-5k-followers",name:"Instagram 5k+ Followers",category:"Social",price:10.2,popular:85,stock:11,desc:"Instagram accounts with 5k+ followers."},
  {id:"duolingo-lifetime",name:"Duolingo Lifetime",category:"Education",price:0.07,popular:70,stock:89,desc:"Duolingo lifetime subscription."},
  {id:"nba-lifetime",name:"NBA Lifetime",category:"Streaming",price:0.07,popular:75,stock:196,desc:"NBA lifetime accounts."},
  {id:"epic-games-email-changer",name:"Epic Games E-Mail Changer",category:"Tools",price:5.4,popular:80,stock:14,desc:"Epic Games email changer tool."},
  {id:"free-steam-games",name:"FREE Steam Games",category:"Gaming",price:30,popular:85,stock:23,desc:"Free Steam games access."},
  {id:"prime-video-lifetime",name:"Prime Video Lifetime",category:"Streaming",price:0.13,popular:75,stock:0,desc:"Prime Video lifetime accounts."},
  {id:"netflix-generator",name:"Netflix Generator",category:"Tools",price:12.5,popular:85,stock:0,desc:"Netflix accounts generator."},
  {id:"chatgpt-plus-free-method",name:"ChatGPT+ Free Method",category:"Services",price:30,popular:90,stock:44,desc:"Free ChatGPT Plus method."},
  {id:"spotify-lifetime-key",name:"Spotify Lifetime Key",category:"Streaming",price:5.76,popular:80,stock:149,desc:"Spotify lifetime activation key."},
  {id:"aged-xbox-accounts",name:"Aged Xbox Accounts ",category:"Gaming",price:0.11,popular:75,stock:29,desc:"Aged Xbox gaming accounts."},
  {id:"movistar-es-plus-lifetime",name:"Movistar.es+ Lifetime",category:"Streaming",price:0.91,popular:70,stock:53,desc:"Movistar+ lifetime accounts."},
  {id:"oneplay-lifetime",name:"Oneplay Lifetime",category:"Streaming",price:0.63,popular:75,stock:389,desc:"Oneplay lifetime accounts."},
  {id:"nitro-boost-gift-link",name:"Nitro Boost Gift Link",category:"Social",price:5.4,popular:85,stock:33,desc:"Discord Nitro Boost gift links."},
  {id:"dazn-lifetime",name:"Dazn Lifetime",category:"Streaming",price:0.19,popular:80,stock:0,desc:"DAZN lifetime accounts."},
  {id:"amc-plus-lifetime",name:"AMC+ Lifetime",category:"Streaming",price:0.13,popular:75,stock:292,desc:"AMC+ lifetime accounts."},
  {id:"wondershare-lifetime",name:"Wondershare Lifetime",category:"Software",price:0.13,popular:70,stock:0,desc:"Wondershare lifetime subscriptions."},
  {id:"any-steam-game",name:"ANY Steam Game",category:"Gaming",price:3.75,popular:90,stock:769,desc:"Any Steam game access."}
];

const categories = ["All","Gaming","Streaming","VPN","Tools","Software","Social","AI","Services","Education"];
let cart = JSON.parse(localStorage.getItem("axyon_cart_v2") || "[]");
let activeCategory = "All";
let coupon = localStorage.getItem("axyon_coupon_v2") || "";
let modalProductId = null;

const productGrid = document.getElementById("productGrid");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartBubble = document.getElementById("cartBubble");
const subtotalEl = document.getElementById("subtotal");
const discountEl = document.getElementById("discount");
const totalEl = document.getElementById("total");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const chips = document.getElementById("chips");
const couponInput = document.getElementById("couponInput");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutSummary = document.getElementById("checkoutSummary");
const paypalContainer = document.getElementById("paypal-button-container");
const productModal = document.getElementById("productModal");
const productModalTitle = document.getElementById("productModalTitle");
const productModalCopy = document.getElementById("productModalCopy");
const productModalAdd = document.getElementById("productModalAdd");
const API_BASE = window.location.protocol === "file:" ? "http://localhost:3000" : "";
const IS_LOW_END_DEVICE =
  (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
  (navigator.deviceMemory && navigator.deviceMemory <= 4);

function money(value) {
  return "€" + Number(value || 0).toFixed(2);
}

function save() {
  localStorage.setItem("axyon_cart_v2", JSON.stringify(cart));
  localStorage.setItem("axyon_coupon_v2", coupon);
}

function toast(message) {
  const toastEl = document.getElementById("toast");
  const item = document.createElement("div");
  item.className = "toast-item";
  item.textContent = message;
  toastEl.appendChild(item);
  setTimeout(() => item.remove(), 2850);
}

function renderChips() {
  chips.innerHTML = categories
    .map(
      (category) => `
        <button class="chip ${category === activeCategory ? "active" : ""}" data-cat="${category}">${category}</button>
      `
    )
    .join("");

  chips.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.cat;
      categorySelect.value = activeCategory;
      render();
    });
  });
}

function filteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let results = products.filter((product) => {
    const text = `${product.name} ${product.category} ${product.desc}`.toLowerCase();
    const matchesSearch = !query || text.includes(query);
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (sortSelect.value === "low") results.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") results.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "az") results.sort((a, b) => a.name.localeCompare(b.name));
  if (sortSelect.value === "popular") results.sort((a, b) => b.popular - a.popular);

  return results;
}

function renderProducts() {
  const productsToShow = filteredProducts();

  productGrid.innerHTML = productsToShow
    .map((product) => {
      const isSoldOut = product.stock === 0;
      const stockLabel = isSoldOut ? "Out of stock" : `${product.stock} in stock`;
      const addButton = isSoldOut
        ? `<button class="add" disabled>Sold out</button>`
        : `<button class="add" data-add="${product.id}">Add to cart</button>`;

      return `
        <article class="product">
          <div class="product-top">
            <span class="tag">${product.category}</span>
            <span class="mini-arrows"><i></i><i></i><i></i><i></i></span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="product-bottom">
            <div>
              <div class="price">${money(product.price)}</div>
              <div class="stock ${isSoldOut ? "stock-soldout" : ""}">${stockLabel}</div>
            </div>
          </div>
          <div class="product-actions">
            ${addButton}
            <button class="view" data-view="${product.id}">↗</button>
          </div>
        </article>
      `;
    })
    .join("");

  if (!productsToShow.length) {
    productGrid.innerHTML = '<div class="empty-cart">No products found. Try another keyword or category.</div>';
  }

  productGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });

  productGrid.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.view));
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (product.stock === 0) {
    toast("This product is out of stock.");
    return;
  }

  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    if (cartItem.qty >= product.stock) {
      toast("You have reached the available stock for this item.");
      return;
    }
    cartItem.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }

  save();
  renderCart();
  toast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  const removedItem = cart.find((item) => item.id === productId);
  cart = cart.filter((item) => item.id !== productId);
  save();
  renderCart();
  if (removedItem) toast(`${removedItem.name} removed`);
}

function changeQty(productId, delta) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  item.qty += delta;

  if (item.qty <= 0) {
    return removeFromCart(productId);
  }

  if (item.qty > product.stock) {
    item.qty = product.stock;
    toast("Quantity adjusted to available stock.");
  }

  save();
  renderCart();
}

function subtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function discount() {
  return 0;
}

function total() {
  return Math.max(0, subtotal() - discount());
}

function renderCart() {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = itemCount;
  cartBubble.textContent = itemCount;
  subtotalEl.textContent = money(subtotal());
  discountEl.textContent = "-" + money(discount());
  totalEl.textContent = money(total());

  if (cart.length === 0) {
    cartList.innerHTML = '<div class="empty-cart">Your cart is empty. Add a product to start checkout.</div>';
    return;
  }

  cartList.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <strong>${item.name}</strong>
          <div class="cart-meta">
            <span>${money(item.price)} each</span>
            <div class="qty">
              <button data-dec="${item.id}">−</button>
              <span>${item.qty}</span>
              <button data-inc="${item.id}">+</button>
              <button class="remove-btn" data-remove="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  cartList.querySelectorAll("[data-dec]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.dec, -1));
  });

  cartList.querySelectorAll("[data-inc]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.inc, 1));
  });

  cartList.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.remove));
  });
}

function applyCoupon() {
  coupon = couponInput.value.trim();
  save();
  renderCart();
  toast(coupon ? "Coupon not valid" : "Coupon cleared");
}

function openCheckout() {
  if (cart.length === 0) {
    toast("Cart is empty");
    return;
  }

  if (total() < 3) {
    toast("Minimum purchase is €3.00");
    return;
  }

  checkoutSummary.innerHTML =
    cart
      .map(
        (item) => `
        <div class="checkout-line">
          <span><strong>${item.name}</strong><br>${item.qty} × ${money(item.price)}</span>
          <span>${money(item.qty * item.price)}</span>
        </div>
      `
      )
      .join("") +
    `
        <div class="checkout-line">
          <span><strong>Total</strong></span>
          <span><strong>${money(total())}</strong></span>
        </div>
      `;

  checkoutModal.classList.add("active");
  document.body.classList.add("lock");
  renderPayPal();
}

function closeCheckout() {
  checkoutModal.classList.remove("active");
  document.body.classList.remove("lock");
}

function renderPayPal() {
  paypalContainer.innerHTML = "";

  if (typeof paypal === "undefined") {
    paypalContainer.innerHTML = "<p>PayPal SDK failed to load.</p>";
    return;
  }

  paypal.Buttons({
    createOrder: async function () {
      try {
        const response = await fetch(`${API_BASE}/api/create-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cart.map((item) => ({ id: item.id, qty: item.qty }))
          })
        });

        const data = await response.json();
        if (!response.ok || !data.id) {
          throw new Error(data?.error || "Could not create PayPal order");
        }
        return data.id;
      } catch (error) {
        console.error("PayPal createOrder error:", error);
        toast("No se pudo abrir el pago. Revisa datos de PayPal.");
        throw error;
      }
    },
    onApprove: async function (data) {
      try {
        const captureResponse = await fetch(`${API_BASE}/api/capture-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderID: data.orderID })
        });

        const result = await captureResponse.json();
        if (captureResponse.ok && result.success) {
          cart = [];
          localStorage.removeItem("axyon_cart_v2");
          sessionStorage.setItem("axyon_verified_receipt", JSON.stringify(result));
          window.location.href = `/success.html?order=${result.orderCode}`;
          return;
        }

        throw new Error(result?.error || "Payment capture failed");
      } catch (error) {
        console.error("PayPal capture error:", error);
        toast("Pago rechazado o cancelado. Intenta otra vez.");
      }
    },
    onCancel: function () {
      toast("Pago cancelado.");
    },
    onError: function (error) {
      console.error("PayPal button error:", error);
      toast("Error de PayPal. Prueba de nuevo en unos segundos.");
    }
  }).render("#paypal-button-container");
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  modalProductId = productId;
  const stockLabel = product.stock === 0 ? "Out of stock" : `${product.stock} in stock`;
  productModalTitle.textContent = product.name;
  productModalCopy.innerHTML = `
        <b>${product.category}</b><br><br>
        ${product.desc}<br><br>
        Price: <b>${money(product.price)}</b><br>
        Stock: <b>${stockLabel}</b>
      `;
  productModalAdd.disabled = product.stock === 0;
  productModalAdd.textContent = product.stock === 0 ? "Sold out" : "Add to cart";
  productModal.classList.add("active");
  document.body.classList.add("lock");
}

function closeProduct() {
  productModal.classList.remove("active");
  document.body.classList.remove("lock");
  modalProductId = null;
}

function render() {
  renderChips();
  renderProducts();
  renderCart();
}

couponInput.value = coupon;

document.getElementById("openCartBtn").addEventListener("click", () => {
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("heroCheckout").addEventListener("click", () => {
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "All";
  categorySelect.value = "All";
  sortSelect.value = "popular";
  render();
});

let productsRenderScheduled = false;
searchInput.addEventListener("input", () => {
  if (productsRenderScheduled) return;
  productsRenderScheduled = true;
  requestAnimationFrame(() => {
    renderProducts();
    productsRenderScheduled = false;
  });
});
sortSelect.addEventListener("change", renderProducts);
categorySelect.addEventListener("change", () => {
  activeCategory = categorySelect.value;
  render();
});

document.getElementById("applyCoupon").addEventListener("click", applyCoupon);
couponInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applyCoupon();
});

document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("closeCheckout").addEventListener("click", closeCheckout);
document.getElementById("closeProduct").addEventListener("click", closeProduct);
productModalAdd.addEventListener("click", () => {
  if (modalProductId) addToCart(modalProductId);
  closeProduct();
});

checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) closeCheckout();
});

productModal.addEventListener("click", (event) => {
  if (event.target === productModal) closeProduct();
});

const dotContainer = document.querySelector(".hero-grid-dots");
if (dotContainer) {
  const dotsCount =
    window.innerWidth < 640 ? 32 : IS_LOW_END_DEVICE ? 56 : 96;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < dotsCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = 100 * Math.random() + "%";
    dot.style.top = 100 * Math.random() + "%";
    dot.style.setProperty("--x", 200 * Math.random() - 100 + "px");
    dot.style.setProperty("--y", 200 * Math.random() - 100 + "px");
    dot.style.animationDuration = 5 + 10 * Math.random() + "s";
    fragment.appendChild(dot);
  }

  dotContainer.innerHTML = "";
  dotContainer.appendChild(fragment);
}

function enableSmoothWheelScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (typeof window.Lenis === "undefined") return;

  const lenis = new window.Lenis({
    smoothWheel: true,
    syncTouch: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 0.9,
    lerp: 0.09
  });

  window.lenisInstance = lenis;

  let rafId = null;
  const onFrame = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(onFrame);
  };
  rafId = requestAnimationFrame(onFrame);

  window.addEventListener("beforeunload", () => {
    if (rafId) cancelAnimationFrame(rafId);
    lenis.destroy();
  });
}

render();
enableSmoothWheelScroll();
