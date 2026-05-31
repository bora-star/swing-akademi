# CONCEPT.md — Swing Akademi Tasarım & Deneyim Brief'i

> Tasarıma geçmeden önce mutabakat belgesi. v0.1 · 1 Haz 2026.
> Onaylanınca → tasarım dili prototipi (Faz 1). Değişiklik buraya işlenir, sonra build.

## 1. Tek cümle vizyon
Sıkılmadan, her gün küçük adımlarla, **disiplinli bir swing trader** yetiştiren; kendi kendine
dönen, premium-sıcak, oyunlaştırılmış bir eğitim deneyimi — ve gelecekteki tüm eğitimlere
taşınacak yeniden kullanılabilir bir **tasarım sistemi**.

## 2. Kullanıcı kararları (kilitlendi)
| Boyut | Karar |
|---|---|
| Format | Self-paced, standalone HTML modüller |
| Kapsam | 12 hafta / 4 faz / 12 modül, karma seviye (Temel + İleri katman) |
| Görsel temel | **Sıcak-Açık** (krem zemin, mercan/amber/teal aksan) |
| Ton | **Premium-Sıcak** — olgun, güven veren, minimal 🐂 maskot |
| Cihaz | **Masaüstü-öncelikli** (responsive ama önce masaüstü) |
| Görsel stil | **Minimal/şık, tipografi-odaklı** — illüstrasyon değil |
| Ritim | **Hibrit:** günlük 3-5 dk mikro + haftalık derin modül |
| Canlı bağ | Evergreen + **üye-çalıştırır** Haftalık Canlı Meydan Okuma |
| Pratik | Quiz/senaryo + dondurulmuş vaka + **karar-replay** (sim önce bu) → canlı P&L sim sonra |
| Topluluk | **Disiplin liderlik tablosu** (XP/öğrenme, P&L değil) |
| Bakım | **Kendi kendine dönen (~$0)** — dondurulmuş/evergreen + üye-çalıştırır canlı |
| Üye aracı | Üyelere skill erişimi verilecek (üye-çalıştırır model tam güçle) |
| İsim | "Swing Akademi" (şimdilik) |

## 3. Tasarım dili (Akademi Design System)
**Felsefe:** Görsel zenginlik = zarif tipografi + bol boşluk + ince hareket + şık veri görseli.
Karikatür yok, abartılı konfeti yok. "Sabah kahvesi sıcaklığı + premium dergi düzeni."

- **Palet (sıcak-açık):** zemin krem `#FBF7F0`/`#FFFDF9`; metin sıcak-siyah `#211C16`; yumuşak
  metin `#6E655B`; ince çizgi `#ECE3D6`. Aksan: mercan `#FF6B4A` (ana eylem), amber `#F5A623`,
  teal/yeşil `#12B886` (başarı/ilerleme). Aksan **az ve bilinçli** kullanılır (minimal disiplin).
- **Tipografi:** Başlık = sıcak serif (örn. *Fraunces*/*Lora*) — editöryel, premium his.
  Gövde = nötr sans (örn. *Inter*) — okunabilir. Büyük satır aralığı, ~680px okuma kolonu.
- **Boşluk & form:** cömert boşluk, yuvarlak-ama-ölçülü köşeler (12–16px), hairline çizgiler,
  yumuşak sıcak gölge.
- **Hareket:** ince — yumuşak geçiş, ilerleme çubuğu dolumu, sayı sayma, zarif onay animasyonu.
  Premium "shimmer" kutlaması; zıplayan karikatür değil.
- **Veri görseli:** ince ilerleme halkaları, narin çubuklar, sparkline. Şık, az.
- **Yeniden kullanım:** Tüm bunlar `assets/akademi.css` (tokens + bileşenler) içinde; gelecek
  eğitimler aynı sistemi kullanır, sadece içerik değişir. İleride tema değişkenleriyle
  marka/renk swap edilebilir.

## 4. Deneyim mimarisi
**a) Yolculuk haritası (ana sayfa, masaüstü):** 12 modül zarif bir patika/stepper üzerinde —
düğümler premium kartlar, durumlar: tamamlandı ✓ · şu an ⭐ · kilitli 🔒. Faz ayraçları
(checkpoint). "Rapor" değil, "harita". Üstte sessiz istatistik şeridi (XP · seri 🔥 · seviye).

**b) Modül (derin, haftalık):** uzun metin yerine ilerleyen **adım kartları**. Üstte dolacak
ilerleme çubuğu. Karışım: öğretici kart → "Yani:" kartı → interaktif kontrol (anında geri
bildirim) → senaryo → dondurulmuş vaka. Sonda: kutlama + XP + sonraki modül.

**c) Günlük mikro (3-5 dk, alışkanlık döngüsü):** (1) **spaced-repetition** geçmişten günün 3
sorusu, (2) **günün terimi + mini senaryo**, (3) **disiplin check-in** ("bugün plana uydun mu?").
Seriyi besler. Tamamı evergreen/$0.

**d) Haftalık Canlı Meydan Okuma (üye-çalıştırır):** sabit şablon görev (*"firsattara çalıştır,
bir A+ setup bul, planını gir"*); tazeliği piyasa sağlar. Bora'ya sürekli maliyet yok.

## 5. Oyunlaştırma & ilerleme (hepsi localStorage, backend yok)
- **XP:** ders/quiz/günlük dokunuş tamamlama. Sessiz, zarif sayaç.
- **Seviye:** Çaylak → Çırak → Swingci → Usta (→ Efsane?). XP eşikleriyle.
- **Seri 🔥 + seri-dondurma:** günlük süreklilik; bir gün kaçırınca ceza değil, "dondurma" jokeri.
- **Disiplin serisi:** "plana uydum / FOMO'ya direndim" check-in'lerinden ayrı bir seri — **asıl
  ödüllenen davranış.**
- **Rozetler/başarımlar:** faz bitirme, ilk doğru plan, 7 günlük seri vb.
- **Disiplin liderlik tablosu:** öğrenme XP'si + disiplin serisi yarışır; **kazanç (P&L) değil**.
  Pervasızlığı teşvik etmez. (Skool entegrasyonu ileride.)
- **Faz sonu "boss/sınav":** geçince sonraki faz + rozet (+ ileride Skool rol/erişim).

## 6. Pratik mekaniği yol haritası
1. **Şimdi (evergreen, $0):** quiz + senaryo kartları + dondurulmuş gerçek vaka (skill çıktısı
   snapshot'ı derse gömülü) + **karar-replay** (donmuş geçmiş grafikte bar-bar karar; swingreplay).
2. **Sonra:** canlı P&L paper-trade simülatörü (gerçek-zamanlı fiyat; veri/token maliyeti olan tek
   parça — kurs oturunca).

## 7. Teknik mimari
- Ortak `assets/akademi.css` (tasarım dili) + `assets/akademi.js` (ilerleme/XP/seri motoru +
  interaktif egzersiz motoru). Modüller bunları kullanır → DRY, yeniden kullanılabilir.
- İlerleme `localStorage` (origin başına): XP, seviye, seri, tamamlanan modüller, modül içi adım.
- **Skool dağıtımı:** geliştirmede linkli ortak asset; dağıtımda gerekirse tek-dosya **inline
  export** üretiriz (standalone). Backend/veri tabanı yok.

## 8. Önerilen yeni/güncel skill'ler (programın açtığı boşluklar)
- 🆕 `tradelog` (expectancy/metrik) · 🆕 `risksize` (pozisyon boyutu) · 🆕 `swingreplay`
  (karar-replay motoru) · ✏️ `swinganalysis` "akademi modu" · ✏️ tüm skill'lere "📚 İlgili ders"
  rozeti. (Onayla, müfredat ihtiyacı netleşince inşa.)

## 9. Build yol haritası
- **Faz 0:** Bu brief'in onayı. ← buradayız
- **Faz 1:** Tasarım dili prototipi — `akademi.css/js` + **1 ekran** (yeniden tasarlanmış Modül 1
  veya yolculuk haritası) → görsel dili kilitle, geri bildirim al.
- **Faz 2:** Yolculuk haritası + Modül 1 tam interaktif.
- **Faz 3:** Modül 2-12 seri üretim.
- **Faz 4:** Günlük mikro motoru + haftalık meydan şablonu + disiplin liderlik tablosu.
- **Faz 5:** Karar-replay simülatörü.
- **Sonra:** canlı P&L sim · yeni skill'ler · Skool entegrasyonu/export.

## 10. Açık/ertelenen sorular
- Cep deneyimi ne kadar derin? (şimdilik masaüstü-öncelikli + makul responsive)
- Marka ismi/maskot adı (sonra ayrı brainstorm)
- Skool teknik entegrasyonu: iframe embed mi, link mi, rol otomasyonu mu? (Faz 4'te netleşir)
- Liderlik tablosu verisi nerede tutulur? (localStorage solo; gerçek tablo için hafif backend/
  Skool API ileride)
