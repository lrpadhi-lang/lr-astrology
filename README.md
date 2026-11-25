# LR Astrology — వేద జ్యోతిష్య వేదిక (v2.0)

Telugu Vedic astrology web app. No build step, no framework, no server required.

## Folder structure

```
index.html                     all markup + all CSS (kept inline so the print/PDF
                               routine can copy the styles into the print window)
assets/app.js                  application logic (charts, panchangam, muhurtam, wallet)
assets/payments.js             UPI recharge, UTR log, owner verification panel
assets/ui.js                   toasts (replaces blocking alert()), Escape handling, PWA
assets/vendor/astronomy-engine.js   Astronomy Engine v2 (MIT, by Don Cross)
assets/icon-192.png, icon-512.png   app icons
manifest.webmanifest           installable web app
sw.js                          offline shell
```

Load order matters: `astronomy-engine.js` → `ui.js` → `app.js` → `payments.js`.
`payments.js` replaces a few functions of `app.js` (recharge, settings save) — that
is intentional and works because classic scripts share one global scope.

## Hosting on a free plan

Any static host works. Recommended:

1. **Cloudflare Pages** — free, no card. Create a project, upload this folder
   (or connect a GitHub repo). Build command: none. Output directory: `/`.
2. **GitHub Pages** — push the folder to a repo, Settings → Pages → deploy from
   `main` / root.
3. **Netlify Drop** — drag the folder onto app.netlify.com/drop.

All three serve `index.html` from the root, which is what `manifest.webmanifest`
and `sw.js` assume. HTTPS is automatic on all three, so the service worker and
the GPS button work.

## First-run setup (owner)

Open the app → ⚙️ settings (యజమాని సెట్టింగ్స్):

- **UPI ID** — e.g. `9876543210@ybl`. This is what visitors pay. No bank account
  number or IFSC is needed anywhere in the app.
- **UPI ఖాతా పేరు** — the name shown in the UPI app.
- **యజమాని PIN** — 4 digits; needed to open "చెల్లింపు రికార్డులు".
- Optional: Sarvam AI key (AI chat), Razorpay Key ID (auto checkout), book
  payment links, Agora App ID (voice calls), visitor counter URL.

Settings are stored in this browser only (`localStorage`), so set them on the
device you will use as the owner.

## How UPI recharge works

1. Visitor opens the wallet → picks an amount → **UPI యాప్ తెరవండి** (or scans the QR).
2. They pay your UPI ID and type the UPI transaction id (UTR).
3. The amount is added to their wallet immediately and logged as
   **సరిచూడాలి (pending)** in `lrPayRequests`.
4. You open ⚙️ → **చెల్లింపు రికార్డులు**, check the UTR in your UPI app, and mark
   it verified or rejected (rejection reverses the credit).

**Limits to know:** without a server nothing can prove a UTR was really paid, and
the wallet lives in each visitor's browser. For a shop counter or a single device
this is fine. Once you take online consultations from many customers, move the
wallet and payment check to a backend (Cloudflare Workers + Razorpay Orders API)
— that is the next step, not something this version pretends to do.

## Data storage keys

| key | holds |
| --- | --- |
| `lrAppSettings` | owner settings, keys, UPI id, PIN |
| `lrAstroUser` | wizard session (mobile, birth details, wallet) |
| `lrAuthUser` | logged-in profile |
| `vedic_saved_profiles` | saved birth details |
| `lrWalletTxns` | wallet ledger |
| `lrPayRequests` | UPI payments with UTR + status |
| `lrConsultRequests` | consultation requests |
| `lrLang` | chosen language |

## Version

v2.0 · 25-11-2026 — script split, OTP step removed, UPI recharge, toasts,
PWA/offline, meta/OG tags, accessibility basics. The version is also shown at the
bottom of the owner settings window.
