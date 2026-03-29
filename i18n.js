const translations = {
  tr: {
    lang: "tr",
    langLabel: "TR",
    otherLang: "en",
    otherLangLabel: "EN",
    htmlLang: "tr",
    pageTitle: "Batuhan Tonk — Full Stack & Mobil Uygulama Geliştirici",
    metaDescription: "Batuhan Tonk'un kişisel portfolyo sitesi. Full Stack Yazılım Geliştirici, React, React Native, JavaScript, TypeScript ve modern web teknolojileri uzmanı.",

    // Route mappings
    routes: {
      anasayfa: "anasayfa",
      hakkimda: "hakkimda",
      yetenekler: "yetenekler",
      deneyimler: "deneyimler",
      sertifikalar: "sertifikalar",
      iletisim: "iletisim"
    },
    routeFromEN: {
      home: "anasayfa",
      about: "hakkimda",
      skills: "yetenekler",
      experience: "deneyimler",
      certificates: "sertifikalar",
      contact: "iletisim"
    },

    // Navigation
    nav: {
      anasayfa: "Ana Sayfa",
      hakkimda: "Hakkımda",
      yetenekler: "Yetenekler",
      deneyimler: "Deneyimler",
      sertifikalar: "Sertifikalar",
      iletisim: "İletişim"
    },

    // Hero
    hero: {
      badge: "Full Stack & Mobil Geliştirici",
      titleLine1: "Merhaba, ben",
      titleLine2: "Batuhan Tonk",
      description: `React ile hem modern web uygulamaları hem de React Native ile cross-platform mobil projeler geliştirerek <strong>uçtan uca (end-to-end) çözümler</strong> üreten bir yazılım mühendisi adayıyım. JavaScript (ES6+), TypeScript ve Java dillerinde güçlü bir altyapıya sahibim. Şu anda <strong>Dinamik QR Kod Oluşturma</strong> platformu projesinde Full Stack Developer olarak çalışıyorum.`,
      ctaPrimary: "Projelerimi İncele",
      ctaSecondary: "Benimle İletişime Geç",
      stats: [
        { number: "5+", label: "Proje" },
        { number: "3+", label: "Teknoloji Alanı" },
        { number: "2+", label: "Sertifika" }
      ],
      codeLines: {
        name: '"Batuhan Tonk"',
        role: '"Full Stack Dev"',
        skills: ['"React"', '"React Native"', '"TypeScript"', '"Node.js"', '"PostgreSQL"'],
        passion: '"AI & Innovation"'
      },
      scrollText: "Aşağı Kaydır"
    },

    // About
    about: {
      tag: "Hakkımda",
      title: "Ben Kimim?",
      paragraphs: [
        `<strong>Mehmet Akif Ersoy Üniversitesi</strong>'nde Yazılım Mühendisliği 4. sınıf öğrencisiyim <span class="highlight">(Ekim 2022 - Devam Ediyor)</span>. <strong>React</strong> ekosistemiyle hem modern, performanslı web uygulamaları hem de <strong>React Native</strong> ile cross-platform mobil uygulamalar geliştiriyorum. Bu sayede tek bir teknoloji yığınıyla uçtan uca çözümler sunabiliyorum.`,
        `Kariyer hedefim; yeni teknolojileri ve trendleri yakından takip ederek, <strong>fal.ai gibi yapay zeka servislerini projelere entegre edip</strong>, konsept aşamasından çıkararak son kullanıcıya hazır (production-ready) ürünler haline getirmek ve katma değer sağlamaktır.`
      ],
      highlights: [
        { icon: "fas fa-graduation-cap", title: "Eğitim", text: "Yazılım Mühendisliği, MAKÜ" },
        { icon: "fas fa-briefcase", title: "Güncel Rol", text: "Full Stack Developer" },
        { icon: "fas fa-crosshairs", title: "Odak Alanı", text: "React Ekosistemi & AI" },
        { icon: "fas fa-map-marker-alt", title: "Konum", text: "Kocaeli / Darıca" }
      ]
    },

    // Skills
    skills: {
      tag: "Yetenekler",
      title: "Teknolojiler & Araçlar",
      categories: [
        {
          icon: "fas fa-code",
          title: "Programlama Dilleri",
          tags: [
            { icon: "fab fa-js", label: "JavaScript (ES6+)", color: "yellow" },
            { icon: "fab fa-js", label: "TypeScript (TSX)", color: "blue" },
            { icon: "fab fa-java", label: "Java", color: "red" },
            { icon: "fab fa-html5", label: "HTML", color: "orange" },
            { icon: "fab fa-css3-alt", label: "CSS", color: "purple" }
          ]
        },
        {
          icon: "fas fa-layer-group",
          title: "React Ekosistemi & Full Stack",
          description: "React ile modern web uygulamaları, React Native ile cross-platform mobil projeler geliştiriyorum.",
          tags: [
            { icon: "fab fa-react", label: "React", color: "cyan" },
            { icon: "fab fa-react", label: "React Native", color: "cyan" },
            { icon: "fab fa-react", label: "React Hooks", color: "cyan" },
            { icon: "fab fa-node-js", label: "Node.js", color: "green" }
          ]
        },
        {
          icon: "fas fa-database",
          title: "Veri Tabanı",
          tags: [
            { icon: "fas fa-database", label: "MySQL", color: "blue" },
            { icon: "fas fa-database", label: "PostgreSQL", color: "indigo" }
          ]
        },
        {
          icon: "fas fa-robot",
          title: "Yapay Zeka & API Entegrasyonu",
          description: "AI servislerini projelere entegre ederek konseptten production-ready ürünlere dönüştürüyorum.",
          tags: [
            { icon: "fas fa-brain", label: "fal.ai (AI API)", color: "purple" },
            { icon: "fas fa-exchange-alt", label: "REST API", color: "green" },
            { icon: "fab fa-google", label: "Google API'ları", color: "red" }
          ]
        },
        {
          icon: "fas fa-tools",
          title: "Araçlar",
          tags: [
            { icon: "fab fa-git-alt", label: "Git", color: "orange" },
            { icon: "fas fa-tasks", label: "Agile/Scrum", color: "green" },
            { icon: "fas fa-project-diagram", label: "n8n Otomasyon", color: "pink" },
            { icon: "fas fa-book", label: "Jupyter Notebook", color: "yellow" }
          ]
        }
      ]
    },

    // Experience
    experience: {
      tag: "Deneyimler",
      title: "Deneyimler & Projeler",
      items: [
        {
          icon: "fas fa-qrcode",
          badge: "Güncel Proje",
          badgeCurrent: true,
          date: "Devam Ediyor",
          title: "Dinamik QR Kod Platformu",
          role: "Full Stack Developer",
          description: "PostgreSQL/MySQL veritabanı altyapısıyla dinamik yönlendirmelere olanak tanıyan bir QR kod oluşturma platformu geliştiriyorum.",
          tech: ["PostgreSQL", "MySQL", "JavaScript", "REST API"]
        },
        {
          icon: "fas fa-building",
          badge: "Staj",
          badgeCurrent: false,
          date: "Temmuz 2025 - Ağustos 2025",
          title: "Mobil Uygulama Geliştirici",
          role: "EDS BİLİŞİM — Stajyer",
          description: "React Native kullanarak Artırılmış Gerçeklik (AR), react-native-maps ve react-native-sensors ile konum tabanlı (LBS) mobil uygulama geliştirdim. API entegrasyonları ve modern React Hooks yapısını etkin bir şekilde kullandım.",
          tech: ["React Native", "AR", "Maps API", "React Hooks"]
        }
      ],
      projectsHeader: "Açık Kaynak Projeler",
      projectsSub: "GitHub profilimden seçkin projeler",
      projects: [
        { href: "https://github.com/BatuhanTNK/VTO_proje_Viro", icon: "fas fa-camera", title: "VTO_proje_Viro", desc: "Virtual Try-On (Sanal Deneme) projesi", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-robot", title: "AI_Wep_Interface", desc: "Yapay zeka tabanlı web arayüzü projesi", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-map-marked-alt", title: "ArView_Map", desc: "Artırılmış gerçeklik harita uygulaması", lang: "JavaScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-brain", title: "Yas_Tahmini_Py", desc: "Yapay zeka ile yaş tahmini projesi", lang: "Python", langIcon: "fab fa-python" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-blog", title: "Ki-sisel-Blog-Web-Site", desc: "Kişisel blog web sitesi", lang: "HTML/CSS/JS", langIcon: "fab fa-html5" }
      ]
    },

    // CTA
    cta: {
      title: "Bir Proje mi Planlıyorsunuz?",
      description: "Fikirlerinizi gerçeğe dönüştürmek, React ile web veya mobil projelerinizde AI destekli çözümler üretmek için hazırım. Modern teknolojilerle yenilikçi çözümler üretelim.",
      button: "Hemen İletişime Geçin"
    },

    // Certificates
    certificates: {
      tag: "Sertifikalar",
      title: "Sertifikalar & Eğitimler",
      items: [
        {
          icon: "fas fa-award",
          date: "16 Şubat 2026",
          title: "Algoritma Programlama ve Veri Yapılarına Giriş",
          org: "BTK Akademi",
          desc: "Temel algoritma kavramları, veri yapıları ve problem çözme teknikleri üzerine kapsamlı eğitim.",
          tags: ["Algoritma", "Veri Yapıları", "Problem Çözme"]
        },
        {
          icon: "fas fa-brain",
          date: "10 Şubat 2026",
          title: "Yapay Zekaya Giriş",
          org: "BTK Akademi",
          desc: "Yapay zeka temel kavramları, makine öğrenmesi ve modern AI uygulamaları üzerine eğitim.",
          tags: ["Yapay Zeka", "Makine Öğrenmesi", "AI"]
        }
      ]
    },

    // Contact
    contact: {
      tag: "İletişim",
      title: "Benimle İletişime Geçin",
      intro: "Yeni projeler, iş birlikleri ya da sadece bir merhaba için bana ulaşabilirsiniz.",
      email: "Email",
      phone: "Telefon",
      location: "Konum",
      locationValue: "Kocaeli / Darıca",
      formName: "Adınız",
      formEmail: "Email adresiniz",
      formMessage: "Mesajınız",
      formButton: "Mesaj Gönder",
      formSending: "Gönderiliyor...",
      formSuccess: "Mesaj Gönderildi!",
      formError: "Hata Oluştu!"
    },

    // Footer
    footer: {
      text: "Tasarım & Geliştirme — Batuhan Tonk © 2026"
    }
  },

  en: {
    lang: "en",
    langLabel: "EN",
    otherLang: "tr",
    otherLangLabel: "TR",
    htmlLang: "en",
    pageTitle: "Batuhan Tonk — Full Stack & Mobile App Developer",
    metaDescription: "Batuhan Tonk's personal portfolio. Full Stack Developer specializing in React, React Native, JavaScript, TypeScript, and modern web technologies.",

    // Route mappings
    routes: {
      home: "home",
      about: "about",
      skills: "skills",
      experience: "experience",
      certificates: "certificates",
      contact: "contact"
    },
    routeFromTR: {
      anasayfa: "home",
      hakkimda: "about",
      yetenekler: "skills",
      deneyimler: "experience",
      sertifikalar: "certificates",
      iletisim: "contact"
    },

    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      certificates: "Certificates",
      contact: "Contact"
    },

    // Hero
    hero: {
      badge: "Full Stack & Mobile Developer",
      titleLine1: "Hi, I'm",
      titleLine2: "Batuhan Tonk",
      description: `I'm a software engineering student who builds <strong>end-to-end solutions</strong> using React for modern web applications and React Native for cross-platform mobile projects. I have a strong foundation in JavaScript (ES6+), TypeScript, and Java. Currently working as a Full Stack Developer on a <strong>Dynamic QR Code Generation</strong> platform.`,
      ctaPrimary: "View My Projects",
      ctaSecondary: "Get In Touch",
      stats: [
        { number: "5+", label: "Projects" },
        { number: "3+", label: "Tech Domains" },
        { number: "2+", label: "Certificates" }
      ],
      codeLines: {
        name: '"Batuhan Tonk"',
        role: '"Full Stack Dev"',
        skills: ['"React"', '"React Native"', '"TypeScript"', '"Node.js"', '"PostgreSQL"'],
        passion: '"AI & Innovation"'
      },
      scrollText: "Scroll Down"
    },

    // About
    about: {
      tag: "About",
      title: "Who Am I?",
      paragraphs: [
        `I'm a 4th-year Software Engineering student at <strong>Mehmet Akif Ersoy University</strong> <span class="highlight">(Oct 2022 - Present)</span>. I develop both modern, high-performance web applications with <strong>React</strong> and cross-platform mobile apps with <strong>React Native</strong>. This allows me to deliver end-to-end solutions using a single technology stack.`,
        `My career goal is to follow emerging technologies and trends closely, <strong>integrate AI services like fal.ai into projects</strong>, and transform them from concept stage into production-ready products that deliver real value.`
      ],
      highlights: [
        { icon: "fas fa-graduation-cap", title: "Education", text: "Software Engineering, MAKU" },
        { icon: "fas fa-briefcase", title: "Current Role", text: "Full Stack Developer" },
        { icon: "fas fa-crosshairs", title: "Focus Area", text: "React Ecosystem & AI" },
        { icon: "fas fa-map-marker-alt", title: "Location", text: "Kocaeli / Darica, Turkey" }
      ]
    },

    // Skills
    skills: {
      tag: "Skills",
      title: "Technologies & Tools",
      categories: [
        {
          icon: "fas fa-code",
          title: "Programming Languages",
          tags: [
            { icon: "fab fa-js", label: "JavaScript (ES6+)", color: "yellow" },
            { icon: "fab fa-js", label: "TypeScript (TSX)", color: "blue" },
            { icon: "fab fa-java", label: "Java", color: "red" },
            { icon: "fab fa-html5", label: "HTML", color: "orange" },
            { icon: "fab fa-css3-alt", label: "CSS", color: "purple" }
          ]
        },
        {
          icon: "fas fa-layer-group",
          title: "React Ecosystem & Full Stack",
          description: "Building modern web apps with React and cross-platform mobile projects with React Native.",
          tags: [
            { icon: "fab fa-react", label: "React", color: "cyan" },
            { icon: "fab fa-react", label: "React Native", color: "cyan" },
            { icon: "fab fa-react", label: "React Hooks", color: "cyan" },
            { icon: "fab fa-node-js", label: "Node.js", color: "green" }
          ]
        },
        {
          icon: "fas fa-database",
          title: "Database",
          tags: [
            { icon: "fas fa-database", label: "MySQL", color: "blue" },
            { icon: "fas fa-database", label: "PostgreSQL", color: "indigo" }
          ]
        },
        {
          icon: "fas fa-robot",
          title: "AI & API Integration",
          description: "Integrating AI services into projects, turning concepts into production-ready products.",
          tags: [
            { icon: "fas fa-brain", label: "fal.ai (AI API)", color: "purple" },
            { icon: "fas fa-exchange-alt", label: "REST API", color: "green" },
            { icon: "fab fa-google", label: "Google APIs", color: "red" }
          ]
        },
        {
          icon: "fas fa-tools",
          title: "Tools",
          tags: [
            { icon: "fab fa-git-alt", label: "Git", color: "orange" },
            { icon: "fas fa-tasks", label: "Agile/Scrum", color: "green" },
            { icon: "fas fa-project-diagram", label: "n8n Automation", color: "pink" },
            { icon: "fas fa-book", label: "Jupyter Notebook", color: "yellow" }
          ]
        }
      ]
    },

    // Experience
    experience: {
      tag: "Experience",
      title: "Experience & Projects",
      items: [
        {
          icon: "fas fa-qrcode",
          badge: "Current Project",
          badgeCurrent: true,
          date: "Ongoing",
          title: "Dynamic QR Code Platform",
          role: "Full Stack Developer",
          description: "Developing a QR code generation platform with PostgreSQL/MySQL database infrastructure enabling dynamic redirections.",
          tech: ["PostgreSQL", "MySQL", "JavaScript", "REST API"]
        },
        {
          icon: "fas fa-building",
          badge: "Internship",
          badgeCurrent: false,
          date: "July 2025 - August 2025",
          title: "Mobile App Developer",
          role: "EDS BILISIM — Intern",
          description: "Developed a location-based (LBS) mobile application using React Native with Augmented Reality (AR), react-native-maps, and react-native-sensors. Effectively utilized API integrations and modern React Hooks patterns.",
          tech: ["React Native", "AR", "Maps API", "React Hooks"]
        }
      ],
      projectsHeader: "Open Source Projects",
      projectsSub: "Featured projects from my GitHub profile",
      projects: [
        { href: "https://github.com/BatuhanTNK/VTO_proje_Viro", icon: "fas fa-camera", title: "VTO_proje_Viro", desc: "Virtual Try-On project", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-robot", title: "AI_Wep_Interface", desc: "AI-powered web interface project", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-map-marked-alt", title: "ArView_Map", desc: "Augmented reality map application", lang: "JavaScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-brain", title: "Yas_Tahmini_Py", desc: "AI-based age prediction project", lang: "Python", langIcon: "fab fa-python" },
        { href: "https://github.com/BatuhanTNK", icon: "fas fa-blog", title: "Ki-sisel-Blog-Web-Site", desc: "Personal blog website", lang: "HTML/CSS/JS", langIcon: "fab fa-html5" }
      ]
    },

    // CTA
    cta: {
      title: "Planning a Project?",
      description: "I'm ready to turn your ideas into reality, build AI-powered solutions with React for web or mobile. Let's create innovative solutions with modern technologies.",
      button: "Get In Touch"
    },

    // Certificates
    certificates: {
      tag: "Certificates",
      title: "Certificates & Training",
      items: [
        {
          icon: "fas fa-award",
          date: "February 16, 2026",
          title: "Introduction to Algorithm Programming and Data Structures",
          org: "BTK Academy",
          desc: "Comprehensive training on fundamental algorithm concepts, data structures, and problem-solving techniques.",
          tags: ["Algorithms", "Data Structures", "Problem Solving"]
        },
        {
          icon: "fas fa-brain",
          date: "February 10, 2026",
          title: "Introduction to Artificial Intelligence",
          org: "BTK Academy",
          desc: "Training on fundamental AI concepts, machine learning, and modern AI applications.",
          tags: ["Artificial Intelligence", "Machine Learning", "AI"]
        }
      ]
    },

    // Contact
    contact: {
      tag: "Contact",
      title: "Get In Touch",
      intro: "Feel free to reach out for new projects, collaborations, or just to say hello.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Kocaeli / Darica, Turkey",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formButton: "Send Message",
      formSending: "Sending...",
      formSuccess: "Message Sent!",
      formError: "Error Occurred!"
    },

    // Footer
    footer: {
      text: "Design & Development — Batuhan Tonk © 2026"
    }
  }
};

// Canonical route key mapping (language-agnostic keys)
const routeKeys = ["home", "about", "skills", "experience", "certificates", "contact"];

const routeNamesByLang = {
  tr: ["anasayfa", "hakkimda", "yetenekler", "deneyimler", "sertifikalar", "iletisim"],
  en: ["home", "about", "skills", "experience", "certificates", "contact"]
};

// Convert a route slug to its canonical index
function getRouteIndex(slug) {
  const trIdx = routeNamesByLang.tr.indexOf(slug);
  if (trIdx !== -1) return trIdx;
  const enIdx = routeNamesByLang.en.indexOf(slug);
  if (enIdx !== -1) return enIdx;
  return -1;
}

// Get translated route slug by canonical index
function getRouteSlug(lang, index) {
  return routeNamesByLang[lang][index];
}
