# Swing Akademi 🎯

Sıfırdan ustalığa, 12 haftalık **uygulamalı swing trading** eğitim programı.
Hem Bora'nın kendi gelişimi için, hem **Skool / Haddini Aş Kulübü** üyelerine teslim edilebilir.

> **Felsefe:** Skill'ler ders değil — **laboratuvar**. Her modülde teori öğrenilir, sonra
> Bora'nın mevcut skill'leri (firsattara, swinganalysis, trendcheck, marketpulse, makro,
> smartmoney, leapsflow, protect, portman/porttech) o teorinin **canlı pratiği** olarak kullanılır.

- **Format:** Self-paced, standalone paylaşılabilir HTML modüller (Master Format v1, dark theme).
- **Kapsam:** 12 hafta / 4 faz / 12 modül.
- **Seviye:** Karma — her modülde "Temel" + "İleri" katman.
- **Dil:** Sade Türkçe, "Yani:" kutuları + mini sözlük.

---

## 📂 Repo yapısı

```
swing-akademi/
├── index.html            # Ana müfredat panosu (akademi giriş sayfası)
├── modules/              # modul-01.html ... modul-12.html (her ders standalone)
├── worksheets/           # Ödev/çalışma kağıtları (işlem günlüğü, R hesap, setup checklist)
├── assets/               # Ortak görseller/ikonlar (gerekirse)
├── CURRICULUM.md         # 12 modülün detaylı içerik planı (üretim master'ı)
└── README.md
```

## 🗺️ 12 Haftalık Müfredat (özet)

| # | Modül | Faz | Skill-Lab | Durum |
|---|-------|-----|-----------|-------|
| 1 | Swing Trading'in DNA'sı + Zihniyet | Temel | (gözlem) | ⬜ |
| 2 | Piyasa Rejimi & Bağlam | Temel | marketpulse · makro · firsattara(rotasyon) | ⬜ |
| 3 | Trendin Anatomisi (EMA stack, RS) | Temel | **trendcheck** | ⬜ |
| 4 | Setup Kataloğu (kırılım/pullback/reclaim/VCP) | Setup | **swinganalysis** (tek hisse) | ⬜ |
| 5 | Giriş · Stop · Hedef · R/R matematiği | Setup | swinganalysis · trendcheck (invalidation) | ⬜ |
| 6 | Pozisyon Boyutu & Risk Yönetimi | Setup | 🆕 **risksize** (öneri) | ⬜ |
| 7 | Hacim & Göreceli Güç (RVOL, RS vs SPY) | Onay | **firsattara** (swing+rotasyon) | ⬜ |
| 8 | Akıllı Para Onayı (flow, dark pool, LEAPS) | Onay | firsattara(flow) · smartmoney · leapsflow | ⬜ |
| 9 | Katalizör & Earnings Yönetimi | Onay | earnings skilleri · firsattara(earnings filtresi) | ⬜ |
| 10 | İşlem Günlüğü & Metrikler (expectancy) | Ustalık | 🆕 **tradelog** (öneri) | ⬜ |
| 11 | Portföy · Korelasyon · Korunma | Ustalık | portman/porttech · **protect** | ⬜ |
| 12 | Kendi Playbook'un + Rutin + Mezuniyet | Ustalık | dailypack · firsattara rutini | ⬜ |

Detay için → `CURRICULUM.md`.

## 🔧 Skill önerileri (bu programın açtığı boşluklar)

1. **🆕 tradelog** — İşlem günlüğü skill'i. Trade kaydı + win rate, ort. R, **expectancy**,
   R-multiple dağılımı, hata etiketleri. Modül 10'un omurgası. *Şu an ekosistemde yok.*
2. **🆕 risksize** — Pozisyon boyutu & risk hesaplayıcı. Hesap büyüklüğü + %risk + stop
   mesafesi → lot. Modül 6. (Alternatif: `protect` içine bir mod eklenebilir.)
3. **🆕 swingreplay** — Geçmiş chart üzerinde "ne yapardın" pratiği (kör backtest). Pedagojik
   olarak en değerli ekleme; modülleri ödevlerle besler.
4. **✏️ swinganalysis → "akademi modu"** — Çıktıya öğretici katman ekleyen flag (neden bu setup,
   neden bu stop). Üyeye sadece sonucu değil *gerekçeyi* öğretir.
5. **✏️ Tüm skill'lere "📚 İlgili ders" rozeti** — Her skill çıktısının altına "Bu skill Modül X'in
   labıdır" linki. Skill ↔ müfredat çift yönlü bağlanır.

> Bunlar **öneri**; Bora onayıyla `skill-creator` / `improve` ile inşa edilir.

---

## 💻 3 makineli çalışma akışı (ÖNEMLİ)

Bu repo iCloud'un **dışında** (`~/swing-akademi`) durur — GitHub tek kaynaktır.
`.git`'i iCloud'a koymuyoruz (senkron çakışması/corrupt riski).

**Yeni bir Mac'te ilk kez:**
```bash
cd ~ && git clone https://github.com/bora-star/swing-akademi.git
cd ~/swing-akademi
```

**Her oturuma başlarken (her makinede):**
```bash
cd ~/swing-akademi && git pull
```

**Çalışma bitince (değişiklikleri diğer makinelere taşı):**
```bash
cd ~/swing-akademi && git add -A && git commit -m "ne yaptın" && git push
```

**Claude ile devam:** Yeni Cowork oturumunda *"swing akademiye devam"* de → Claude `~/swing-akademi`
içinde `git pull` yapıp `CURRICULUM.md`'deki durumdan kaldığı yerden sürer.

> Çakışma olursa: `git pull` önce, sonra çalış. Aynı dosyayı iki makinede aynı anda düzenleme.

---

*Yatırım tavsiyesi değildir. Eğitim amaçlıdır. Bora bu içeriği Telegram'da paylaşmaz, kripto
satmaz; taklit hesaplara/dolandırıcılara karşı dikkatli olun.*
