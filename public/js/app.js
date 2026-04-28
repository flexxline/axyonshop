const products = [
  {
    "id": "fa-discord-accounts",
    "name": "FA Discord Accounts",
    "category": "Social",
    "price": 0.09,
    "popular": 95,
    "stock": 5671,
    "desc": "Fresh Discord accounts with instant delivery.",
    "variants": [
      {
        "id": "email-verified",
        "name": "E-Mail Verified",
        "price": 0.09
      },
      {
        "id": "email-phone-verified",
        "name": "E-Mail + Phone Verified",
        "price": 0.18
      },
      {
        "id": "aged-email-phone-verified",
        "name": "3+ Months Aged E-Mail + Phone Verified",
        "price": 0.27
      }
    ]
  },
  {
    "id": "rockstar-tool",
    "name": "Rockstar Tool",
    "category": "Tools",
    "price": 21,
    "popular": 90,
    "stock": 0,
    "desc": "Premium Rockstar gaming tool."
  },
  {
    "id": "fivem-spoofer",
    "name": "FiveM Spoofer",
    "category": "Tools",
    "price": 2.48,
    "popular": 85,
    "stock": 377,
    "desc": "FiveM anti-ban spoofer.",
    "variants": [
      {
        "id": "1-day",
        "name": "1 Day",
        "price": 2.48
      },
      {
        "id": "7-days",
        "name": "7 Days",
        "price": 6.38
      },
      {
        "id": "30-days",
        "name": "30 Days",
        "price": 12.68
      },
      {
        "id": "lifetime",
        "name": "Lifetime",
        "price": 27.86
      }
    ]
  },
  {
    "id": "cs2-prime-accounts",
    "name": "CS2 Prime Accounts",
    "category": "Gaming",
    "price": 13.28,
    "popular": 88,
    "stock": 70,
    "desc": "Counter-Strike 2 Prime accounts.",
    "variants": [
      {
        "id": "0-300-hours",
        "name": "0-300 Hrs, medals 0-2",
        "price": 13.28
      },
      {
        "id": "1100-4000-hours",
        "name": "1100-4000 Hrs, medals 6-8",
        "price": 27.3
      }
    ]
  },
  {
    "id": "cs2-hours-accounts",
    "name": "CS2 Hours Accounts",
    "category": "Gaming",
    "price": 3.38,
    "popular": 80,
    "stock": 7,
    "desc": "CS2 accounts with hours.",
    "variants": [
      {
        "id": "5000-hours",
        "name": "CS2 Account 5000+ Hours",
        "price": 3.38
      },
      {
        "id": "10000-hours",
        "name": "CS2 Account 10000+ Hours",
        "price": 6.75
      }
    ]
  },
  {
    "id": "cs2-prime-nfa-accounts",
    "name": "CS2 Prime NFA Accounts",
    "category": "Gaming",
    "price": 1.62,
    "popular": 75,
    "stock": 33,
    "desc": "CS2 Prime NFA accounts."
  },
  {
    "id": "apex-legend-accounts",
    "name": "Apex Legend Accounts",
    "category": "Gaming",
    "price": 4.86,
    "popular": 82,
    "stock": 50,
    "desc": "Apex Legends gaming accounts."
  },
  {
    "id": "valorant-accounts",
    "name": "Valorant Accounts",
    "category": "Gaming",
    "price": 5.25,
    "popular": 90,
    "stock": 407,
    "desc": "Valorant Riot accounts.",
    "variants": [
      {
        "id": "ranked-ready",
        "name": "EU Level 1-20 Ranked Ready",
        "price": 5.25
      },
      {
        "id": "1000-3000vp",
        "name": "EU Level 1-20, 1000VP-3000VP",
        "price": 12.75
      },
      {
        "id": "2000-5000vp",
        "name": "EU Level 20-40, 2000VP-5000VP",
        "price": 15.05
      },
      {
        "id": "3000-10000vp",
        "name": "EU Level 40-100, 3000VP-10000VP",
        "price": 21.35
      },
      {
        "id": "5000-20000vp",
        "name": "EU Level 50-200, 5000VP-20000VP",
        "price": 31.5
      },
      {
        "id": "30000-55000vp",
        "name": "EU Level 100-300, 30000VP-55000VP",
        "price": 49
      }
    ]
  },
  {
    "id": "rainbow-six-siege-accounts",
    "name": "Rainbow Six Siege Accounts",
    "category": "Gaming",
    "price": 4.2,
    "popular": 85,
    "stock": 99,
    "desc": "Rainbow Six Siege accounts."
  },
  {
    "id": "fa-fortnite-accounts",
    "name": "FA Fortnite Accounts",
    "category": "Gaming",
    "price": 0.63,
    "popular": 95,
    "stock": 873,
    "desc": "Fresh Fortnite accounts.",
    "variants": [
      {
        "id": "3-10-skins",
        "name": "3-10 Skins Ranked Ready",
        "price": 0.63
      },
      {
        "id": "10-20-skins",
        "name": "10-20 Skins Ranked Ready",
        "price": 1.27
      },
      {
        "id": "20-50-skins",
        "name": "20-50 Skins Ranked Ready",
        "price": 2.25
      },
      {
        "id": "50-100-skins",
        "name": "50-100 Skins OG Included",
        "price": 4.13
      },
      {
        "id": "100-150-skins",
        "name": "100-150 Skins OG Included",
        "price": 8.25
      },
      {
        "id": "150-250-skins",
        "name": "150-250 Skins OG Included",
        "price": 11.25
      },
      {
        "id": "250-400-skins",
        "name": "250-400 Skins OG Included",
        "price": 17.5
      },
      {
        "id": "400-600-skins",
        "name": "400-600 Skins OG Included",
        "price": 39.9
      }
    ]
  },
  {
    "id": "fortnite-vbucks-accounts",
    "name": "Fortnite V-Bucks Accounts",
    "category": "Gaming",
    "price": 3.75,
    "popular": 80,
    "stock": 134,
    "desc": "Fortnite accounts with V-Bucks.",
    "variants": [
      {
        "id": "800-1200",
        "name": "800-1200 V-Bucks",
        "price": 3.75
      },
      {
        "id": "1500-2800",
        "name": "1,500-2,800 V-Bucks",
        "price": 7.5
      },
      {
        "id": "5000-7000",
        "name": "5,000-7,000 V-Bucks",
        "price": 18.9
      }
    ]
  },
  {
    "id": "permanent-spoofer",
    "name": "Permament Spoofer [ALL GAMES]",
    "category": "Tools",
    "price": 6.75,
    "popular": 88,
    "stock": 0,
    "desc": "Permanent spoofer for all games.",
    "variants": [
      {
        "id": "onetime",
        "name": "Onetime Permanent Spoofer",
        "price": 6.75
      },
      {
        "id": "lifetime",
        "name": "Lifetime Permanent Spoofer",
        "price": 14.85
      }
    ]
  },
  {
    "id": "lusive-ultimate-software",
    "name": "Lusive Ultimate Software",
    "category": "Software",
    "price": 0.85,
    "popular": 85,
    "stock": 0,
    "desc": "Ultimate gaming software suite.",
    "variants": [
      {
        "id": "1-day",
        "name": "1 Day Key",
        "price": 0.85
      },
      {
        "id": "1-week",
        "name": "1 Week Key",
        "price": 4.5
      },
      {
        "id": "1-month",
        "name": "1 Month Key",
        "price": 9.75
      },
      {
        "id": "lifetime",
        "name": "Lifetime Key",
        "price": 17.5
      }
    ]
  },
  {
    "id": "accounts-generator",
    "name": "Accounts Generator",
    "category": "Tools",
    "price": 21.7,
    "popular": 90,
    "stock": 83,
    "desc": "Bulk accounts generator.",
    "variants": [
      {
        "id": "week",
        "name": "Week Gen",
        "price": 21.7
      },
      {
        "id": "month",
        "name": "Month Gen",
        "price": 35
      },
      {
        "id": "lifetime",
        "name": "Lifetime Gen",
        "price": 56
      }
    ]
  },
  {
    "id": "black-ops-6-accounts",
    "name": "Black Ops 6 Accounts",
    "category": "Gaming",
    "price": 14.4,
    "popular": 85,
    "stock": 0,
    "desc": "Call of Duty Black Ops 6 accounts."
  },
  {
    "id": "disney-plus-accounts",
    "name": "Disney+ Accounts",
    "category": "Streaming",
    "price": 0.18,
    "popular": 80,
    "stock": 1059,
    "desc": "Disney+ streaming accounts."
  },
  {
    "id": "paramount-plus",
    "name": "Paramount+",
    "category": "Streaming",
    "price": 0.18,
    "popular": 75,
    "stock": 340,
    "desc": "Paramount+ streaming service.",
    "variants": [
      {
        "id": "usa",
        "name": "Paramount+ Region: USA",
        "price": 0.18
      },
      {
        "id": "latam-eu",
        "name": "Paramount+ Region: LATAM & EU",
        "price": 0.27
      }
    ]
  },
  {
    "id": "twitch-follower-accounts",
    "name": "Twitch Follower Accounts",
    "category": "Social",
    "price": 0.09,
    "popular": 70,
    "stock": 159,
    "desc": "Twitch follower accounts.",
    "variants": [
      {
        "id": "fresh",
        "name": "FA Twitch Fresh",
        "price": 0.09
      },
      {
        "id": "100-followers",
        "name": "FA Twitch 100+ Followers",
        "price": 0.36
      },
      {
        "id": "500-followers",
        "name": "FA Twitch 500+ Followers",
        "price": 0.85
      },
      {
        "id": "2000-followers",
        "name": "FA Twitch 2000+ Followers",
        "price": 2.63
      },
      {
        "id": "5000-followers",
        "name": "FA Twitch 5000+ Followers",
        "price": 7.13
      },
      {
        "id": "10000-followers",
        "name": "FA Twitch 10000+ Followers",
        "price": 14.25
      },
      {
        "id": "20000-followers",
        "name": "FA Twitch 20000+ Followers",
        "price": 27.65
      },
      {
        "id": "40000-followers",
        "name": "FA Twitch 40000+ Followers",
        "price": 42
      }
    ]
  },
  {
    "id": "roblox-robux",
    "name": "Roblox (Robux's)",
    "category": "Gaming",
    "price": 4.43,
    "popular": 85,
    "stock": 896,
    "desc": "Roblox accounts with Robux.",
    "variants": [
      {
        "id": "1000-2500",
        "name": "1,000-2,500 Robux",
        "price": 4.43
      },
      {
        "id": "2500-5000",
        "name": "2,500-5,000 Robux",
        "price": 6.75
      },
      {
        "id": "5000-10000",
        "name": "5,000-10,000 Robux",
        "price": 11.25
      },
      {
        "id": "10000-15000",
        "name": "10,000-15,000 Robux",
        "price": 14.7
      },
      {
        "id": "15000-25000",
        "name": "15,000-25,000 Robux",
        "price": 18.55
      },
      {
        "id": "25000-50000",
        "name": "25,000-50,000 Robux",
        "price": 25.9
      }
    ]
  },
  {
    "id": "clash-royale-accounts",
    "name": "Clash Royale Accounts",
    "category": "Gaming",
    "price": 2.25,
    "popular": 75,
    "stock": 222,
    "desc": "Clash Royale gaming accounts.",
    "variants": [
      {
        "id": "1000-2500",
        "name": "1000-2500 Trophies",
        "price": 2.25
      },
      {
        "id": "2500-5000",
        "name": "2500-5000 Trophies",
        "price": 4.88
      },
      {
        "id": "5000-7000",
        "name": "5000-7000 Trophies",
        "price": 9.75
      },
      {
        "id": "7000-10000",
        "name": "7000-10000 Trophies",
        "price": 14.35
      },
      {
        "id": "10000-12000",
        "name": "10000-12000 Trophies",
        "price": 21
      }
    ]
  },
  {
    "id": "bo6-wz4-external",
    "name": "BO6/WZ4 External",
    "category": "Tools",
    "price": 18,
    "popular": 80,
    "stock": 0,
    "desc": "Black Ops 6/Warzone 4 external tool."
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "category": "Streaming",
    "price": 3.53,
    "popular": 85,
    "stock": 0,
    "desc": "Spotify premium accounts.",
    "variants": [
      {
        "id": "account",
        "name": "Spotify Lifetime Account",
        "price": 3.53
      },
      {
        "id": "key",
        "name": "Spotify Lifetime Key",
        "price": 7.2
      }
    ]
  },
  {
    "id": "temporary-spoofer",
    "name": "Temporary Spoofer [ALL GAMES]",
    "category": "Tools",
    "price": 0.85,
    "popular": 70,
    "stock": 0,
    "desc": "Temporary spoofer for all games.",
    "variants": [
      {
        "id": "1-day",
        "name": "1 Day Key",
        "price": 0.85
      },
      {
        "id": "7-days",
        "name": "7 Days Key",
        "price": 4.5
      },
      {
        "id": "31-days",
        "name": "31 Days Key",
        "price": 9
      },
      {
        "id": "lifetime",
        "name": "Lifetime Key",
        "price": 16.1
      }
    ]
  },
  {
    "id": "chatgpt-accounts",
    "name": "ChatGPT Accounts",
    "category": "AI",
    "price": 2.7,
    "popular": 90,
    "stock": 69,
    "desc": "ChatGPT premium accounts."
  },
  {
    "id": "gemini-pro-accounts",
    "name": "Gemini Pro Accounts",
    "category": "AI",
    "price": 1.36,
    "popular": 80,
    "stock": 60,
    "desc": "Google Gemini Pro accounts.",
    "variants": [
      {
        "id": "4-months",
        "name": "Gemini Pro + Antigravity 4 Months",
        "price": 1.36
      },
      {
        "id": "2-years",
        "name": "Gemini Pro + Antigravity 2 Years",
        "price": 5.25
      }
    ]
  },
  {
    "id": "fivem-ready",
    "name": "FiveM Ready [ Fresh ]",
    "category": "Gaming",
    "price": 0.23,
    "popular": 85,
    "stock": 874,
    "desc": "Fresh FiveM ready accounts."
  },
  {
    "id": "youtube-lifetime-accounts",
    "name": "YouTube Lifetime Accounts",
    "category": "Social",
    "price": 1.44,
    "popular": 75,
    "stock": 146,
    "desc": "YouTube lifetime accounts."
  },
  {
    "id": "rockstar-activation-codes",
    "name": "Rockstar Activation Codes [Automatic Delivery]",
    "category": "Gaming",
    "price": 0.24,
    "popular": 70,
    "stock": 0,
    "desc": "Rockstar automatic activation codes."
  },
  {
    "id": "tiktok-1k-followers",
    "name": "TikTok Accounts 1k+ Followers",
    "category": "Social",
    "price": 4.8,
    "popular": 80,
    "stock": 0,
    "desc": "TikTok accounts with 1k+ followers."
  },
  {
    "id": "netflix-lifetime",
    "name": "Netflix Lifetime",
    "category": "Streaming",
    "price": 0.18,
    "popular": 95,
    "stock": 1633,
    "desc": "Netflix lifetime accounts."
  },
  {
    "id": "nord-vpn-lifetime",
    "name": "Nord VPN Lifetime",
    "category": "VPN",
    "price": 0.36,
    "popular": 85,
    "stock": 191,
    "desc": "NordVPN lifetime subscription."
  },
  {
    "id": "cyberghost-vpn-1year",
    "name": "CyberGhost VPN 1 Year",
    "category": "VPN",
    "price": 0.63,
    "popular": 80,
    "stock": 273,
    "desc": "CyberGhost VPN 1 year."
  },
  {
    "id": "tiktok-10k-followers",
    "name": "TikTok Accounts 10k+ Followers",
    "category": "Social",
    "price": 24.85,
    "popular": 85,
    "stock": 0,
    "desc": "TikTok accounts with 10k+ followers."
  },
  {
    "id": "fivem-bundle",
    "name": "FiveM Bundle",
    "category": "Gaming",
    "price": 0.36,
    "popular": 75,
    "stock": 0,
    "desc": "FiveM accounts bundle."
  },
  {
    "id": "tunnelbear-vpn",
    "name": "TunnelBear VPN",
    "category": "VPN",
    "price": 0.32,
    "popular": 70,
    "stock": 175,
    "desc": "TunnelBear VPN accounts."
  },
  {
    "id": "ipvanish-vpn-1year",
    "name": "IP Vanish VPN 1 Year",
    "category": "VPN",
    "price": 0.18,
    "popular": 75,
    "stock": 215,
    "desc": "IPVanish VPN 1 year."
  },
  {
    "id": "tiktok-20k-followers",
    "name": "TikTok Accounts 20k+ Followers",
    "category": "Social",
    "price": 41.3,
    "popular": 90,
    "stock": 0,
    "desc": "TikTok accounts with 20k+ followers."
  },
  {
    "id": "pure-vpn",
    "name": "Pure VPN",
    "category": "VPN",
    "price": 0.85,
    "popular": 80,
    "stock": 271,
    "desc": "PureVPN accounts."
  },
  {
    "id": "discord-generator",
    "name": "Discord Generator [ LIFETIME ]",
    "category": "Tools",
    "price": 42,
    "popular": 85,
    "stock": 35,
    "desc": "Lifetime Discord accounts generator."
  },
  {
    "id": "chatgpt-plus-generator",
    "name": "ChatGPT+ Generator",
    "category": "Tools",
    "price": 35,
    "popular": 90,
    "stock": 46,
    "desc": "ChatGPT Plus accounts generator."
  },
  {
    "id": "fortnite-accounts-gen",
    "name": "Fortnite Accounts Gen",
    "category": "Tools",
    "price": 35,
    "popular": 85,
    "stock": 23,
    "desc": "Fortnite accounts generator."
  },
  {
    "id": "mullvad-vpn-lifetime",
    "name": "Mullvad VPN Lifetime",
    "category": "VPN",
    "price": 5.25,
    "popular": 80,
    "stock": 30,
    "desc": "Mullvad VPN lifetime."
  },
  {
    "id": "hotspot-shield-vpn-1year",
    "name": "HotSpot Shield VPN 1 Year",
    "category": "VPN",
    "price": 1.5,
    "popular": 75,
    "stock": 19,
    "desc": "HotSpot Shield VPN 1 year."
  },
  {
    "id": "rdr2-social-club-accounts",
    "name": "RDR2 Social Club Accounts",
    "category": "Gaming",
    "price": 5.55,
    "popular": 70,
    "stock": 6,
    "desc": "Red Dead Redemption 2 Social Club accounts."
  },
  {
    "id": "steam-generator",
    "name": "Steam Generator [ LIFETIME ]",
    "category": "Tools",
    "price": 7.5,
    "popular": 85,
    "stock": 49,
    "desc": "Lifetime Steam accounts generator."
  },
  {
    "id": "vpn-generator",
    "name": "VPN Generator [ LIFETIME ]",
    "category": "Tools",
    "price": 14,
    "popular": 80,
    "stock": 35,
    "desc": "Lifetime VPN accounts generator."
  },
  {
    "id": "gta-5-accounts",
    "name": "GTA 5 Accounts",
    "category": "Gaming",
    "price": 9.75,
    "popular": 85,
    "stock": 10,
    "desc": "Grand Theft Auto 5 accounts."
  },
  {
    "id": "fa-steam-accounts",
    "name": "FA Steam Accounts",
    "category": "Gaming",
    "price": 0.03,
    "popular": 95,
    "stock": 40238,
    "desc": "Fresh Steam accounts."
  },
  {
    "id": "rambler-email-accounts",
    "name": "Rambler.ru Email Accounts",
    "category": "Social",
    "price": 0.06,
    "popular": 70,
    "stock": 0,
    "desc": "Rambler.ru email accounts."
  },
  {
    "id": "dayz-accounts",
    "name": "DayZ Accounts",
    "category": "Gaming",
    "price": 1.72,
    "popular": 75,
    "stock": 19,
    "desc": "DayZ gaming accounts."
  },
  {
    "id": "50-100-level-ranked",
    "name": "50 - 100 Level [ Ranked Ready ]",
    "category": "Gaming",
    "price": 21.7,
    "popular": 80,
    "stock": 54,
    "desc": "High level ranked accounts."
  },
  {
    "id": "ea-fc-26",
    "name": "EA FC 26",
    "category": "Gaming",
    "price": 16.8,
    "popular": 85,
    "stock": 11,
    "desc": "EA FC 26 accounts."
  },
  {
    "id": "escape-from-tarkov-accounts",
    "name": "Escape From Tarkov Accounts",
    "category": "Gaming",
    "price": 14.7,
    "popular": 80,
    "stock": 25,
    "desc": "Escape From Tarkov Accounts."
  },
  {
    "id": "capcut-pro-lifetime",
    "name": "Capcut Pro Lifetime",
    "category": "Software",
    "price": 0.36,
    "popular": 75,
    "stock": 108,
    "desc": "CapCut Pro lifetime subscription."
  },
  {
    "id": "minecraft-account",
    "name": "Minecraft Account (Full Access)",
    "category": "Gaming",
    "price": 4.13,
    "popular": 85,
    "stock": 11,
    "desc": "Full access Minecraft accounts."
  },
  {
    "id": "14x-1month-server-boosts",
    "name": "14x 1 Month Server Boosts",
    "category": "Social",
    "price": 5.18,
    "popular": 80,
    "stock": 44,
    "desc": "Discord server boosts."
  },
  {
    "id": "rust-accounts",
    "name": "Rust Accounts",
    "category": "Gaming",
    "price": 10.2,
    "popular": 85,
    "stock": 26,
    "desc": "Rust gaming accounts."
  },
  {
    "id": "rust-nfa-accounts",
    "name": "Rust NFA Accounts",
    "category": "Gaming",
    "price": 1.53,
    "popular": 75,
    "stock": 47,
    "desc": "Rust NFA accounts."
  },
  {
    "id": "ufc-lifetime-accounts",
    "name": "UFC Lifetime Accounts",
    "category": "Streaming",
    "price": 0.81,
    "popular": 70,
    "stock": 117,
    "desc": "UFC lifetime accounts."
  },
  {
    "id": "rockstar-products-supplier",
    "name": "Rockstar & Products Supplier",
    "category": "Services",
    "price": 28,
    "popular": 85,
    "stock": 10,
    "desc": "Rockstar products supplier service."
  },
  {
    "id": "rockstar-activation-code-method",
    "name": "Rockstar Activation Code Method",
    "category": "Services",
    "price": 140,
    "popular": 90,
    "stock": 85,
    "desc": "Rockstar activation code method."
  },
  {
    "id": "spotify-lifetime-account",
    "name": "Spotify Lifetime Account",
    "category": "Streaming",
    "price": 3.53,
    "popular": 80,
    "stock": 5,
    "desc": "Spotify lifetime account."
  },
  {
    "id": "hbo-max-lifetime-accounts",
    "name": "HBO Max Lifetime Accounts",
    "category": "Streaming",
    "price": 0.18,
    "popular": 85,
    "stock": 1136,
    "desc": "HBO Max lifetime accounts."
  },
  {
    "id": "050-nfa-accounts",
    "name": "0.50$ NFA Accounts",
    "category": "Gaming",
    "price": 28,
    "popular": 80,
    "stock": 89,
    "desc": "Cheap NFA accounts."
  },
  {
    "id": "instagram-1k-followers",
    "name": "Instagram 1k+ Followers",
    "category": "Social",
    "price": 5.1,
    "popular": 75,
    "stock": 21,
    "desc": "Instagram accounts with 1k+ followers."
  },
  {
    "id": "crunchyroll-mega-fan",
    "name": "Crunchyroll [MEGA FAN MEMBER] Lifetime",
    "category": "Streaming",
    "price": 0.18,
    "popular": 80,
    "stock": 283,
    "desc": "Crunchyroll Mega Fan lifetime."
  },
  {
    "id": "instagram-5k-followers",
    "name": "Instagram 5k+ Followers",
    "category": "Social",
    "price": 12.75,
    "popular": 85,
    "stock": 11,
    "desc": "Instagram accounts with 5k+ followers."
  },
  {
    "id": "duolingo-lifetime",
    "name": "Duolingo Lifetime",
    "category": "Education",
    "price": 0.15,
    "popular": 70,
    "stock": 89,
    "desc": "Duolingo lifetime subscription."
  },
  {
    "id": "nba-lifetime",
    "name": "NBA Lifetime",
    "category": "Streaming",
    "price": 0.15,
    "popular": 75,
    "stock": 196,
    "desc": "NBA lifetime accounts."
  },
  {
    "id": "epic-games-email-changer",
    "name": "Epic Games E-Mail Changer",
    "category": "Tools",
    "price": 6.75,
    "popular": 80,
    "stock": 14,
    "desc": "Epic Games email changer tool."
  },
  {
    "id": "free-steam-games",
    "name": "FREE Steam Games",
    "category": "Gaming",
    "price": 35,
    "popular": 85,
    "stock": 23,
    "desc": "Free Steam games access."
  },
  {
    "id": "prime-video-lifetime",
    "name": "Prime Video Lifetime",
    "category": "Streaming",
    "price": 0.18,
    "popular": 75,
    "stock": 0,
    "desc": "Prime Video lifetime accounts."
  },
  {
    "id": "netflix-generator",
    "name": "Netflix Generator",
    "category": "Tools",
    "price": 14,
    "popular": 85,
    "stock": 0,
    "desc": "Netflix accounts generator."
  },
  {
    "id": "chatgpt-plus-free-method",
    "name": "ChatGPT+ Free Method",
    "category": "Services",
    "price": 35,
    "popular": 90,
    "stock": 44,
    "desc": "Free ChatGPT Plus method."
  },
  {
    "id": "spotify-lifetime-key",
    "name": "Spotify Lifetime Key",
    "category": "Streaming",
    "price": 7.2,
    "popular": 80,
    "stock": 149,
    "desc": "Spotify lifetime activation key."
  },
  {
    "id": "aged-xbox-accounts",
    "name": "Aged Xbox Accounts ",
    "category": "Gaming",
    "price": 0.24,
    "popular": 75,
    "stock": 29,
    "desc": "Aged Xbox gaming accounts."
  },
  {
    "id": "movistar-es-plus-lifetime",
    "name": "Movistar.es+ Lifetime",
    "category": "Streaming",
    "price": 1.1,
    "popular": 70,
    "stock": 53,
    "desc": "Movistar+ lifetime accounts."
  },
  {
    "id": "oneplay-lifetime",
    "name": "Oneplay Lifetime",
    "category": "Streaming",
    "price": 0.81,
    "popular": 75,
    "stock": 389,
    "desc": "Oneplay lifetime accounts."
  },
  {
    "id": "nitro-boost-gift-link",
    "name": "Nitro Boost Gift Link",
    "category": "Social",
    "price": 6.75,
    "popular": 85,
    "stock": 33,
    "desc": "Discord Nitro Boost gift links."
  },
  {
    "id": "dazn-lifetime",
    "name": "Dazn Lifetime",
    "category": "Streaming",
    "price": 0.27,
    "popular": 80,
    "stock": 0,
    "desc": "DAZN lifetime accounts."
  },
  {
    "id": "amc-plus-lifetime",
    "name": "AMC+ Lifetime",
    "category": "Streaming",
    "price": 0.18,
    "popular": 75,
    "stock": 292,
    "desc": "AMC+ lifetime accounts."
  },
  {
    "id": "wondershare-lifetime",
    "name": "Wondershare Lifetime",
    "category": "Software",
    "price": 0.18,
    "popular": 70,
    "stock": 0,
    "desc": "Wondershare lifetime subscriptions."
  },
  {
    "id": "any-steam-game",
    "name": "ANY Steam Game",
    "category": "Gaming",
    "price": 4.5,
    "popular": 90,
    "stock": 769,
    "desc": "Any Steam game access."
  }
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

function productVariants(product) {
  return Array.isArray(product.variants) && product.variants.length
    ? product.variants
    : [{ id: "default", name: "Default", price: product.price }];
}

function getVariant(product, variantId) {
  const variants = productVariants(product);
  return variants.find((variant) => variant.id === variantId) || variants[0];
}

function productPrice(product) {
  return productVariants(product).reduce(
    (lowest, variant) => Math.min(lowest, Number(variant.price)),
    Number.POSITIVE_INFINITY
  );
}

function cartKey(productId, variantId) {
  return `${productId}::${variantId || "default"}`;
}

function syncCartWithCatalog() {
  const synced = [];

  for (const item of cart) {
    const product = products.find((entry) => entry.id === item.id);
    if (!product || product.stock <= 0) continue;

    const variant = getVariant(product, item.variantId);
    const qty = Math.max(1, Math.min(Number(item.qty) || 1, product.stock));
    const key = cartKey(product.id, variant.id);
    const existing = synced.find((entry) => cartKey(entry.id, entry.variantId) === key);

    if (existing) {
      existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
      synced.push({
        id: product.id,
        variantId: variant.id,
        name: product.name,
        variantName: variant.name,
        price: variant.price,
        qty
      });
    }
  }

  cart = synced;
  save();
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

  if (sortSelect.value === "low") results.sort((a, b) => productPrice(a) - productPrice(b));
  if (sortSelect.value === "high") results.sort((a, b) => productPrice(b) - productPrice(a));
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
      const variants = productVariants(product);
      const hasVariants = variants.length > 1;
      const priceLabel = hasVariants ? `From ${money(productPrice(product))}` : money(variants[0].price);
      const variantSelect = hasVariants
        ? `
            <select class="variant-select" data-variant-for="${product.id}" aria-label="${product.name} option">
              ${variants
                .map((variant) => `<option value="${variant.id}">${variant.name} - ${money(variant.price)}</option>`)
                .join("")}
            </select>
          `
        : "";
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
              <div class="price">${priceLabel}</div>
              <div class="stock ${isSoldOut ? "stock-soldout" : ""}">${stockLabel}</div>
            </div>
          </div>
          ${variantSelect}
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
    button.addEventListener("click", () => {
      const select = productGrid.querySelector(`[data-variant-for="${button.dataset.add}"]`);
      addToCart(button.dataset.add, select?.value || "default");
    });
  });

  productGrid.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.view));
  });
}

function addToCart(productId, variantId = "default") {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (product.stock === 0) {
    toast("This product is out of stock.");
    return;
  }

  const variant = getVariant(product, variantId);
  const key = cartKey(productId, variant.id);
  const cartItem = cart.find((item) => cartKey(item.id, item.variantId) === key);
  if (cartItem) {
    if (cartItem.qty >= product.stock) {
      toast("You have reached the available stock for this item.");
      return;
    }
    cartItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      variantId: variant.id,
      name: product.name,
      variantName: variant.name,
      price: variant.price,
      qty: 1
    });
  }

  save();
  renderCart();
  toast(`${product.name} added to cart`);
}

function removeFromCart(productId, variantId = "default") {
  const key = cartKey(productId, variantId);
  const removedItem = cart.find((item) => cartKey(item.id, item.variantId) === key);
  cart = cart.filter((item) => cartKey(item.id, item.variantId) !== key);
  save();
  renderCart();
  if (removedItem) toast(`${removedItem.name} removed`);
}

function changeQty(productId, variantId, delta) {
  const item = cart.find((entry) => cartKey(entry.id, entry.variantId) === cartKey(productId, variantId));
  if (!item) return;

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  item.qty += delta;

  if (item.qty <= 0) {
    return removeFromCart(productId, variantId);
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
          ${item.variantName && item.variantName !== "Default" ? `<div class="cart-variant">${item.variantName}</div>` : ""}
          <div class="cart-meta">
            <span>${money(item.price)} each</span>
            <div class="qty">
              <button data-dec="${item.id}" data-variant-id="${item.variantId || "default"}">-</button>
              <span>${item.qty}</span>
              <button data-inc="${item.id}" data-variant-id="${item.variantId || "default"}">+</button>
              <button class="remove-btn" data-remove="${item.id}" data-variant-id="${item.variantId || "default"}">Remove</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  cartList.querySelectorAll("[data-dec]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.dec, button.dataset.variantId, -1));
  });

  cartList.querySelectorAll("[data-inc]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.inc, button.dataset.variantId, 1));
  });

  cartList.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.remove, button.dataset.variantId));
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
          <span><strong>${item.name}</strong>${item.variantName && item.variantName !== "Default" ? `<br>${item.variantName}` : ""}<br>${item.qty} x ${money(item.price)}</span>
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
            items: cart.map((item) => ({ id: item.id, variantId: item.variantId || "default", qty: item.qty }))
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
  const variants = productVariants(product);
  const hasVariants = variants.length > 1;
  const variantSelect = hasVariants
    ? `
        <label class="variant-label" for="productModalVariant">Option</label>
        <select class="variant-select variant-select-modal" id="productModalVariant">
          ${variants
            .map((variant) => `<option value="${variant.id}">${variant.name} - ${money(variant.price)}</option>`)
            .join("")}
        </select>
      `
    : "";
  productModalTitle.textContent = product.name;
  productModalCopy.innerHTML = `
        <b>${product.category}</b><br><br>
        ${product.desc}<br><br>
        Price: <b>${hasVariants ? `From ${money(productPrice(product))}` : money(variants[0].price)}</b><br>
        Stock: <b>${stockLabel}</b>
        ${variantSelect}
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

syncCartWithCatalog();
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
  const selectedVariant = document.getElementById("productModalVariant")?.value || "default";
  if (modalProductId) addToCart(modalProductId, selectedVariant);
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
