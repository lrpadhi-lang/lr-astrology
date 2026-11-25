/* sw.js — offline shell for LR Astrology v3.2 (single-file build).
   Network-first for the page (so updates arrive), cache-first for icons.
   API calls (Sarvam, Agora, Razorpay, geocoding, visitor counter) are never cached. */
const CACHE = 'lr-astrology-v3.2';
const SHELL = [
    './',
    './index.html',
    './manifest.webmanifest',
    './assets/icon-192.png',
    './assets/icon-512.png'
];
const NEVER_CACHE = /(api\.sarvam\.ai|agora\.io|razorpay\.com|open-meteo\.com|workers\.dev|qrserver\.com|googleapis\.com|gstatic\.com|abacus\.jasoncameron\.dev)/;

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            return Promise.all(SHELL.map(function (url) {
                return cache.add(new Request(url, { cache: 'reload' })).catch(function () { /* skip a missing file */ });
            }));
        }).then(function () { return self.skipWaiting(); })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key) {
                return key === CACHE ? null : caches.delete(key);
            }));
        }).then(function () { return self.clients.claim(); })
    );
});

self.addEventListener('fetch', function (event) {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;
    if (NEVER_CACHE.test(req.url)) return;

    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req).then(function (res) {
                const copy = res.clone();
                caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
                return res;
            }).catch(function () {
                return caches.match('./index.html').then(function (hit) {
                    return hit || caches.match('./');
                });
            })
        );
        return;
    }

    event.respondWith(
        caches.match(req).then(function (hit) {
            if (hit) return hit;
            return fetch(req).then(function (res) {
                if (res && res.status === 200 && res.type === 'basic') {
                    const copy = res.clone();
                    caches.open(CACHE).then(function (c) { c.put(req, copy); });
                }
                return res;
            });
        })
    );
});
