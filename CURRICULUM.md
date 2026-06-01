# CURRICULUM.md — 12 Modül Üretim Master'ı

> **Omurga: Qullamaggie Momentum Breakout Motoru** (bkz. `ENGINE.md`). Müfredat bu sistemi baştan
> sona inşa eder. Lab aracı: `qswing` skill'i (tara + tek hisse breakout/EP).

Her modül HTML şablonu (interaktif stepper): kapak (kanca) → bağlı öğretici kartlar (köprü
cümleleriyle) → 2-3 düşündüren interaktif soru (anında geri bildirim + XP) → 🧪 skill-lab → 📝 ödev
→ kutlama (XP + rozet + sonraki modüle köprü). Stil: `assets/akademi.css` + `akademi.js`.
Türkçe: doğal, çeviri kokmaz (bkz. `TR_STYLE.md`).

İlerleme: ⬜ planlandı · 🟨 yazılıyor · ✅ bitti

---

## FAZ 1 — TEMEL & PİYASA (Hafta 1-3)

### Modül 1 — Swing'in DNA'sı + %25 Paradoksu ✅ `modules/modul-01.html`
Kumarhane/edge zihniyeti = motorun ruhu. Beklenen değer, kayıp asimetrisi, varyans, süreç>sonuç,
duygular. Sonda "Qullamaggie motoru" reveal'i (%25 isabet, 1R/10R). 16 kart, 3 interaktif.

### Modül 2 — Piyasa İzni: Gaz mı, Fren mi? ✅ `modules/modul-02.html`
Endeks filtresi (slayt 4): 🟢 endeksler 50 VE 200 SMA üstünde = gaz; 🔴 50 SMA altında = fren.
Çift yönlü disiplin. Lab: marketpulse + makro + qswing (pre-flight). 12 kart, 2 interaktif.

### Modül 3 — Av Sahası: En Güçlüyü Filtrele ✅ `modules/modul-03.html`
Filtreleme hunisi (slayt 3): momentum (top gainers 1/3/6 ay) + ADR ≥ %5 + hacim ≥ $20M. 10>20 SMA
hiyerarşisi. Hikâye ikincil. Watchlist rutini. Lab: qswing (tara) + firsattara + trendcheck. 13 kart.

## FAZ 2 — KURULUM & İCRA (Hafta 4-6)

### Modül 4 — Sıkı Kurulum: Yay Gerilmesi ✅ `modules/modul-04.html`
Tight consolidation (slayt 5): bayrak direği + sıkı bayrak, 10 SMA'ya yaslı, 10>20 SMA. Sıkılık =
küçük 1R + büyük R-katı (asimetri). Uzamış/gevşek/kovalama tuzakları. Lab: qswing (tek hisse) +
swinganalysis. 13 kart, 2 interaktif.

### Modül 5 — Giriş & Stop: ORH ve Günün Dibi ⬜
Giriş tetikleri (slayt 6): **ORH** (ilk 1,5/60 dk zirvesi hacimle kırılır) + **EP** (earnings/haber gap).
Kritik kural: gün içi hareket 1 ATR'yi aştıysa kovalama yok. Stop (slayt 7): günün dibi (LoD); gap'te
açılış mumunun dibi; mesafe ≤ 1 ATR. Lab: qswing (tek hisse, EP modu) + swinganalysis.

### Modül 6 — Mekanik Pozisyon Boyutu ⬜
Risk (slayt 10): sabit parasal risk (örn. $500). **Lot = Risk ÷ (Giriş − Stop).** Tek hisse max %20.
Hesabın %X'i değil, sabit dolar. Lab: 🆕 risksize (öneri) veya worksheets/risk-hesap.

## FAZ 3 — YÖNETİM & ONAY (Hafta 7-9)

### Modül 7 — Kâr Alma & Trend Sürme ⬜
3-5 gün kuralı (slayt 8): 3-5 günde güçlü ralli → %33-50 sat, stop'u maliyete çek (free ride).
10 günlük trailing (slayt 9): kalanı 10 DMA'da sür; nihai çıkış = 10 DMA altında ilk günlük KAPANIŞ.
Lab: trailstop + qswing.

### Modül 8 — Akıllı Para Onayı (opsiyonel güç katmanı) ⬜
Flow, dark pool, insider/congress — breakout'a ekstra teyit. Saf Qullamaggie'nin dışında ama uyumlu.
Lab: firsattara (flow) + smartmoney + leapsflow.

### Modül 9 — Episodic Pivot & Earnings ⬜
EP setup'ı (slayt 6): earnings/haber gap'iyle gelen devasa yukarı açılış. Earnings riskini yönetmek.
Lab: earnings skilleri (pre/postearnings, earningstrade) + qswing EP modu.

## FAZ 4 — SİSTEMLEŞME & USTALIK (Hafta 10-12)

### Modül 10 — İşlem Günlüğü & Beklenen Değer ⬜
Win rate, ort. R, expectancy, R-dağılımı, hata etiketleri. %25 isabetle kazandığını ÖLÇ. Lab: 🆕 tradelog.

### Modül 11 — Portföy & Konsantrasyon ⬜
%20 kuralı (slayt 10), portföy ısı, korelasyon, fren ışığında korunma/nakit. Lab: portman/porttech + protect.

### Modül 12 — Pre-Flight Çeklist + Mezuniyet ⬜
5 yeşil ışık çeklisti (slayt 13): piyasa izni · momentum kalitesi · sıkı kurulum · giriş & risk ·
mekanik boyut. Kendi playbook'un + günlük rutin + mezuniyet projesi. Lab: dailypack + qswing rutini.

---

## Skill önerileri (programın açtığı boşluklar)
- 🆕 `tradelog` (expectancy/metrik, M10) · 🆕 `risksize` (pozisyon boyutu, M6) · 🆕 `swingreplay`
  (karar-replay, ödev motoru) · ✏️ `qswing` "akademi modu" (öğretici gerekçe katmanı) ·
  ✏️ tüm skill'lere "📚 İlgili ders" rozeti.
- **Mevcut güçlü eşleşme:** `qswing` zaten Qullamaggie motorunun birebir uygulaması — M3/M4/M5'in ana labı.

## Üretim notları
- Stil: Master Format v1 → Akademi v2 (sıcak-açık, minimal, interaktif stepper). Standalone modüller.
- Her HTML'e standart disclaimer + taklit hesap uyarısı. Doğal Türkçe (TR_STYLE.md).
- Demo ilerleme: index `{demo:true}` (M1-3 done, M4 current). Yayında `{demo:false}`.
