/* ============================================================
   AKADEMİ ENGINE · v1
   İlerleme / XP / seviye / seri — localStorage (backend yok).
   Tüm Akademi eğitimleri bu motoru paylaşır.
   ============================================================ */
(function (global) {
  'use strict';

  var KEY = 'swingakademi.progress.v1';

  var LEVELS = [
    { name: 'Çaylak',  min: 0,    icon: '🌱' },
    { name: 'Çırak',   min: 150,  icon: '📘' },
    { name: 'Swingci', min: 400,  icon: '📈' },
    { name: 'Usta',    min: 800,  icon: '🏆' },
    { name: 'Efsane',  min: 1500, icon: '👑' }
  ];

  function todayKey() {
    // Tarih API'si kısıtlı ortamlarda da çalışsın diye güvenli sarmalayıcı
    try { return new Date().toISOString().slice(0, 10); } catch (e) { return '1970-01-01'; }
  }

  function blank() {
    return {
      xp: 0,
      completed: [],            // tamamlanan modül id'leri (1..12)
      moduleStep: {},           // { "1": 3 } modül içi adım
      streak: { count: 0, last: null, freezes: 2 },
      discipline: { count: 0, last: null },
      micro: { last: null, count: 0 },  // günlük mikro: son tarih + toplam tamamlama
      exams: [],                // tamamlanan faz sınavları (1..4)
      badges: []                // kazanılan rozet id'leri
    };
  }

  function load() {
    try {
      var raw = global.localStorage.getItem(KEY);
      if (!raw) return null;
      return Object.assign(blank(), JSON.parse(raw));
    } catch (e) { return null; }
  }

  function save(p) {
    try { global.localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {}
  }

  function levelFor(xp) {
    var idx = 0;
    for (var i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) idx = i;
    var cur = LEVELS[idx];
    var next = LEVELS[idx + 1] || null;
    var pct = next ? Math.round(((xp - cur.min) / (next.min - cur.min)) * 100) : 100;
    return { idx: idx, name: cur.name, icon: cur.icon, curMin: cur.min,
             next: next, pct: Math.max(0, Math.min(100, pct)) };
  }

  // ---- Demo verisi (yalnız prototip değerlendirmesi için) ----
  function seedDemo() {
    var p = blank();
    p.xp = 220;
    p.completed = [1, 2, 3];
    p.streak = { count: 5, last: todayKey(), freezes: 2 };
    p.discipline = { count: 4, last: todayKey() };
    p.exams = [1];
    p.badges = ['first-step', 'phase1', 'streak5'];
    save(p);
    return p;
  }

  var P = null;

  var API = {
    LEVELS: LEVELS,
    levelFor: levelFor,

    init: function (opts) {
      opts = opts || {};
      P = load();
      if (!P && opts.demo) P = seedDemo();
      if (!P) { P = blank(); save(P); }
      return P;
    },

    get: function () { return P || (P = API.init()); },

    // Modül durumu: ilk tamamlanmamış modül "current", öncekiler "done", sonrakiler "locked"
    statusOf: function (modId) {
      var p = API.get();
      if (p.completed.indexOf(modId) !== -1) return 'done';
      if (modId === 1 || p.completed.indexOf(modId - 1) !== -1) return 'current';
      return 'locked';
    },

    addXP: function (n) { var p = API.get(); p.xp += n; save(p); return p.xp; },

    completeModule: function (modId, xp) {
      var p = API.get();
      if (p.completed.indexOf(modId) === -1) { p.completed.push(modId); p.xp += (xp || 60); }
      save(p); return p;
    },

    touchStreak: function () {
      var p = API.get(), t = todayKey();
      if (p.streak.last === t) return p.streak.count;
      p.streak.count = (p.streak.last) ? p.streak.count + 1 : 1;
      p.streak.last = t; save(p); return p.streak.count;
    },

    recordDiscipline: function (kept) {
      var p = API.get(), t = todayKey();
      if (kept && p.discipline.last !== t) {
        p.discipline.count += 1; p.discipline.last = t; save(p);
      }
      return p.discipline.count;
    },

    // Günlük mikro tamamlandı mı? (bugün için)
    microDoneToday: function () { return API.get().micro.last === todayKey(); },

    // Günlük mikro tamamla: günde 1 kez XP verir, seriyi günceller
    recordMicro: function (xp) {
      var p = API.get(), t = todayKey();
      if (p.micro.last === t) return { awarded: false, count: p.micro.count };
      p.micro.last = t; p.micro.count += 1; p.xp += (xp || 15);
      save(p);
      return { awarded: true, count: p.micro.count };
    },

    // Rozet ver (zaten varsa no-op). Yeni verildiyse true döner.
    awardBadge: function (id) {
      var p = API.get();
      if (p.badges.indexOf(id) === -1) { p.badges.push(id); save(p); return true; }
      return false;
    },

    // Faz sınavı tamamlandı mı?
    examDone: function (n) { return (API.get().exams || []).indexOf(n) !== -1; },

    // Faz sınavını tamamla: ilk geçişte XP + rozet verir. { fresh } döner.
    completeExam: function (n, opts) {
      opts = opts || {};
      var p = API.get(), fresh = (p.exams.indexOf(n) === -1);
      if (fresh) { p.exams.push(n); p.xp += (opts.xp || 50); }
      if (opts.badge && p.badges.indexOf(opts.badge) === -1) p.badges.push(opts.badge);
      save(p);
      return { fresh: fresh };
    },

    // Metni panoya kopyala (+ buton geri bildirimi)
    copyText: function (text, btn) {
      function done(){ if(btn){ var o=btn.textContent; btn.textContent='Kopyalandı ✓'; setTimeout(function(){ btn.textContent=o; },1600); } }
      try { if (global.navigator && navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, function(){}); return; } } catch(e){}
      try { var ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); done(); } catch(e){}
    },

    reset: function () { P = blank(); save(P); location.reload(); },

    // ---------- Karar-Replay motoru ----------
    // opts: { title, bars:[{o,h,l,c,vol,ma10,ma20,label}], decisions:[{afterBar,q,choices:[{t,ok,fb}]}], onDone }
    initReplay: function (el, opts) {
      if (!el) return;
      var bars = opts.bars, decs = opts.decisions, revealed = 0, decIdx = 0, decScore = 0;
      var W = Math.min(600, bars.length * 34 + 40), H = 180, PAD = { t:10, r:10, b:30, l:36 };
      var cw = (W - PAD.l - PAD.r) / bars.length;
      var allH = bars.map(function(b){ return b.h; }), allL = bars.map(function(b){ return b.l; });
      var hi = Math.max.apply(null, allH), lo = Math.min.apply(null, allL);
      var range = hi - lo || 1;
      function py(v){ return PAD.t + (H - PAD.t - PAD.b) * (1 - (v - lo) / range); }
      function px(i){ return PAD.l + i * cw + cw / 2; }

      function drawSVG(n){
        var svgBars = '', svgMA10 = '', svgMA20 = '', labels = '';
        for (var i = 0; i < n; i++) {
          var b = bars[i], x = px(i), bw = cw * 0.55;
          var top = Math.min(b.o, b.c), bot = Math.max(b.o, b.c);
          var bull = b.c >= b.o, col = bull ? '#06C29A' : '#FF5436';
          svgBars += '<line x1="' + x + '" y1="' + py(b.h) + '" x2="' + x + '" y2="' + py(b.l) + '" stroke="' + col + '" stroke-width="1.5"/>';
          svgBars += '<rect x="' + (x - bw/2) + '" y="' + py(top) + '" width="' + bw + '" height="' + Math.max(1, py(bot) - py(top)) + '" fill="' + col + '" rx="1"/>';
          if (b.label) labels += '<text x="' + x + '" y="' + (py(b.h) - 4) + '" text-anchor="middle" fill="#2E84FF" font-size="9" font-family="sans-serif">' + b.label + '</text>';
        }
        var ma10pts = [], ma20pts = [];
        for (var j = 0; j < n; j++) {
          if (bars[j].ma10 != null) ma10pts.push(px(j) + ',' + py(bars[j].ma10));
          if (bars[j].ma20 != null) ma20pts.push(px(j) + ',' + py(bars[j].ma20));
        }
        if (ma10pts.length > 1) svgMA10 = '<polyline points="' + ma10pts.join(' ') + '" fill="none" stroke="#FF9F1C" stroke-width="1.5" stroke-linejoin="round"/>';
        if (ma20pts.length > 1) svgMA20 = '<polyline points="' + ma20pts.join(' ') + '" fill="none" stroke="#2E84FF" stroke-width="1.5" stroke-linejoin="round"/>';
        // ekseni
        var axis = '<line x1="' + PAD.l + '" y1="' + (H - PAD.b) + '" x2="' + (W - PAD.r) + '" y2="' + (H - PAD.b) + '" stroke="#E5D7C2" stroke-width="1"/>';
        var yTicks = '';
        for (var t = 0; t <= 4; t++) {
          var v = lo + (range * t / 4), yt = py(v);
          yTicks += '<line x1="' + PAD.l + '" y1="' + yt + '" x2="' + (W - PAD.r) + '" y2="' + yt + '" stroke="#F0E6D6" stroke-width="1" stroke-dasharray="3,3"/>';
          yTicks += '<text x="' + (PAD.l - 4) + '" y="' + (yt + 4) + '" text-anchor="end" fill="#978C7D" font-size="9" font-family="sans-serif">' + v.toFixed(0) + '</text>';
        }
        var legend = '<text x="' + (W - PAD.r) + '" y="' + (H - PAD.b + 18) + '" text-anchor="end" fill="#FF9F1C" font-size="9" font-family="sans-serif">— 10 GMA</text>';
        legend += '<text x="' + (W - PAD.r - 60) + '" y="' + (H - PAD.b + 18) + '" text-anchor="end" fill="#2E84FF" font-size="9" font-family="sans-serif">— 20 GMA</text>';
        return '<svg width="' + W + '" height="' + H + '" style="max-width:100%">' + yTicks + axis + svgMA10 + svgMA20 + svgBars + labels + legend + '</svg>';
      }

      function stepText(n){ return 'Gün ' + n + ' / ' + bars.length; }

      function render(){
        var svgWrap = el.querySelector('.rp-svg-wrap'); if (!svgWrap) return;
        svgWrap.innerHTML = drawSVG(revealed);
        var stepEl = el.querySelector('.rp-step');
        if (stepEl) stepEl.textContent = stepText(revealed);
        var nextBtn = el.querySelector('.rp-next-bar');
        if (nextBtn) nextBtn.disabled = (checkDecisionBlock() || revealed >= bars.length);
      }

      function checkDecisionBlock(){
        if (decIdx >= decs.length) return false;
        return (revealed >= decs[decIdx].afterBar + 1);
      }

      function showDecision(){
        if (decIdx >= decs.length) return;
        var dec = decs[decIdx];
        if (revealed < dec.afterBar + 1) return;
        var dEl = el.querySelector('.rp-decision');
        dEl.style.display = 'block';
        dEl.querySelector('.q').textContent = dec.q;
        var ch = dEl.querySelector('.rp-choices'); ch.innerHTML = '';
        dec.choices.forEach(function(c){
          var btn = document.createElement('button');
          btn.className = 'rp-choice'; btn.textContent = c.t;
          btn.addEventListener('click', function(){
            var ok = !!c.ok;
            ch.querySelectorAll('.rp-choice').forEach(function(b){
              b.classList.add(b === btn ? (ok ? 'ok' : 'no') : 'dim');
            });
            var fb = dEl.querySelector('.rp-fb');
            fb.innerHTML = c.fb; fb.className = 'rp-fb show ' + (ok ? 'ok' : 'no');
            if (ok) decScore++;
            var nx = dEl.querySelector('.rp-next'); nx.className = 'rp-next show';
            Akademi.addXP(ok ? 5 : 2);
          });
          ch.appendChild(btn);
        });
        dEl.querySelector('.rp-fb').className = 'rp-fb';
        dEl.querySelector('.rp-next').className = 'rp-next';
        el.querySelector('.rp-next-bar').disabled = true;
      }

      function advanceDec(){
        var dEl = el.querySelector('.rp-decision');
        dEl.style.display = 'none'; dEl.querySelector('.rp-fb').className = 'rp-fb';
        decIdx++;
        if (decIdx < decs.length && revealed >= decs[decIdx].afterBar + 1) showDecision();
        var nextBtn = el.querySelector('.rp-next-bar'); if (nextBtn) nextBtn.disabled = (revealed >= bars.length);
        if (revealed >= bars.length) showResult();
      }

      function showResult(){
        var rEl = el.querySelector('.rp-result'); if (!rEl) return;
        rEl.className = 'rp-result show';
        var pct = Math.round(decScore / decs.length * 100);
        rEl.innerHTML = '<b>' + decScore + '/' + decs.length + ' karar doğru (' + pct + '%).</b> ' +
          (pct >= 67 ? 'Kurulumu tanıdın — sahadaki görüşün güçleniyor.' : 'Sonuçlara dön, her kartı tekrar oku.') +
          ' <span style="color:var(--teal-ink);font-weight:700">+' + (decScore * 5 + (decs.length - decScore) * 2) + ' XP</span>';
        if (opts.onDone) opts.onDone(decScore, decs.length);
      }

      // İlk render
      revealed = 5; // ilk 5 bar görünür başlasın
      el.querySelector('.rp-svg-wrap').innerHTML = drawSVG(revealed);
      el.querySelector('.rp-step').textContent = stepText(revealed);

      el.querySelector('.rp-next-bar').addEventListener('click', function(){
        if (revealed < bars.length) { revealed++; render(); }
        var dec = decIdx < decs.length ? decs[decIdx] : null;
        if (dec && revealed >= dec.afterBar + 1) showDecision();
        if (revealed >= bars.length && decIdx >= decs.length) showResult();
      });
      el.querySelector('.rp-next-dec').addEventListener('click', function(){ advanceDec(); render(); });

      // İlk decision varsa hemen kontrol et
      if (decs.length && revealed >= decs[0].afterBar + 1) showDecision();
    },

    // ---------- Görsel yardımcılar ----------
    countUp: function (el, to, dur) {
      to = +to; dur = dur || 900; var start = 0, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / dur);
        el.textContent = Math.round(start + (to - start) * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    },

    confetti: function (n) {
      n = n || 44;
      var colors = ['#FF5436', '#FF9F1C', '#06C29A', '#2E84FF', '#7C5CFF'];
      for (var i = 0; i < n; i++) {
        var d = document.createElement('div');
        d.className = 'confetti-piece';
        var x = (i * 97 + 13) % 100;                 // deterministik dağılım (Math.random yok)
        var dur = 2.4 + ((i % 7) * 0.22);
        var delay = (i % 11) * 0.06;
        d.style.left = x + 'vw';
        d.style.background = colors[i % colors.length];
        d.style.animationDuration = dur + 's';
        d.style.animationDelay = delay + 's';
        if (i % 2) d.style.width = '7px', d.style.height = '11px';
        document.body.appendChild(d);
        (function (el) { setTimeout(function () { el.remove(); }, (dur + delay) * 1000 + 200); })(d);
      }
    },

    revealOnScroll: function () {
      var els = document.querySelectorAll('.reveal');
      if (!('IntersectionObserver' in global)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: .15 });
      els.forEach(function (e) { io.observe(e); });
    }
  };

  global.Akademi = API;
})(window);
