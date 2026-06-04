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

    reset: function () { P = blank(); save(P); location.reload(); },

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
