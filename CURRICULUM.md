# CURRICULUM.md — 12 Modül Üretim Master'ı

Her modülün üretim planı. Modül HTML'i yazılırken bu yapıyı izle.
**Her modül HTML şablonu:** Hedef → Neden önemli → Teori (Temel katman) → Teori (İleri katman)
→ 🧪 Skill-Lab (adım adım) → 📝 Ödev → ✅ Kontrol listesi → ❓ Mini quiz (3-5 soru) → 📖 Sözlük
→ "Yani:" kutuları serpiştirilmiş + standart disclaimer.

İlerleme işaretleri: ⬜ planlandı · 🟨 yazılıyor · ✅ bitti

---

## FAZ 1 — TEMEL & ZİHNİYET (Hafta 1-3)

### Modül 1 — Swing Trading'in DNA'sı + Zihniyet ⬜
- **Hedef:** Swing nedir (gün-içi ile day-trade arası, 2 gün–birkaç hafta tutuş), neden çalışır
  (momentum + ortalamaya dönüş), gerçekçi beklenti (win rate vs R, kayıp normaldir).
- **Temel:** Time horizon, swing vs yatırım vs scalp; "trend dostundur"; kazanma oranı yanılgısı.
- **İleri:** Beklenen değer (expectancy) sezgisi; süreç-odaklılık; tilt/FOMO/revenge trade.
- **Lab:** Yok (gözlem haftası) — bir hisseyi 1 hafta sadece izle, not al.
- **Ödev:** "Neden trade ediyorum?" + kişisel kurallar taslağı (worksheets/kurallar.md).

### Modül 2 — Piyasa Rejimi & Bağlam ⬜
- **Hedef:** "Önce piyasa, sonra hisse." Risk-on/risk-off, trend vs range rejim tespiti.
- **Temel:** SPY/QQQ trendi, VIX seviyesi, 50/200 MA; long-only ne zaman tehlikeli.
- **İleri:** Breadth (SPY vs RSP eşit ağırlık), sektör rotasyonu, Growth/Value; makro takvim riski.
- **Lab:** `marketpulse` (endeks teknik) + `makro` (ekonomi panosu) + `firsattara` rotasyon paneli.
- **Ödev:** Bugünün rejimi nedir? 3 kanıtla yaz. Risk-on mu risk-off mu?

### Modül 3 — Trendin Anatomisi ⬜
- **Hedef:** EMA stack (9>21>50), slope, reclaim/failed retest, göreceli güç (RS vs SPY).
- **Temel:** Hareketli ortalama nedir, dizilim neden önemli, yukarı/aşağı/yatay trend.
- **İleri:** Slope kalitesi, 50 EMA'dan uzanma (>%18 = aşırı), haftalık trend hizası, RS skoru.
- **Lab:** `trendcheck` — 3 hisse çalıştır, skorları (0-100) ve geçersiz kılma seviyelerini oku.
- **Ödev:** Skoru >70 ve <40 olan birer hisse bul, farkı kendi cümlenle açıkla.

## FAZ 2 — SETUP & İCRA (Hafta 4-6)

### Modül 4 — Setup Kataloğu ⬜
- **Hedef:** 5 çekirdek setup: (1) yatay direnç kırılımı, (2) MA'ya pullback, (3) reclaim,
  (4) bayrak/VCP sıkışma, (5) dip-reversal. Her birinin "nasıl görünür / ne zaman geçersiz".
- **Temel:** Her setup'ın şekli, tetikleyici mum, ideal hacim.
- **İleri:** Setup kalite derecesi; "A+ setup" kriterleri; tuzak (fakeout) işaretleri.
- **Lab:** `swinganalysis` (tek hisse modu) — bir aday için setup tipini ve giriş/stop/hedefi çıkar.
- **Ödev:** 3 farklı setup tipini 3 grafikten tanımla (ekran görüntüsü + etiket).

### Modül 5 — Giriş · Stop · Hedef · R/R ⬜
- **Hedef:** Giriş tetiği, stop nereye (yapısal — swing low / MA altı), hedef (ölçülü hareket,
  önceki direnç), Risk/Reward ≥ 2:1 disiplini.
- **Temel:** R nedir (1R = riske ettiğin mesafe), stop'suz trade yok, hedefi önceden yaz.
- **İleri:** Çoklu hedef/kademeli çıkış, stop'u maliyete çekme, trailing; R/R < 2 ise geç.
- **Lab:** `swinganalysis` + `trendcheck` (invalidation seviyeleri) ile bir trade planı yaz.
- **Ödev:** 2 aday için tam plan: giriş, stop, T1, T2, R/R. RR<2 olanı ele.

### Modül 6 — Pozisyon Boyutu & Risk Yönetimi ⬜
- **Hedef:** Hesabın %X'i kuralı (genelde %0.5–1 risk/trade), stop mesafesinden lot hesabı,
  korelasyonlu pozisyon limiti, maksimum açık risk.
- **Temel:** "Ne kadar kaybedebilirim" önce gelir; lot = (hesap×%risk) / (giriş−stop).
- **İleri:** Toplam portföy ısı (heat), korelasyon kümeleri, kademeli ekleme (pyramiding).
- **Lab:** 🆕 **risksize** (öneri) — yoksa `worksheets/risk-hesap.html` ile manuel.
- **Ödev:** Kendi hesabın için risk/trade belirle, 3 senaryo için lot hesapla.

## FAZ 3 — ONAY KATMANLARI (Hafta 7-9)

### Modül 7 — Hacim & Göreceli Güç ⬜
- **Hedef:** RVOL (≥1.5x), kırılımda hacim onayı, RS vs SPY, sektör lideri olma.
- **Temel:** Hacim = niyet; düşük hacimli kırılım şüpheli.
- **İleri:** Akümülasyon/dağıtım, göreceli güç sıralaması, lider vs takipçi.
- **Lab:** `firsattara` — günlük tarama (swing + rotasyon), RVOL ve RS sütunlarını oku.
- **Ödev:** Taramadan RS'i güçlü + hacim onaylı 2 aday seç, neden seçtiğini yaz.

### Modül 8 — Akıllı Para Onayı ⬜
- **Hedef:** Opsiyon flow (sweep/golden sweep, premium≥$250K), dark pool, congress/insider,
  LEAPS birikimi — bunlar setup'ı nasıl *onaylar veya çürütür*.
- **Temel:** Flow nedir, ask-side vs bid-side, bullish vs bearish akış.
- **İleri:** Çift onay (swing 🟢 ∩ flow 🟢); flow ile fiyatın çeliştiği tuzaklar.
- **Lab:** `firsattara` (flow paneli) + `smartmoney` (congress/insider) + `leapsflow`.
- **Ödev:** Bir adayda swing + flow çift onayı ara; bulamazsan "neden yok" yaz.

### Modül 9 — Katalizör & Earnings Yönetimi ⬜
- **Hedef:** Earnings ≤14 gün = swing için kırmızı bayrak (otomatik geç); katalizör türleri;
  oyna vs kaçın kararı.
- **Temel:** Earnings gap riski, IV crush; haber katalizörü vs teknik setup.
- **İleri:** Earnings momentum oynama (ileri/opsiyonel), takvim disiplini.
- **Lab:** Earnings skilleri (preearnings/postearnings/earningstrade) + `firsattara` earnings filtresi.
- **Ödev:** Watchlist'inde earnings ≤14g olanları işaretle, hangilerini neden elediğini yaz.

## FAZ 4 — SİSTEMLEŞME & USTALIK (Hafta 10-12)

### Modül 10 — İşlem Günlüğü & Metrikler ⬜
- **Hedef:** Her trade'i kaydet; win rate, ort. kazanç/kayıp (R), **expectancy**, R-multiple
  dağılımı, hata etiketleri (erken giriş, stop kaçırma, plan dışı).
- **Temel:** Neden günlük tutmadan gelişemezsin; expectancy = (WR×avgWin) − (LR×avgLoss).
- **İleri:** Setup bazlı performans ayrıştırma; en kârlı setup'ı bulma; tilt tespiti.
- **Lab:** 🆕 **tradelog** (öneri) — yoksa `worksheets/islem-gunlugu.html` şablonu.
- **Ödev:** Son/sanal 10 trade'i gir, expectancy hesapla, en zayıf alışkanlığını isimlendir.

### Modül 11 — Portföy · Korelasyon · Korunma ⬜
- **Hedef:** Pozisyon kümeleri (aynı yöne bahis), portföy ısı, hedge ne zaman.
- **Temel:** Çeşitlendirme yanılgısı (5 AI hissesi = 1 bahis); nakit de pozisyondur.
- **İleri:** Korelasyon, beta-ağırlıklı maruziyet, put/indeks hedge mantığı.
- **Lab:** `portman`/`porttech` (portföy görünüm/teknik) + `protect` (koruma paketleri).
- **Ödev:** Portföyünde en yüklü temayı bul; bir koruma alternatifi `protect` ile üret.

### Modül 12 — Kendi Playbook'un + Rutin + Mezuniyet ⬜
- **Hedef:** Tüm öğrenileni tek "trading playbook"a yaz: hangi setup, hangi rejimde, hangi risk,
  hangi onay. Günlük rutin (sabah tarama → plan → icra → akşam günlük).
- **Temel:** Tekrarlanabilir süreç = ustalık; rutin disiplini.
- **İleri:** Kendi kurallarını backtest etme; sürekli iyileştirme döngüsü.
- **Lab:** `dailypack` + `firsattara` rutini (günlük), mezuniyet projesi.
- **Mezuniyet:** Tam bir trade'i baştan sona (rejim→setup→onay→risk→plan→günlük) belgele.

---

## Üretim notları
- Stil: Master Format v1 dark theme, üst butonlar (Tarayıcıda Aç / Yazdır-PDF / HTML Kopyala / Tam Ekran).
- Her modül **standalone** (inline CSS/JS) — Skool'a tek dosya yüklenebilmeli.
- Her HTML'e standart disclaimer + taklit hesap uyarısı.
- Ortak stil değişirse: `assets/akademi.css`'i master yapıp modüllere inline kopyala (Skool standalone ister).
