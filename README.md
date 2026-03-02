# 🚀 Portfolyo Web Sitesi — Hosting & Yayınlama Rehberi

Bu rehber, portfolyo web sitenizi internete açmak için kullanabileceğiniz **ücretsiz ve ücretli** hosting seçeneklerini adım adım açıklamaktadır.

---

## 📁 Proje Yapısı

```
MyWebSite/
├── index.html    ← Ana sayfa
├── style.css     ← Stil dosyası
└── script.js     ← JavaScript dosyası
```

> [!NOTE]
> Bu proje statik bir web sitesidir (sadece HTML/CSS/JS). Sunucu taraflı bir işlem gerektirmediği için tüm statik hosting platformlarında yayınlanabilir.

---

## 1. GitHub Pages (Ücretsiz — Önerilen ⭐)

En popüler ve en kolay yöntem. GitHub hesabınız zaten var!

### Adım 1: GitHub'da Yeni Repo Oluşturma

1. [github.com/new](https://github.com/new) adresine gidin
2. **Repository name**: `batuhantonk.github.io` (kişisel site için) veya `portfolio` (proje sitesi için)
3. **Public** seçeneğini işaretleyin
4. **Create repository** butonuna tıklayın

### Adım 2: Dosyaları Yükleme (Git ile)

```bash
# Proje klasörüne gidin
cd c:\Users\Batuhan\Desktop\MyWebSite

# Git repo başlatın
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit
git commit -m "İlk yayın: Portfolyo web sitesi"

# GitHub remote ekleyin (kendi repo URL'nizi kullanın)
git remote add origin https://github.com/BatuhanTNK/batuhantonk.github.io.git

# Ana branch'i ayarlayın ve gönderin
git branch -M main
git push -u origin main
```

### Adım 3: GitHub Pages'i Aktifleştirme

1. GitHub'da repo sayfanıza gidin
2. **Settings** → **Pages** bölümüne tıklayın
3. **Source** kısmında **Deploy from a branch** seçin
4. **Branch**: `main`, **Folder**: `/ (root)` seçin
5. **Save** butonuna tıklayın

### Adım 4: Sitenize Erişim

- Birkaç dakika bekleyin (genellikle 1-3 dakika)
- Siteniz şu adreste yayında olacak:
  - `https://batuhantnk.github.io` (eğer repo adı `batuhantonk.github.io` ise)
  - `https://batuhantnk.github.io/portfolio` (eğer repo adı `portfolio` ise)

> [!TIP]
> Her `git push` yaptığınızda site otomatik güncellenir!

---

## 2. Netlify (Ücretsiz — En Hızlı Yöntem ⚡)

Sürükle-bırak ile anında yayınlama!

### Yöntem A: Sürükle-Bırak (En Kolay)

1. [app.netlify.com](https://app.netlify.com) adresine gidin
2. GitHub hesabınızla giriş yapın
3. Ana sayfada **"Want to deploy a new site without connecting to Git? Drag and drop"** bölümünü bulun
4. `MyWebSite` klasörünü doğrudan bu alana sürükleyin
5. **Tamamlandı!** Netlify size `https://rastgele-isim.netlify.app` adresi verecektir

### Yöntem B: GitHub Entegrasyonu (Otomatik Güncelleme)

1. Netlify'da **"Import from Git"** butonuna tıklayın
2. **GitHub** seçin ve repo'nuza izin verin
3. Repository'nizi seçin
4. Build ayarları:
   - **Build command**: _(boş bırakın)_
   - **Publish directory**: `.`
5. **Deploy site** butonuna tıklayın

### Özel Alan Adı (Custom Domain)

1. Netlify Dashboard → **Domain settings**
2. **Add custom domain** → alan adınızı girin (örn: `batuhantonk.com`)
3. DNS ayarlarınızda Netlify'ın verdiği kayıtları ekleyin
4. **HTTPS** otomatik olarak aktifleşecektir (Let's Encrypt)

---

## 3. Vercel (Ücretsiz)

Next.js'in arkasındaki şirket, ama statik siteler için de mükemmel.

### Adımlar

1. [vercel.com](https://vercel.com) adresine gidin
2. **GitHub** hesabınızla giriş yapın
3. **"New Project"** → GitHub repo'nuzu seçin
4. Framework Preset: **Other** seçin
5. Build ayarları:
   - **Build Command**: _(boş bırakın)_
   - **Output Directory**: `.`
6. **Deploy** butonuna tıklayın
7. Siteniz `https://proje-adi.vercel.app` adresinde yayında!

> [!TIP]
> Vercel, her git push'ta otomatik deploy yapar ve preview URL'leri oluşturur.

---

## 4. Cloudflare Pages (Ücretsiz — En Hızlı CDN 🌐)

Dünya genelinde en hızlı CDN altyapısı.

### Adımlar

1. [pages.cloudflare.com](https://pages.cloudflare.com) adresine gidin
2. Giriş yapın → **"Create a project"**
3. **"Connect to Git"** → GitHub repo'nuzu bağlayın
4. Build ayarları:
   - **Framework preset**: `None`
   - **Build command**: _(boş bırakın)_
   - **Build output directory**: `.`
5. **Save and Deploy**

---

## 5. Firebase Hosting (Ücretsiz — Google Altyapısı 🔥)

Google'ın altyapısını kullanmak istiyorsanız.

### Adım 1: Firebase CLI Kurulumu

```bash
npm install -g firebase-tools
```

### Adım 2: Giriş ve Proje Oluşturma

```bash
# Google hesabınızla giriş yapın
firebase login

# Proje klasörüne gidin
cd c:\Users\Batuhan\Desktop\MyWebSite

# Firebase başlatın
firebase init hosting
```

Sorulara şu şekilde cevap verin:
- **What do you want to use as your public directory?** → `.`
- **Configure as a single-page app?** → `No`
- **Set up automatic builds with GitHub?** → `Yes` (opsiyonel)

### Adım 3: Yayınlama

```bash
firebase deploy
```

Siteniz `https://proje-adi.web.app` adresinde yayında!

---

## 6. Geleneksel Hosting (cPanel / FTP)

Turhost, Natro, GoDaddy gibi ücretli hosting sağlayıcıları için.

### Adımlar

1. Hosting sağlayıcınızdan bir paket satın alın
2. cPanel'e giriş yapın
3. **Dosya Yöneticisi**'ni açın
4. `public_html` klasörüne gidin
5. Tüm dosyaları (`index.html`, `style.css`, `script.js`) yükleyin
6. Siteniz alan adınızda yayında!

### FTP ile Yükleme

```bash
# FileZilla veya başka bir FTP istemcisi kullanın
Host: ftp.alanadresiniz.com
Kullanıcı: (hosting'den aldığınız FTP kullanıcı adı)
Şifre: (hosting'den aldığınız FTP şifresi)
Port: 21
```

`public_html` klasörüne dosyaları sürükleyin.

---

## 📊 Hosting Karşılaştırma Tablosu

| Platform | Ücretsiz | Özel Domain | SSL/HTTPS | Otomatik Deploy | CDN | Zorluk |
|----------|----------|-------------|-----------|-----------------|-----|--------|
| **GitHub Pages** | ✅ | ✅ | ✅ | ✅ (git push) | ✅ | ⭐ Kolay |
| **Netlify** | ✅ | ✅ | ✅ | ✅ | ✅ | ⭐ Çok Kolay |
| **Vercel** | ✅ | ✅ | ✅ | ✅ | ✅ | ⭐ Kolay |
| **Cloudflare** | ✅ | ✅ | ✅ | ✅ | ⭐⭐⭐ | Orta |
| **Firebase** | ✅ | ✅ | ✅ | ✅ | ✅ | Orta |
| **cPanel/FTP** | ❌ | ✅ | Değişir | ❌ | ❌ | Kolay |

---

## 🌐 Özel Alan Adı (Custom Domain) Bağlama

Hangi platformu seçerseniz seçin, özel alan adı bağlama süreci benzerdir:

### Adım 1: Alan Adı Satın Alma

Önerilen sağlayıcılar:
- [Namecheap](https://namecheap.com) — uygun fiyat
- [Google Domains](https://domains.google) — güvenilir
- [GoDaddy](https://godaddy.com) — popüler
- [Natro](https://natro.com) — Türkiye merkezli

### Adım 2: DNS Ayarları

Alan adı sağlayıcınızın DNS yönetim panelinde:

**GitHub Pages için:**
```
Tip: A
Host: @
Değer: 185.199.108.153

Tip: A
Host: @
Değer: 185.199.109.153

Tip: A
Host: @
Değer: 185.199.110.153

Tip: A
Host: @
Değer: 185.199.111.153

Tip: CNAME
Host: www
Değer: batuhantnk.github.io
```

**Netlify / Vercel için:**
```
Tip: CNAME
Host: @
Değer: (platform tarafından verilen adres)

Tip: CNAME
Host: www
Değer: (platform tarafından verilen adres)
```

### Adım 3: Platform Tarafında Domain Ekleme

1. Hosting platformunuzun dashboard'una gidin
2. **Custom Domain** bölümüne alan adınızı ekleyin
3. DNS doğrulamasının tamamlanmasını bekleyin (5 dk - 48 saat)
4. SSL/HTTPS sertifikası otomatik aktifleşecektir

---

## 🎯 Önerim

**Başlangıç için GitHub Pages veya Netlify** kullanmanızı öneriyorum:

1. **GitHub Pages** → Zaten GitHub kullanıyorsunuz, en doğal entegrasyon
2. **Netlify** → Sürükle-bırak ile en hızlı yayınlama

Her iki platform da ücretsiz, SSL destekli ve otomatik deploy sağlar.

---

> [!IMPORTANT]
> Sitenizi yayınlamadan önce tüm kişisel bilgilerinizin (telefon, email) doğru olduğundan emin olun. Gerekirse iletişim formunu gerçek bir backend servisine (FormSpree, Formsubmit, EmailJS gibi) bağlayabilirsiniz.
