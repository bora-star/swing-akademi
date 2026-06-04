# Swing Akademi — Dalga 0 Denetimi (gerçek HTML'e karşı)

> **Amaç:** `swing-akademi-inceleme.md` değerlendirmesini repodaki **gerçek HTML** ile karşılaştırıp
> hangi iddiaların doğru, hangilerinin lossy markdown dökümünün ürettiği yanlış alarm olduğunu ayırmak.
> **Karar:** Skill-erişim modeli = **sadece snapshot** (üyeye skill erişimi verilmez; her lab donmuş örnek çıktıyla öğretilir).
> **Tarih:** 2 Haziran 2026 · Denetçi: oturum içi, dosyalar tek tek okunarak.

---

## Özet hüküm

Eğitim çekirdeği sağlam: 12 modül, modül başına 10-17 kart, her modülde 4 interaktif soru, tutarlı "Yani:" ritmi.
**Hiçbir modülde gerçek placeholder yok.** Review'ın en yüksek öncelikli maddesi (#1, "boş kartları doldur")
tamamen yanlış alarm — kaynağı benim ürettiğim bozuk `.md` dökümü (`<table>`, `.note`, bazı `<li>`'ler düştü).

Gerçek iş **içerik doldurmada değil, altyapıda**: SRS havuzu, faz sınavları, hesaplayıcılar ve (snapshot kararı
nedeniyle artık zorunlu olan) skill çıktı snapshot'ları repoda fiilen yok.

---

## Review'ın 14 aksiyonu — kalibre edilmiş hüküm

| # | Review iddiası | Gerçek HTML'de durum | Hüküm |
|---|---|---|---|
| 1 | Boş/placeholder kartları doldur (Kritik) | 5 kartın 5'i de **tam dolu** (M1 FOMO/Revenge/Tilt tablosu, M3, M4, M6, M7) | ❌ **Yanlış alarm** — iş yok |
| 2 | Her skill-lab'a snapshot | `assets`'te hiç görsel yok | ✅ **Gerçek + artık ZORUNLU** (snapshot-only karar) |
| 3 | Her modüle 3-5 SRS sorusu | `data/` ve hiç JSON yok | ✅ **Gerçek** |
| 4 | 4 faz sınavı | CONCEPT'te "boss/sınav" vaadi, kod yok | ✅ **Gerçek** |
| 5 | Lot hesaplayıcı + EV slider | `akademi.js` sadece XP/streak motoru (159 satır), calc/slider yok | ✅ **Gerçek** |
| 6 | "Ne zaman çalışmaz" + drawdown kartları | Drawdown M1+M11'de *değiniliyor*; rejim-başarısızlık (choppy/false breakout) kartı **yok** | 🟡 **Kısmen** — kavram var, ithal edilecek olan derinlik/yaşatma |
| 7 | Günlük mikroyu mobil-öncelikli | (UX, kod düzeyinde doğrulanmadı) | 🟡 Açık — tasarım kararı |
| 8 | Eşiklerin gerekçesi/esnekliği | M3 ADR kartı zaten "küçük hesabı hızlı büyütmek için" gerekçesi + "Denge" notu içeriyor | 🟡 **Çoğu var** — sadece "kendi hesabına göre ayarla" cümlesi eklenebilir |
| 9 | Komisyon/slippage/vergi uyarısı | Sadece M9'da gap riski; komisyon/slippage/vergi **yok** | ✅ **Gerçek (küçük)** |
| 10 | Worksheet → interaktif | `worksheets/` klasörü **hiç oluşturulmamış** (README hayalet referans) | ✅ Hayalet — sıfırdan karar |
| 11 | Karar-replay MVP | Hiç yok | ✅ Gerçek (büyük özellik) |
| 12 | "İleri katman" blokları | CONCEPT satır 15 vaat ediyor; modüllerde **hiç İleri bloğu yok** | ✅ **Gerçek çelişki** — inşa et VEYA vaadi düzelt |
| 13 | Kontrast/WCAG + yoğun kart | (UX, görsel test gerek) | 🟡 Açık |
| 14 | "Skool'a paylaş" başarı kartı | Yok | ✅ Gerçek (nice-to-have) |

---

## Snapshot zorunluluk haritası (snapshot-only kararının sonucu)

Skill erişimi verilmeyeceği için her skill-lab'ın donmuş çıktısı şart. Modül → snapshot'lanacak skill:

| Modül | Skill(ler) | Snapshot içeriği |
|---|---|---|
| M1 | trendcheck (gözlem) | hafif — trend skoru örneği (opsiyonel) |
| M2 | marketpulse · makro | SPY/QQQ 50/200 SMA konumu 🟢/🔴 |
| M3 | qswing(tara) · firsattara · trendcheck | ADAY/İZLE/ELENDİ tarama listesi |
| M4 | qswing(tek) · swinganalysis | sıkı kurulum + 10/20 SMA okuma |
| M5 | qswing · swinganalysis | giriş/stop + ATR seviyeleri |
| M6 | qswing | **(snapshot değil — burada lot hesaplayıcı interaktifi gerek)** |
| M7 | qswing · trailstop | 10 DMA trailing + "nereye kadar tut" |
| M8 | firsattara · leapsflow · smartmoney | çift onaylı (🟢∩🟢) fikir kartı |
| M9 | firsattara · qswing | earnings gap + açılış mumu dibi stop |
| M10 | **(skill yok — tradelog mevcut değil)** | **gömülü işlem günlüğü interaktifi gerek** |
| M11 | portman · porttech · protect | portföy ısı/korelasyon + koruma paketi |
| M12 | dailypack + (makro/firsattara/smartmoney/trailstop/protect/qswing) | sabah rutini tek-paket çıktısı |

> **İki kör nokta:** M6 ve M10'un labı bir skille değil, **gömülü bir araca** dayanmalı (lot hesaplayıcı / işlem günlüğü).
> Snapshot bunları çözmez — bunlar hesaplamalı interaktif olmak zorunda. Bu, #5'i M6/M10 için *zorunlu* yapar.

---

## Calibre edilmiş yol haritası (önerilen)

**Dalga 1 — Düşük maliyet, yüksek etki, doğrulanmış:**
1. `data/srs-pool.json` — her modülün 3-5 sorusu (review Ek C neredeyse hazır taslak).
2. 4 faz sınavı (review Ek D hazır taslak) + günlük mikro motorunun SRS havuzuna bağlanması.
3. M6 lot hesaplayıcı + M10 işlem günlüğü interaktifi (skill olmadığı için *zorunlu*).

**Dalga 2 — Snapshot altyapısı + etkileşim:**
4. Snapshot'lar (yukarıdaki harita) — skill-only kararının zorunlu kıldığı omurga.
5. EV slider (M1/M10) + kayıp serisi simülatörü (M1/M10) — review Ek B.2/B.3.

**Dalga 3 — Derinlik & dürüstlük:**
6. "Sistem ne zaman çalışmaz" kartı (M2 kısa + M11 derin) + komisyon/slippage/vergi uyarısı (M6 veya M10).
7. "İleri katman" çelişkisini çöz: ya 3-4 modüle 🔬 blok ekle, ya CONCEPT/README vaadini düzelt.
8. Karar-replay MVP (M4/M5/M7) + "Skool'a paylaş" başarı kartı.

**Yapılmayacaklar (review'dan düşenler):** #1 (boş kart) iş değil. #8 (eşik gerekçesi) çoğu zaten var.
