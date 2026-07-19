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
      description: `React ve React Native kullanarak web ve mobil platformlarda fikirlerinizi hayata geçiren serbest çalışan (freelance) bir <strong>Full Stack ve Mobil Yazılım Geliştiriciyim</strong>. Yapay zeka entegrasyonları, modern arayüzler ve güçlü backend çözümleriyle uçtan uca profesyonel hizmet sunuyorum. Yeni proje ve iş birliklerine açığım!`,
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
        `<strong>Mehmet Akif Ersoy Üniversitesi</strong> Yazılım Mühendisliği bölümünden mezun oldum <span class="highlight">(2022 - 2026)</span>. <strong>React</strong> ekosistemiyle hem modern, performanslı web uygulamaları hem de <strong>React Native</strong> ile cross-platform mobil uygulamalar geliştiriyorum. Bu sayede tek bir teknoloji yığınıyla uçtan uca çözümler sunabiliyorum.`,
        `Profesyonel hedefim; modern web ve mobil teknolojilerini <strong>üretken yapay zeka (GenAI)</strong> çözümleriyle harmanlayarak, işletmeler ve girişimler için ölçeklenebilir, yüksek performanslı ve kullanıcı odaklı dijital ürünler geliştirmektir. Fikirleri konseptten alıp, yayınlanmaya hazır (production-ready) ürünler olarak hayata geçirerek iş ortaklarıma en yüksek katma değeri sağlamayı amaçlıyorum.`
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
          icon: "fas fa-brain",
          title: "AI & Vibe Coding",
          description: "Yapay zeka asistanlarını (Antigravity, Claude, Copilot vb.) kullanarak yüksek hız ve verimlilikte yazılım geliştirme.",
          tags: [
            { icon: "fas fa-bolt", label: "Vibe Coding", color: "orange" },
            { icon: "fas fa-atom", label: "Antigravity", color: "purple" },
            { icon: "fas fa-brain", label: "Claude", color: "red" },
            { icon: "fas fa-robot", label: "Copilot", color: "blue" }
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
          badge: "Full Stack Proje",
          badgeCurrent: false,
          date: "Şubat 2026 - Haziran 2026",
          title: "Dinamik QR Kod Platformu",
          role: "Full Stack Developer",
          description: "Gelişmiş QR tasarım aracı, CSV ile toplu kod üretimi, rehbere doğrudan entegre olan dinamik dijital kartvizitler (vCard) ve tam teşekküllü bir admin yönetim/analiz paneli barındıran uçtan uca yönlendirme platformu.",
          tech: ["React", "Node.js", "MySQL", "Sequelize", "REST API"]
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
        { href: "https://github.com/BatuhanTNK/GameSkinAI", icon: "fas fa-gamepad", title: "GameSkinAI", desc: "Yapay zeka destekli oyun skin/personelleştirme platformu (React + Horizon UI)", lang: "JavaScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK/time_thief", icon: "fas fa-stopwatch", title: "time_thief (Chronos)", desc: "Backendless, oyun bazlı görev sistemi: günlük spin, streak ve achievement", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK/click_count-", icon: "fas fa-mouse-pointer", title: "click_count", desc: "Kategoriler, timer, hatırlatıcı, şablon ve Android widget içeren sayaç app", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK/chatbot_uygulama-main-server", icon: "fas fa-robot", title: "Chatbot Uygulaması", desc: "Supabase + Mistral AI + Gmail entegrasyonlu chatbot & memnuniyet anket sistemi", lang: "Node.js", langIcon: "fab fa-node-js" }
      ],
      archivedHeader: "Diğer Projeler (Arşiv)",
      archivedSub: "Erken dönem ve eğitim amaçlı çalışmalar",
      archivedProjects: [
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
      description: `I'm a freelance <strong>Full Stack & Mobile Developer</strong> who brings your ideas to life on web and mobile platforms using React and React Native. I provide end-to-end professional services with AI integrations, modern interfaces, and robust backend solutions. Open to new projects and collaborations!`,
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
        `I graduated with a degree in Software Engineering from <strong>Mehmet Akif Ersoy University</strong> <span class="highlight">(2022 - 2026)</span>. I develop both modern, high-performance web applications with <strong>React</strong> and cross-platform mobile apps with <strong>React Native</strong>, delivering end-to-end solutions using a single technology stack.`,
        `My professional goal is to blend modern web and mobile technologies with <strong>Generative AI</strong> solutions to build scalable, high-performance, and user-centric digital products for businesses and startups. I aim to deliver maximum value to my partners by taking ideas from concept to launch-ready (production-ready) products.`
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
          icon: "fas fa-brain",
          title: "AI & Vibe Coding",
          description: "Developing software at high speed and efficiency using AI assistants (Antigravity, Claude, Copilot, etc.).",
          tags: [
            { icon: "fas fa-bolt", label: "Vibe Coding", color: "orange" },
            { icon: "fas fa-atom", label: "Antigravity", color: "purple" },
            { icon: "fas fa-brain", label: "Claude", color: "red" },
            { icon: "fas fa-robot", label: "Copilot", color: "blue" }
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
          badge: "Full Stack Project",
          badgeCurrent: false,
          date: "February 2026 - June 2026",
          title: "Dynamic QR Code Platform",
          role: "Full Stack Developer",
          description: "An end-to-end redirection platform featuring an advanced QR designer, bulk code generation via CSV, dynamic digital business cards (vCards) with direct contact downloading, and a comprehensive admin management & analytics dashboard.",
          tech: ["React", "Node.js", "MySQL", "Sequelize", "REST API"]
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
        { href: "https://github.com/BatuhanTNK/GameSkinAI", icon: "fas fa-gamepad", title: "GameSkinAI", desc: "AI-powered game skin/personalization platform (React + Horizon UI)", lang: "JavaScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK/time_thief", icon: "fas fa-stopwatch", title: "time_thief (Chronos)", desc: "Backendless, game-based task system: daily spin, streak and achievements", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK/click_count-", icon: "fas fa-mouse-pointer", title: "click_count", desc: "Counter app with categories, timer, reminders, templates and Android widget", lang: "TypeScript", langIcon: "fab fa-js" },
        { href: "https://github.com/BatuhanTNK/chatbot_uygulama-main-server", icon: "fas fa-robot", title: "Chatbot App", desc: "Chatbot & satisfaction survey with Supabase + Mistral AI + Gmail integration", lang: "Node.js", langIcon: "fab fa-node-js" }
      ],
      archivedHeader: "Other Projects (Archive)",
      archivedSub: "Early-stage and educational work",
      archivedProjects: [
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
