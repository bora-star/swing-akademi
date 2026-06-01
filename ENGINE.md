# ENGINE.md — Qullamaggie Momentum Breakout Motoru

> Bu eğitimin **omurgası**. Kaynak: kullanıcının "Momentum_Breakout_Engine.pdf" sunumu (13 slayt),
> Kristjan Kullamägi (Qullamaggie) metodunun anatomisi. Tüm modüller bu sistemi adım adım inşa eder.
> **Lab aracı:** `qswing` skill'i (tara + tek hisse breakout/EP analizi) bu motorun birebir uygulaması.

## Çekirdek tez
Piyasanın **en güçlü** hisseleri, güçlerini kısa vadede sürdürür. Bu hisseler **sıkı bir
konsolidasyondan** yukarı kırıldığında, küçük ve net bir riskle (1R) girip kazananı trend bitene
kadar taşıyarak (10R+) **asimetrik getiri** elde edilir. Tahmin yok; kurallı icra var.

## Kutsal Kâse Paradoksu (sistemin ruhu)
- **İsabet oranı sadece %25–30.** Amaç haklı çıkmak değil; haklı olduğunda asimetrik kazanmak.
- **Sır:** Zararı anında kes (**1R risk**), kazananı trend bitene kadar taşı (**10R+ ödül**).
- → Bu, Modül 1'deki beklenen değer/kumarhane dersinin birebir uygulamasıdır.

## Motor — adım adım
1. **Piyasa İzni (Endeks Filtresi):**
   - 🟢 **Gaz Pedalı:** Endeksler **50 VE 200 günlük SMA'nın ÜZERİNDE** → boğa piyasası, agresif, maksimum
     sermaye. Sistem kazancının büyük çoğunluğunu burada elde eder.
   - 🔴 **Fren:** Endeksler **50 günlük SMA'nın ALTINDA** → korunma; pozisyonları küçült veya tamamen
     nakde geçip bekle.
2. **Filtreleme Hunisi (av sahası):**
   - **Momentum:** Son **1, 3, 6 ayın** en büyük kazananları (Top Gainers). Dipte yatanlar reddedilir.
   - **Volatilite:** Günlük Ortalama Hareket (**ADR**) **≥ %5**. (Küçük hesabı hızlı büyütmek + 10R'lik
     hareket için oynaklık şart.)
   - **Likidite:** Günlük işlem hacmi **≥ $20 Milyon**.
   - Not: Hikâye/haber **ikincil**. Odak tamamen **kurulum (setup) kalitesi**.
3. **Sıkı Kurulum (Tight Consolidation):**
   - **Bayrak Direği (Flag Pole):** Öncesinde keskin, güçlü bir yükseliş.
   - **Sıkı Konsolidasyon (Flag):** Fiyat dar bir aralıkta "yay gibi" gerilerek dinlenir.
   - **Hiyerarşi:** **10 günlük SMA daima 20 günlük SMA'nın üzerinde.** Fiyat bu ortalamaların hemen üstünde,
     sıkışarak.
   - "It's all about tight setups." Sıkılık = yakın stop = küçük risk + patlama potansiyeli.
4. **Giriş Tetikleyicileri:**
   - **ORH (Açılış Aralığı Kırılımı):** En sık. Hissenin ilk **1,5 veya 60 dakikasının** zirvesi (High)
     **hacimle** kırıldığında tetik.
   - **EP (Episodic Pivot):** Kazanç (earnings) veya majör haberle gelen devasa yukarı **gap** açılışı.
   - **KRİTİK:** Gün içi hareket zaten **1 ATR'yi aştıysa** kovalama yok (FOMO'ya kapılma).
5. **Başlangıç Stop-Loss'u:**
   - **Kural 1 (katı):** İlk gün stop = **günün en düşüğü (Low of the Day, LoD)**.
   - **Kural 2 (gap istisnası):** Gap/EP'de stop = **açılış mumunun dibi**; aradaki gap mesafesi risk
     hesabına dahil.
   - **Mesafe sınırı:** Stop genelde **1 günlük ATR'den** geniş olmamalı. Geniğse işlem çok riskli.
6. **Kâr Alma — "3-5 Gün Kuralı":**
   - Kırılım sonrası momentum hızlı ve şiddetli olmalı.
   - **3-5 gün içinde** güçlü ralli olursa pozisyonun **%33-%50'sini** güce satarak kâr al.
   - Kalan için stop'u **maliyete (breakeven)** çek → artık "Ücretsiz Sörf" (free ride).
7. **Trendi Sürme — 10 Günlük Trailing Stop:**
   - Kalan pozisyon (runner) hedefsiz; trend bitene kadar taşınır.
   - Takip: kalan kısım **10 günlük hareketli ortalama (10 DMA)** ile sürülür.
   - **Nihai çıkış:** Fiyatın **ilk kez 10 DMA'nın altında günlük KAPANIŞ** yapması. Gün içi sarkmalar
     dikkate alınmaz; sadece kapanış.
8. **Mekanik Pozisyon Boyutu:**
   - Her işlem için **sabit parasal risk** (örn. $500). "Hesabın %X'i" değil, sabit dolar.
   - **Alınacak Lot = Parasal Risk Tutarı ÷ (Giriş Fiyatı − Stop Fiyatı).**
   - **Konsantrasyon sınırı:** Tek hisse portföyün **maksimum ~%20'si**.

## Kusursuz işlemin yaşam döngüsü (4 evre)
1. **Setup:** Sıkı bayrak + 10>20 SMA konumu.
2. **Entry & Risk:** ORH kırılımı + stop günün dibine.
3. **Partial Exit:** 3-5 gün sonra %50 sat + stop'u maliyete çek.
4. **Ultimate Exit:** Trendi sür, 10 DMA altında günlük kapanışla nihai çıkış.

## Operasyonel rutin
- **Screener:** Her gün kapanış sonrası 1/3/6 aylık Top Gainers taranır.
- **Watchlist:** Sadece en sıkı 10-20 hisse ertesi güne radar.
- **Duygusal izolasyon:** Dedikodu/forum/his değil — sadece **fiyat, hacim, sıkışma**.
- PCF mantığı (TC2000): ör. `C > C[1] AND V > V[10] AND RSI > 60 AND CLOSE > OPEN`.

## Pre-Flight Çeklist (5 yeşil ışık — hepsi yoksa işlem YOK)
1. **Piyasa İzni:** Endeksler 50 ve 200 SMA üzerinde mi?
2. **Momentum Kalitesi:** Son ayların top gainer'ı mı ve ADR > %5 mi?
3. **Sıkı Kurulum:** 10 DMA, 20 DMA üzerinde ve formasyon yeterince sıkı mı?
4. **Giriş & Risk:** Tetikleyici net mi? Stop mesafesi 1 ATR'yi aşıyor mu?
5. **Mekanik Boyut:** Lot sabit-risk formülüyle mi ve %20 kuralı korundu mu?
> "Disiplin, stratejinin kendisinden daha önemlidir."

## Müfredata eşleme
| Modül | Motor parçası |
|---|---|
| 1 | %25 Paradoksu = kumarhane/edge (zihniyet) |
| 2 | Piyasa İzni (Endeks Filtresi) |
| 3 | Filtreleme Hunisi (momentum/ADR/likidite) |
| 4 | Sıkı Kurulum (tight consolidation) |
| 5 | Giriş (ORH/EP) + Stop (LoD/1ATR) |
| 6 | Mekanik pozisyon boyutu + %20 kuralı |
| 7 | Kâr alma (3-5 gün) + 10 DMA trailing |
| 8 | Akıllı para onayı (opsiyonel güç katmanı) |
| 9 | Episodic Pivot + Earnings |
| 10 | İşlem günlüğü + beklenen değer (%25'i ölçmek) |
| 11 | Portföy + konsantrasyon (%20) |
| 12 | Pre-Flight çeklist + playbook + mezuniyet |
