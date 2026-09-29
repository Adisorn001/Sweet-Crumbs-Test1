# 🍰 Sweet Crumbs Bakery — Setup & Run Guide

## Prerequisites: Install Node.js

Node.js is **not currently installed** on this machine. You must install it first.

**Option A — Direct installer (recommended):**
1. Go to https://nodejs.org/
2. Download the **LTS** version (e.g., Node 20.x)
3. Run the installer, accept defaults
4. Open a **new** PowerShell window and confirm: `node -v` and `npm -v`

**Option B — Using NVM for Windows:**
1. Download from: https://github.com/coreybutler/nvm-windows/releases
2. Install `nvm-setup.exe`
3. Open a new PowerShell window, then run:
   ```powershell
   nvm install lts
   nvm use lts
   ```

---

## Running the Project

Once Node.js is installed, open PowerShell in `d:\Project\sweet-crumbs` and run:

```powershell
npm install
npm run dev
```

Then open your browser at: **http://localhost:3000**

---

## Project Structure

```
sweet-crumbs/
├── index.html                  # HTML entry
├── vite.config.js              # Vite config
├── package.json
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # Router + providers
    ├── App.css
    ├── index.css               # Global styles & CSS vars
    ├── data/
    │   └── products.js         # 6 bakery products
    ├── context/
    │   ├── AuthContext.jsx     # Login/Register/Profile (localStorage)
    │   └── CartContext.jsx     # Cart + Order history (localStorage)
    ├── components/
    │   ├── Header.jsx          # Sticky nav, cart badge, user avatar
    │   ├── Header.css
    │   ├── Footer.jsx          # 4-column footer
    │   └── Footer.css
    └── pages/
        ├── Home.jsx            # Page 1 — 3-slide banner + bestsellers
        ├── About.jsx           # Page 2 — story, values, stats
        ├── FeaturedProducts.jsx # Page 3 — 3 featured items
        ├── ProductList.jsx     # Page 4 — all 6 products
        ├── News.jsx            # Page 5 — links to external sites
        ├── Contact.jsx         # Page 6 — map, contact info, form
        ├── Login.jsx           # Login / Register by username
        ├── Profile.jsx         # User profile editor (protected)
        ├── Cart.jsx            # Cart with qty controls + place order
        └── OrderHistory.jsx    # Past orders grouped by day (protected)
```

---

## Features Implemented

| # | Feature | Status |
|---|---------|--------|
| 1 | Home — 3-slide auto-rotating banner | ✅ |
| 2 | About Us — story, values, stats | ✅ |
| 3 | Featured Products — 3 items with descriptions | ✅ |
| 4 | Product List — all 6 products with placeholder images | ✅ |
| 5 | News/Links — 5 external site cards | ✅ |
| 6 | Contact — Google Map embed, all social links, form placeholder | ✅ |
| 7 | Separated components — Header, Footer, each page in own file | ✅ |
| 8 | Top navigation bar with active state indicators | ✅ |
| 9 | Warm bakery design + hover animations, slide transitions, toasts | ✅ |
| 10 | Login/Register by **username only** (no email) | ✅ |
| 11 | User Profile — editable, login-protected | ✅ |
| 12 | Cart + Order history by day, stored in **localStorage** | ✅ |

---

## Design

- **Palette:** Warm browns (`#5D3A1A`, `#8B5E3C`), golden wheat (`#D4A574`), pink accent (`#C85A7C`)
- **Fonts:** Playfair Display (headings) + Lato (body) via Google Fonts
- **Interactions:** Slider arrows & dots, card hover lifts, cart badge pulse, toast notifications, hamburger menu animation

## Data Persistence

All data stored client-side in `localStorage`:

| Key | Contents |
|-----|----------|
| `sweetcrumbs_currentUser` | Active session |
| `sweetcrumbs_users` | All registered users |
| `sweetcrumbs_cart` | Current cart items |
| `sweetcrumbs_orders` | Full order history |
