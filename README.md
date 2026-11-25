# LR Astrology — వేద జ్యోతిష్య వేదిక (v3.2 — single-file build)

Telugu Vedic astrology web app. No build step, no framework, no server required.

## v3.2 — Vimshottari dasha fix

`generateVimshottari()` started the first mahadasha at `birth − balance` instead of
`birth − elapsed`, so every mahadasha, bhukti and pratyantar date was shifted by the
length of the dasha balance (e.g. 13y 5m for a Rahu balance). The sookshma table
(`generateSookshmaDasha()`) already used `birth − elapsed`, which is why it looked
right while the Vimshottari table did not. Both now use the same origin:

    elapsed years = total years of the lord − balance at birth

The first mahadasha therefore ends exactly `birth + balance`, and the bhukti that
contains the birth moment is the one shown as current at birth.

## What changed in the previous version

`index.html` is now the **single-file build**: all markup, all CSS and all JavaScript
(including Astronomy Engine) live inside that one page. The separate
`assets/app.js`, `assets/ui.js`, `assets/payments.js` and
`assets/vendor/astronomy-engine.js` files from v2 are no longer needed — their code
is already inlined, so nothing breaks if you delete them.

`index.htm` is a byte-identical copy of `index.html`, for anyone who opens or
renames the file as `.htm`. Both files are the same app.

## Folder structure

```
index.html            the whole app — markup + CSS + JS inline (entry page)
index.htm             identical copy of index.html (same app, .htm name)
assets/icon-192.png   app icon
assets/icon-512.png   app icon (install banner)
manifest.webmanifest  installable web app
sw.js                 offline shell (caches index.html + icons only)
```

The page loads `sw.js` only over https or localhost, so opening the file directly
from disk (`file://`) works with no service-worker errors.

## Hosting on a free plan

Any static host works. Recommended:

1. **Cloudflare Pages** — free, no card. Create a project, upload this folder.
   Build command: none. Output directory: `/`.
2. **GitHub Pages** — push the folder to a repo, Settings → Pages → deploy from
   `main` / root.
3. **Netlify Drop** — drag the folder onto app.netlify.com/drop.

All three serve `index.html` from the root, which is what `manifest.webmanifest`
and `sw.js` assume. HTTPS is automatic on all three, so the service worker, the
install prompt and the GPS button work.

## Local testing

Open `index.html` in a browser. No server needed for the app itself; a local
server (`python3 -m http.server`) is only needed if you want to test the
service worker or the GPS button, because browsers block both on `file://`.

## Build stamp

The page logs `LR Astrology build v3.2 single-file — <date>` in the browser
console, and the same stamp is in an HTML comment inside `<head>`. If a change
does not seem to appear after uploading, check that stamp first: a cached old
copy is the usual cause.
