# Swing Akademi

Sıfırdan ustalığa, 12 haftalık **uygulamalı swing trading** eğitim programı.
Skool / Haddini Aş Kulübü üyelerine teslim edilebilir.

> **Felsefe:** Bu eğitim hangi hisseyi alacağını söylemez; **hangi işlemi almaman gerektiğini**
> bilme disiplinini kazandırır. Skill'ler ders değil — **laboratuvar**. Her modülde teori öğrenilir,
> sonra mevcut skill'ler (firsattara, swinganalysis, trendcheck, marketpulse, makro, smartmoney,
> leapsflow, protect, portman/porttech) o teorinin canlı pratiği olarak kullanılır.

- **Format:** Self-paced, standalone HTML modüller. Skill erişimi gerekmez — her lab'da donmuş örnek çıktı var.
- **Kapsam:** 12 hafta / 4 faz / 12 modül + 4 faz sınavı + günlük mikro.
- **Dil:** Sade Türkçe, "Yani:" kutuları + mini sözlük.

---

## Repo yapısı

```
swing-akademi/
├── index.html            # Ana müfredat panosu
├── modules/              # modul-01.html ... modul-12.html
├── sinavlar/             # faz-1.html ... faz-4.html (senaryo sınavları, rozet+XP)
├── gunluk.html           # Günlük mikro tekrar motoru (SRS havuzu)
├── data/srs-pool.json    # 12 modül spaced-repetition soru havuzu
├── assets/               # akademi.css · akademi.js
├── CURRICULUM.md         # Detaylı içerik planı
├── DENETIM.md            # Dalga 0 denetim raporu (review kalibrasyonu)
└── README.md
```

## 12 Haftalık Müfredat

| # | Modül | Faz | Skill-Lab | Durum |
|---|-------|-----|-----------|-------|
| 1 | Swing Trading'in DNA'sı + Zihniyet | Temel | trendcheck (gözlem) | ✅ |
| 2 | Piyasa Rejimi & Bağlam | Temel | marketpulse · makro | ✅ |
| 3 | Av Sahası: En Güçlüyü Filtrele | Temel | qswing (tara) · firsattara · trendcheck | ✅ |
| 4 | Sıkı Kurulum: Yay Gerilmesi | Kurulum | qswing (tek hisse) · swinganalysis | ✅ |
| 5 | Giriş & Stop: ORH ve Günün Dibi | Kurulum | qswing · swinganalysis | ✅ |
| 6 | Mekanik Pozisyon Boyutu | Kurulum | gömülü lot hesaplayıcı | ✅ |
| 7 | Kâr Alma & Trend Sürme | Yönetim | qswing · trailstop | ✅ |
| 8 | Akıllı Para Onayı | Yönetim | firsattara · leapsflow · smartmoney | ✅ |
| 9 | Episodic Pivot & Earnings | Yönetim | firsattara · qswing | ✅ |
| 10 | İşlem Günlüğü & Beklenen Değer | Ustalık | gömülü işlem günlüğü | ✅ |
| 11 | Portföy & Konsantrasyon | Ustalık | portman/porttech · protect | ✅ |
| 12 | Pre-Flight Çeklist + Mezuniyet | Ustalık | dailypack · firsattara · qswing | ✅ |

Her modülde: teori kartları · interaktif sorular · donmuş skill snapshot · "Bugün ne yapacağım?" · Skool paylaşım şablonu.

## 4 Faz Sınavı

| Sınav | Kapsam | Rozet |
|-------|--------|-------|
| Faz 1 | Piyasa izni + filtre + tuzak | 🏹 Avcı |
| Faz 2 | Giriş + stop + lot + %20 tavanı | Avcı+İcracı |
| Faz 3 | Kâr alma + earnings + onay/tetik | Yönetici |
| Faz 4 | Beklenen değer + portföy + pre-flight | Mezun |

## Açık iş listesi

- [ ] Karar-replay MVP (M4/M5/M7 — donmuş grafik üzerinde bar-bar karar)
- [ ] tradelog / risksize skill'leri (skill-runner projesinde, ayrı iş)
- [ ] "İleri katman" blokları veya README vaadini düzelt

---

## Çoklu cihaz çalışma akışı

Bu repo iCloud'un **dışında** (`~/swing-akademi`) durur — GitHub tek kaynaktır.

```bash
# Yeni cihazda ilk kez
cd ~ && git clone https://github.com/bora-star/swing-akademi.git

# Her oturuma başlarken
cd ~/swing-akademi && git pull

# Çalışma bitince
cd ~/swing-akademi && git add -A && git commit -m "ne yaptın" && git push
```

**Claude ile devam:** Yeni oturumda *"swing akademiye devam"* de →
Claude `~/swing-akademi`'de `git pull` yapıp `DENETIM.md`'deki durumdan kaldığı yerden sürer.

---

*Yatırım tavsiyesi değildir. Eğitim amaçlıdır.*
