import re
from pathlib import Path

path = Path('public/index.html')
text = path.read_text(encoding='utf-8')

new_products = '''const products=[
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
  {id:"escape-from-tarkov-accounts",name:"Escape From Tarkov Accounts",category:"Gaming",price:13.13,popular:80,stock:25,desc:"Escape From Tarkov accounts."},
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
  {id:"prime-video-lifetime",name:"Prime Video Lifetime",category:"Streaming",price:0.13,popular:80,stock:0,desc:"Prime Video lifetime accounts."},
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
],categories=["All","Gaming","Streaming","VPN","Tools","Software","Social","AI","Services","Education"];
'''

text = re.sub(r'const products=\[.*?\],categories=\["All".*?\];', new_products, text, flags=re.S)

text = text.replace(
    'productGrid.innerHTML=e.map((e=>`\n        <article class="product">\n          <div class="product-top">\n            <span class="tag">${e.category}</span>\n            <span class="mini-arrows"><i></i><i></i><i></i><i></i></span>\n          </div>\n          <h3>${e.name}</h3>\n          <p>${e.desc}</p>\n          <div class="product-bottom">\n            <div>\n              <div class="price">${money(e.price)}</div>\n              <div class="stock">∞ in stock</div>\n            </div>\n          </div>\n          <div class="product-actions">\n            <button class="add" data-add="${e.id}">Add to cart</button>\n            <button class="view" data-view="${e.id}">↗</button>\n          </div>\n        </article>\n      `)).join(""),',
    'productGrid.innerHTML=e.map((e=>`\n        <article class="product">\n          <div class="product-top">\n            <span class="tag">${e.category}</span>\n            <span class="mini-arrows"><i></i><i></i><i></i><i></i></span>\n          </div>\n          <h3>${e.name}</h3>\n          <p>${e.desc}</p>\n          <div class="product-bottom">\n            <div>\n              <div class="price">${money(e.price)}</div>\n              <div class="stock">${e.stock>0?e.stock+" in stock":"Out of stock"}</div>\n            </div>\n          </div>\n          <div class="product-actions">\n            <button class="add" data-add="${e.id}" ${e.stock===0?"disabled":""}>Add to cart</button>\n            <button class="view" data-view="${e.id}">↗</button>\n          </div>\n        </article>\n      `)).join(""),'
)

text = text.replace(
    'productModalCopy.innerHTML=`\n        <b>${t.category}</b><br><br>\n        ${t.desc}<br><br>\n        Price: <b>${money(t.price)}</b><br>\n        Stock: <b>∞ in stock</b>\n      `,productModal.classList.add("active"),document.body.classList.add("lock"))',
    'productModalCopy.innerHTML=`\n        <b>${t.category}</b><br><br>\n        ${t.desc}<br><br>\n        Price: <b>${money(t.price)}</b><br>\n        Stock: <b>${t.stock>0?t.stock+" in stock":"Out of stock"}</b>\n      `,productModal.classList.add("active"),document.body.classList.add("lock"))'
)

text = text.replace(
    'function openCheckout(){0!==cart.length?(checkoutSummary.innerHTML=cart.map((e=>`\n        <div class="checkout-line">\n          <span><strong>${e.name}</strong><br>${e.qty} × ${money(e.price)}</span>\n          <span>${money(e.qty*e.price)}</span>\n        </div>\n      `)).join("")+`\n        <div class="checkout-line">\n          <span><strong>Total</strong></span>\n          <span><strong>${money(total())}</strong></span>\n        </div>\n      `,checkoutModal.classList.add("active"),document.body.classList.add("lock"),renderPayPal()):toast("Cart is empty")}',
    'function openCheckout(){if(cart.length===0){toast("Cart is empty");return;}if(total()<3){toast("Minimum purchase is €3.00");return;}checkoutSummary.innerHTML=cart.map((e=>`\n        <div class="checkout-line">\n          <span><strong>${e.name}</strong><br>${e.qty} × ${money(e.price)}</span>\n          <span>${money(e.qty*e.price)}</span>\n        </div>\n      `)).join("")+`\n        <div class="checkout-line">\n          <span><strong>Total</strong></span>\n          <span><strong>${money(total())}</strong></span>\n        </div>\n      `;checkoutModal.classList.add("active");document.body.classList.add("lock");renderPayPal()}',
)

path.write_text(text, encoding='utf-8')
print('updated')
