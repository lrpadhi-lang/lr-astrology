/* payments.js — UPI wallet recharge without a payment gateway.
 *
 * Flow: visitor picks an amount -> pays the owner's UPI ID (intent link or QR)
 * -> types the UPI transaction id (UTR) -> wallet is credited and the payment
 * is logged as "pending" in lrPayRequests. The owner opens "చెల్లింపు రికార్డులు"
 * from settings (PIN protected) and marks each payment verified or rejected.
 *
 * Limitation, by design for a small start: there is no server, so nothing can
 * prove that a UTR was really paid. Duplicate UTRs are refused, and the owner
 * can reject a wrong one (which reverses the credit). Connect Razorpay once
 * volume grows to get automatic verification.
 */
(function () {
    'use strict';

    var LS_REQ = 'lrPayRequests';

    function cfg() {
        try { return JSON.parse(localStorage.getItem('lrAppSettings') || '{}') || {}; } catch (e) { return {}; }
    }
    function saveCfg(obj) {
        try { localStorage.setItem('lrAppSettings', JSON.stringify(obj)); } catch (e) { /* ignore */ }
    }
    function requests() {
        try {
            var list = JSON.parse(localStorage.getItem(LS_REQ) || '[]');
            return Array.isArray(list) ? list : [];
        } catch (e) { return []; }
    }
    function saveRequests(list) {
        try { localStorage.setItem(LS_REQ, JSON.stringify(list)); } catch (e) { /* ignore */ }
    }
    function $(id) { return document.getElementById(id); }
    function toast(msg, kind) {
        if (typeof window.showToast === 'function') window.showToast(msg, kind);
    }
    function money(n) { return '₹' + Number(n || 0).toLocaleString('en-IN'); }
    /* astroState and rechargePick are top-level `let` bindings in app.js: they live
       in the shared global scope but NOT on window. Read them directly. */
    function appState() { try { return astroState; } catch (e) { return null; } }
    function esc(s) {
        return String(s === null || s === undefined ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function amountNow() {
        var custom = $('rechargeCustom');
        var typed = parseInt(((custom && custom.value) || '').replace(/\D/g, ''), 10);
        if (typed > 0) return typed;
        var chip = document.querySelector('#amountChips .amount-chip.active');
        if (chip && chip.dataset && chip.dataset.amt) return parseInt(chip.dataset.amt, 10) || 0;
        /* rechargePick is a top-level let in app.js — same global scope, so read it
           directly instead of through window (where it does not exist). */
        var pick = 0;
        try { pick = Number(rechargePick) || 0; } catch (e) { pick = 0; }
        return pick;
    }

    function currentUser() {
        var p = null;
        try { p = (typeof window.profLoad === 'function') ? window.profLoad() : null; } catch (e) { p = null; }
        var st = appState();
        var mobile = (p && p.mobile) || (st && st.mobile) || '';
        return { prof: p, name: (p && p.name) || '', mobile: mobile };
    }

    /* Credit both wallet stores the app uses (astroState for the wizard,
       profile for the account) plus the shared ledger. */
    function creditWallet(amount, note, extra) {
        var signed = Number(amount) || 0;
        try {
            var st = appState();
            if (st) {
                st.wallet = Number(st.wallet || 0) + signed;
                if (typeof window.saveAstroState === 'function') window.saveAstroState();
            }
        } catch (e) { /* ignore */ }

        try {
            var p = (typeof window.profLoad === 'function') ? window.profLoad() : null;
            if (p) {
                p.wallet = Number(p.wallet || 0) + signed;
                p.tx = p.tx || [];
                p.tx.push(Object.assign({ at: new Date().toISOString(), amt: signed, note: note }, extra || {}));
                if (typeof window.profSave === 'function') window.profSave(p);
                if (typeof window.profRender === 'function') window.profRender();
            }
        } catch (e) { /* ignore */ }

        try {
            var tx = JSON.parse(localStorage.getItem('lrWalletTxns') || '[]');
            tx.push(Object.assign({ type: signed >= 0 ? 'credit' : 'debit', amount: Math.abs(signed), note: note, at: new Date().toISOString() }, extra || {}));
            localStorage.setItem('lrWalletTxns', JSON.stringify(tx));
        } catch (e) { /* ignore */ }

        if (typeof window.renderWallet === 'function') window.renderWallet();
        if (typeof window.fillAstroTopbar === 'function') window.fillAstroTopbar();
    }

    function upiUri(amount) {
        var c = cfg();
        var upi = (c.upiId || '').trim();
        if (!upi) return '';
        var name = (c.upiName || 'LR Astrology').trim();
        return 'upi://pay?pa=' + encodeURIComponent(upi) +
            '&pn=' + encodeURIComponent(name) +
            '&am=' + Number(amount).toFixed(2) +
            '&cu=INR&tn=' + encodeURIComponent('LR Astrology wallet');
    }

    function renderSummary() {
        var c = cfg();
        var upi = (c.upiId || '').trim();
        var idEl = $('upiIdText'), nameEl = $('upiNameText'), amtEl = $('upiAmtText');
        if (idEl) idEl.textContent = upi || 'సెట్టింగ్స్‌లో ఇవ్వలేదు';
        if (nameEl) nameEl.textContent = (c.upiName || '').trim() || '—';
        if (amtEl) amtEl.textContent = money(amountNow());
        var note = $('upiNote');
        if (note) {
            note.textContent = upi
                ? 'చెల్లింపు ID ఇచ్చాక మొత్తం వాలెట్‌లో జోడించబడుతుంది మరియు "సరిచూడాల్సినది"గా నమోదవుతుంది. ఒకే ID రెండుసార్లు వాడలేరు.'
                : 'మొదట ⚙️ సెట్టింగ్స్‌లో మీ UPI ID ఇవ్వండి — అప్పుడే సందర్శకులు చెల్లించగలరు.';
        }
    }

    window.renderUpiSummary = renderSummary;

    /* ---------------- public actions ---------------- */

    window.startUpiPayment = function () {
        var c = cfg();
        var upi = (c.upiId || '').trim();
        var amount = amountNow();
        if (!upi) {
            toast('మొదట సెట్టింగ్స్‌లో మీ UPI ID ఇవ్వండి.', 'error');
            if (typeof window.openSettings === 'function') window.openSettings();
            return;
        }
        if (!amount || amount < 10) {
            toast('కనీసం ₹10 ఇవ్వండి.', 'error');
            return;
        }

        var uri = upiUri(amount);
        var box = $('upiQrBox');
        if (box) {
            box.innerHTML = '';
            var img = document.createElement('img');
            img.alt = 'UPI చెల్లింపు QR కోడ్';
            img.width = 180;
            img.height = 180;
            img.loading = 'lazy';
            img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(uri);
            box.appendChild(img);
        }

        var link = document.createElement('a');
        link.href = uri;
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        link.remove();
        toast('UPI యాప్ తెరుచుకుంటుంది. చెల్లించాక Transaction ID ఇక్కడ నమోదు చేయండి.', 'info');
    };

    window.copyUpiId = function () {
        var upi = (cfg().upiId || '').trim();
        if (!upi) { toast('సెట్టింగ్స్‌లో UPI ID ఇవ్వండి.', 'error'); return; }
        var done = function () { toast('UPI ID కాపీ అయింది: ' + upi, 'success'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(upi).then(done).catch(function () { fallbackCopy(upi, done); });
        } else {
            fallbackCopy(upi, done);
        }
    };

    function fallbackCopy(text, done) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { toast('కాపీ కాలేదు — UPI ID ను చేతితో రాసుకోండి.', 'error'); }
        ta.remove();
    }

    window.submitUpiUtr = function () {
        var amount = amountNow();
        var input = $('upiUtr');
        var utr = ((input && input.value) || '').replace(/[^0-9A-Za-z]/g, '').toUpperCase();

        if (!amount || amount < 10) { toast('కనీసం ₹10 ఇవ్వండి.', 'error'); return; }
        if (utr.length < 6) {
            toast('సరైన చెల్లింపు ID / UTR ఇవ్వండి (కనీసం 6 అక్షరాలు).', 'error');
            if (input) input.focus();
            return;
        }

        var list = requests();
        for (var i = 0; i < list.length; i++) {
            if (list[i].utr === utr) { toast('ఈ చెల్లింపు ID ఇప్పటికే నమోదు అయింది.', 'error'); return; }
        }

        var user = currentUser();
        var rec = {
            id: 'P' + Date.now().toString(36).toUpperCase(),
            amount: amount,
            utr: utr,
            at: new Date().toISOString(),
            status: 'pending',
            name: user.name,
            mobile: user.mobile
        };
        list.unshift(rec);
        saveRequests(list);

        creditWallet(amount, 'UPI రీచార్జ్ — ' + utr, { utr: utr, status: 'pending', ref: rec.id });

        if (input) input.value = '';
        if (typeof window.closeRecharge === 'function') window.closeRecharge();
        toast(money(amount) + ' వాలెట్‌లో జోడించబడింది. చెల్లింపు ID: ' + utr, 'success');
    };

    /* ---------------- owner verification panel ---------------- */

    window.openOwnerPayments = function () {
        var c = cfg();
        var pin = (c.ownerPin || '').trim();
        var modal = $('ownerPayModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'ownerPayModal';
            modal.className = 'recharge-modal';
            modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.remove('open'); });
            document.body.appendChild(modal);
        }
        modal.innerHTML = '<div class="recharge-card">' +
            '<button type="button" class="consult-close" onclick="document.getElementById(\'ownerPayModal\').classList.remove(\'open\')" aria-label="మూసివేయి">&#10005;</button>' +
            '<h3>చెల్లింపు రికార్డులు</h3>' +
            (pin
                ? '<div class="input-group"><label class="input-label" for="ownerPinInput">యజమాని PIN</label>' +
                  '<input type="password" id="ownerPinInput" class="input-field" maxlength="6" inputmode="numeric" placeholder="PIN ఇవ్వండి"></div>' +
                  '<button type="button" class="primary-btn" onclick="verifyOwnerPin()">తెరవండి</button>'
                : '<div id="ownerPayBody"></div>') +
            '</div>';
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (!pin) renderOwnerBody();
    };

    window.verifyOwnerPin = function () {
        var pin = (cfg().ownerPin || '').trim();
        var input = $('ownerPinInput');
        var given = ((input && input.value) || '').trim();
        if (given !== pin) { toast('PIN తప్పు.', 'error'); return; }
        var card = document.querySelector('#ownerPayModal .recharge-card');
        if (card) {
            card.innerHTML = '<button type="button" class="consult-close" onclick="document.getElementById(\'ownerPayModal\').classList.remove(\'open\')" aria-label="మూసివేయి">&#10005;</button>' +
                '<h3>చెల్లింపు రికార్డులు</h3><div id="ownerPayBody"></div>';
        }
        renderOwnerBody();
    };

    function renderOwnerBody() {
        var body = $('ownerPayBody');
        if (!body) return;
        var list = requests();
        var pendingAmt = 0, verifiedAmt = 0, rejectedAmt = 0;
        list.forEach(function (r) {
            if (r.status === 'verified') verifiedAmt += Number(r.amount) || 0;
            else if (r.status === 'rejected') rejectedAmt += Number(r.amount) || 0;
            else pendingAmt += Number(r.amount) || 0;
        });

        var rows = list.map(function (r) {
            var when = new Date(r.at);
            var whenText = isNaN(when.getTime()) ? '' :
                (String(when.getDate()).padStart(2, '0') + '-' + String(when.getMonth() + 1).padStart(2, '0') + '-' + when.getFullYear() +
                 ' ' + String(when.getHours()).padStart(2, '0') + ':' + String(when.getMinutes()).padStart(2, '0'));
            var badge = r.status === 'verified' ? '<span class="badge-ok">సరిచూసినది</span>'
                : r.status === 'rejected' ? '<span class="badge-no">తిరస్కరించినది</span>'
                : '<span class="badge-pending">సరిచూడాలి</span>';
            var actions = r.status === 'pending'
                ? '<div class="owner-actions">' +
                  '<button type="button" onclick="setPayStatus(\'' + r.id + '\',\'verified\')">✔ సరిచూసింది</button>' +
                  '<button type="button" onclick="setPayStatus(\'' + r.id + '\',\'rejected\')">✕ తిరస్కరించు</button></div>'
                : '';
            return '<div class="owner-item">' +
                '<div><b>' + money(r.amount) + '</b> ' + badge + '</div>' +
                '<div>UTR: ' + esc(r.utr) + '</div>' +
                '<div>' + esc(r.name || 'అతిథి') + (r.mobile ? ' · +91 ' + esc(r.mobile) : '') + '</div>' +
                '<div class="since-note">' + esc(whenText) + '</div>' +
                actions + '</div>';
        }).join('');

        body.innerHTML =
            '<div class="upi-card">' +
            '<div class="upi-row"><span>సరిచూడాల్సినవి</span><b>' + money(pendingAmt) + '</b></div>' +
            '<div class="upi-row"><span>సరిచూసినవి</span><b>' + money(verifiedAmt) + '</b></div>' +
            '<div class="upi-row"><span>తిరస్కరించినవి</span><b>' + money(rejectedAmt) + '</b></div>' +
            '</div>' +
            '<div class="owner-list">' + (rows || '<div class="hint-text">ఇంకా చెల్లింపు రికార్డులు లేవు.</div>') + '</div>' +
            '<div class="hint-text">ఈ జాబితా ఈ పరికరంలో నమోదైన చెల్లింపులను మాత్రమే చూపుతుంది. వేరే ఫోన్ నుంచి చేసిన చెల్లింపు కోసం మీ UPI యాప్‌లో లావాదేవీ చూసి నిర్ణయించండి.</div>';
    }

    window.setPayStatus = function (id, status) {
        var list = requests();
        var rec = null;
        for (var i = 0; i < list.length; i++) { if (list[i].id === id) { rec = list[i]; break; } }
        if (!rec) return;
        if (status === 'rejected' && rec.status !== 'rejected') {
            creditWallet(-Number(rec.amount || 0), 'చెల్లింపు తిరస్కరణ — ' + rec.utr, { utr: rec.utr, status: 'rejected' });
        }
        rec.status = status;
        rec.verifiedAt = new Date().toISOString();
        saveRequests(list);
        renderOwnerBody();
        toast(status === 'verified' ? 'చెల్లింపు సరిచూసినట్టు గుర్తించబడింది.' : 'చెల్లింపు తిరస్కరించబడింది — మొత్తం వాలెట్ నుంచి తీసివేయబడింది.', status === 'verified' ? 'success' : 'error');
    };

    /* ---------------- overrides of app.js behaviour ---------------- */

    var origOpenRecharge = window.openRecharge;
    window.openRecharge = function () {
        if (typeof origOpenRecharge === 'function') origOpenRecharge.apply(this, arguments);
        renderSummary();
    };

    var origPickRecharge = window.pickRecharge;
    window.pickRecharge = function () {
        if (typeof origPickRecharge === 'function') origPickRecharge.apply(this, arguments);
        renderSummary();
    };

    var origOnRechargeCustom = window.onRechargeCustom;
    window.onRechargeCustom = function () {
        if (typeof origOnRechargeCustom === 'function') origOnRechargeCustom.apply(this, arguments);
        renderSummary();
    };

    /* Settings: save every field whose id starts with "set", so new fields need
       no change here. */
    var origSaveSettings = window.saveSettings;
    window.saveSettings = function () {
        if (typeof origSaveSettings === 'function') origSaveSettings.apply(this, arguments);
        var s = cfg();
        var fields = document.querySelectorAll('[id^="set"]');
        for (var i = 0; i < fields.length; i++) {
            var el = fields[i];
            if (!el.id || el.id.length < 4) continue;
            var key = el.id.charAt(3).toLowerCase() + el.id.slice(4);
            s[key] = (el.value || '').trim();
        }
        saveCfg(s);
        renderSummary();
    };

    var origOpenSettings = window.openSettings;
    window.openSettings = function () {
        if (typeof origOpenSettings === 'function') origOpenSettings.apply(this, arguments);
        var s = cfg();
        var map = { setUpiId: 'upiId', setUpiName: 'upiName', setOwnerPin: 'ownerPin' };
        Object.keys(map).forEach(function (id) {
            var el = $(id);
            if (el) el.value = s[map[id]] || '';
        });
    };

    /* The old button credited the wallet for free. Never do that again. */
    window.demoRecharge = function () {
        toast('డెమో రీచార్జ్ తీసేయబడింది — UPI చెల్లింపు ID ఇవ్వండి.', 'error');
    };

    window.doRecharge = function () {
        var c = cfg();
        var amount = amountNow();
        if (!amount || amount < 10) { toast('కనీసం ₹10 ఇవ్వండి.', 'error'); return; }
        if ((c.razorpayKey || '').trim() && typeof window.payWithRazorpay === 'function') {
            window.payWithRazorpay(amount);
            return;
        }
        window.startUpiPayment();
    };

    /* Rejected / pending payments are labelled in the wallet line. */
    document.addEventListener('DOMContentLoaded', function () {
        renderSummary();
    });
})();
