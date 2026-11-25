/* ui.js — non-blocking toasts, keyboard/accessibility helpers, PWA registration.
   Loaded before app.js so that alert() calls inside the app never block the page. */
(function () {
    'use strict';

    function toastHost() {
        var host = document.getElementById('toastHost');
        if (!host) {
            host = document.createElement('div');
            host.id = 'toastHost';
            host.className = 'toast-host';
            host.setAttribute('role', 'status');
            host.setAttribute('aria-live', 'polite');
            document.body.appendChild(host);
        }
        return host;
    }

    function showToast(message, kind) {
        var text = (message === null || message === undefined) ? '' : String(message);
        if (!text) return;
        if (!document.body) return;
        var el = document.createElement('div');
        el.className = 'toast toast-' + (kind || 'info');
        el.textContent = text;
        toastHost().appendChild(el);
        requestAnimationFrame(function () { el.classList.add('toast-in'); });
        var life = (kind === 'error') ? 5200 : 3400;
        setTimeout(function () { el.classList.remove('toast-in'); el.classList.add('toast-out'); }, life - 400);
        setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, life);
    }

    window.showToast = showToast;

    /* alert() is used in ~50 places in the app. Route it to a toast so the page
       never freezes behind a modal dialog. Errors still stay on screen longer. */
    var nativeAlert = window.alert ? window.alert.bind(window) : null;
    window.alert = function (message) {
        if (!document.body) {
            if (nativeAlert) nativeAlert(message);
            return;
        }
        var text = String(message === null || message === undefined ? '' : message);
        var isError = /(తప్పు|లేదు|సరిపోలేదు|కుదరదు|బ్లాక్|కాలేదు|ఇవ్వండి|ఎంచుకోండి|నమోదు చేయండి)/.test(text);
        showToast(text, isError ? 'error' : 'info');
    };

    /* Close the drawer / modals with Escape and keep focus usable. */
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (typeof window.closeDrawer === 'function') {
            var drawer = document.getElementById('siteDrawer');
            if (drawer && drawer.classList.contains('open')) { window.closeDrawer(); return; }
        }
        var openModal = document.querySelector('.login-modal.open, .consult-modal.open, .recharge-modal.open, .settings-modal.open, .visitor-modal.open');
        if (openModal && typeof window.closeAllModals === 'function') window.closeAllModals();
    });

    /* Ask the browser to remember the last page position for long result lists. */
    if ('scrollRestoration' in history) {
        try { history.scrollRestoration = 'auto'; } catch (err) { /* ignore */ }
    }

    /* Offline shell — only on http(s); file:// cannot register a worker. */
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('sw.js').catch(function () {
                /* registration is optional; the app still works without it */
            });
        });
    }
})();
