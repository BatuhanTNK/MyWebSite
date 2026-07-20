# Batuhan Tonk - Kişisel Portfolyo Web Sitesi

Bu proje, Batuhan Tonk'un yeteneklerini, projelerini ve deneyimlerini sergileyen modern, duyarlı (responsive) bir kişisel portfolyo web sitesidir.

## 🚀 Proje Hakkında

Tamamen HTML, CSS ve Vanilla JavaScript kullanılarak geliştirilmiş, animasyonlu ve etkileşimli bir arayüze sahiptir. Koyu tema (Dark Mode) destekli olup kullanıcı dostu bir tasarıma odaklanılmıştır.

### 🌟 Özellikler

- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarla tam uyumlu.
- **Dinamik Tema**: Kullanıcı tercihine göre renk temasını değiştirme özelliği (açık/koyu tema).
- **Formspree Entegrasyonu**: Çalışan bir iletişim formu altyapısı.
- **Scroll Animasyonları**: Pürüzsüz geçişler ve elementlerin görünürlüğüne bağlı animasyonlar.
- **Modern Arayüz**: Glassmorphism ve gradient animasyon efektleri.

### 🛠️ Kullanılan Teknolojiler

- HTML5
- CSS3 (Vanilla / CSS Değişkenleri)
- JavaScript (ES6+)
- FontAwesome (İkonlar)
- Google Fonts (Inter ve JetBrains Mono)

## 📁 Proje Yapısı

```
MyWebSite/
├── image/        ← Site içerisinde kullanılan görseller ve ikonlar
├── index.html    ← Ana yapıyı oluşturan belge
├── script.js     ← Etkileşimler, animasyonlar ve dinamik menü kontrolleri
└── style.css     ← Web sitesi tema renkleri, tasarımları ve stil dosyası
```

## 🚀 Otomatik Dağıtım (Auto-Deploy)

Bu repoya `main` branch'ine push yaptığınızda site otomatik olarak canlıya alınır:
GitHub Webhook → `hook.batutnk.com.tr` → sunucuda `git pull` → Caddy `batutnk.com.tr` üzerinden servis.

