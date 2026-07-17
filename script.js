try { // TOP-LEVEL ERROR WRAPPER

// ========================
// App State
// ========================
let currentLang = "tr";
let currentRouteIndex = 0;

// ========================
// Theme Toggle
// ========================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (theme === "light") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// ========================
// Mobile Menu
// ========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// ========================
// Navbar Scroll Effect
// ========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========================
// Language Switcher
// ========================
const langSwitcher = document.getElementById("langSwitcher");
const langOpts = langSwitcher.querySelectorAll(".lang-opt");
const langSlider = langSwitcher.querySelector(".lang-slider");

langOpts.forEach((opt) => {
  opt.addEventListener("click", () => {
    const newLang = opt.dataset.lang;
    if (newLang === currentLang) return;
    const newSlug = getRouteSlug(newLang, currentRouteIndex);
    navigateTo(newLang, newSlug);
  });
});

function updateLangToggle() {
  langOpts.forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === currentLang);
  });
  langSlider.classList.toggle("right", currentLang === "en");
}

// ========================
// Hash Router
// ========================
function parseHash() {
  const hash = window.location.hash.replace("#/", "");
  if (!hash) return { lang: null, slug: null };
  const parts = hash.split("/");
  return { lang: parts[0] || null, slug: parts[1] || null };
}

function navigateTo(lang, slug) {
  const newHash = `#/${lang}/${slug}`;
  if (window.location.hash === newHash) {
    handleRoute();
  } else {
    window.location.hash = newHash;
  }
}

function handleRoute() {
  let { lang, slug } = parseHash();

  // Default route - fix lang if missing or invalid
  if (!lang || (lang !== "tr" && lang !== "en")) {
    lang = localStorage.getItem("lang") || "tr";
    slug = getRouteSlug(lang, 0);
    history.replaceState(null, "", `#/${lang}/${slug}`);
  }

  // Fix slug if missing
  if (!slug) {
    slug = getRouteSlug(lang, 0);
    history.replaceState(null, "", `#/${lang}/${slug}`);
  }

  // Fix slug if invalid
  let routeIndex = getRouteIndex(slug);
  if (routeIndex === -1) {
    slug = getRouteSlug(lang, 0);
    routeIndex = 0;
    history.replaceState(null, "", `#/${lang}/${slug}`);
  }

  currentLang = lang;
  currentRouteIndex = routeIndex;
  localStorage.setItem("lang", lang);

  renderApp();
}

window.addEventListener("hashchange", handleRoute);

// ========================
// Logo click
// ========================
document.getElementById("navLogo").addEventListener("click", (e) => {
  e.preventDefault();
  navigateTo(currentLang, getRouteSlug(currentLang, 0));
});

// ========================
// Render App
// ========================
function renderApp() {
  const t = translations[currentLang];
  const app = document.getElementById("app");

  // Update HTML lang
  html.setAttribute("lang", t.htmlLang);

  // Update page title
  document.title = t.pageTitle;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.metaDescription);

  // Update lang toggle
  updateLangToggle();

  // Update footer
  document.getElementById("footerText").textContent = t.footer.text;

  // Render nav
  renderNav(t);

  // Render current view
  const viewRenderers = [renderHero, renderAbout, renderSkills, renderExperience, renderCertificates, renderContact];
  app.innerHTML = viewRenderers[currentRouteIndex](t);

  // Scroll to top
  window.scrollTo(0, 0);

  // Init reveal animations
  initRevealAnimations();

  // Init view-specific JS
  if (currentRouteIndex === 0) initHeroEffects();
  if (currentRouteIndex === 5) initContactForm(t);
}

// ========================
// Render Navigation
// ========================
function renderNav(t) {
  const navItems = routeNamesByLang[currentLang];
  const navLabels = t.nav;

  navMenu.innerHTML = navItems
    .map((slug, i) => {
      const label = navLabels[slug];
      const isActive = i === currentRouteIndex ? " active" : "";
      return `<li><a href="#/${currentLang}/${slug}" class="nav-link${isActive}" data-route-index="${i}">${label}</a></li>`;
    })
    .join("");

  // Nav link click handlers
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      window.location.hash = href;
      closeMenu();
    });
  });
}

// ========================
// View Renderers
// ========================

function renderHero(t) {
  const h = t.hero;
  const statsHTML = h.stats
    .map(
      (s, i) =>
        `<div class="stat-item">
          <span class="stat-number">${s.number}</span>
          <span class="stat-label">${s.label}</span>
        </div>${i < h.stats.length - 1 ? '<div class="stat-divider"></div>' : ""}`
    )
    .join("");

  const experienceRoute = getRouteSlug(currentLang, 3);
  const contactRoute = getRouteSlug(currentLang, 5);

  return `
    <section class="hero" id="hero">
      <div class="hero-bg-effects">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
        <div class="grid-overlay"></div>
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge reveal">
            <i class="fas fa-code"></i>
            <span>${h.badge}</span>
          </div>
          <h1 class="hero-title reveal">
            ${h.titleLine1}<br>
            <span class="gradient-text">${h.titleLine2}</span>
          </h1>
          <p class="hero-description reveal">${h.description}</p>
          <div class="hero-cta reveal">
            <a href="#/${currentLang}/${experienceRoute}" class="btn btn-primary">
              <i class="fas fa-rocket"></i>
              ${h.ctaPrimary}
            </a>
            <a href="#/${currentLang}/${contactRoute}" class="btn btn-outline">
              <i class="fas fa-envelope"></i>
              ${h.ctaSecondary}
            </a>
          </div>
          <div class="hero-stats reveal">
            ${statsHTML}
          </div>
        </div>
        <div class="hero-visual reveal">
          <div class="code-window">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="code-title">portfolio.ts</span>
            </div>
            <div class="code-body">
              <pre><code><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">${h.codeLines.name}</span>,
  <span class="code-property">role</span>: <span class="code-string">${h.codeLines.role}</span>,
  <span class="code-property">skills</span>: [
    ${h.codeLines.skills.map((s) => `<span class="code-string">${s}</span>`).join(",\n    ")}
  ],
  <span class="code-property">passion</span>: <span class="code-string">${h.codeLines.passion}</span>,
  <span class="code-method">build</span>: () =&gt; <span class="code-string">"&#x1f680;"</span>
};</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderAbout(t) {
  const a = t.about;
  const paragraphs = a.paragraphs.map((p) => `<p>${p}</p>`).join("");
  const highlights = a.highlights
    .map(
      (h) => `
      <div class="highlight-item">
        <div class="highlight-icon"><i class="${h.icon}"></i></div>
        <div>
          <h4>${h.title}</h4>
          <p>${h.text}</p>
        </div>
      </div>`
    )
    .join("");

  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-user"></i> ${a.tag}</span>
          <h2 class="section-title">${a.title}</h2>
        </div>
        <div class="about-grid">
          <div class="about-text reveal">
            ${paragraphs}
            <div class="about-highlights">
              ${highlights}
            </div>
          </div>
          <div class="about-visual reveal">
            <div class="tech-orbit">
              <div class="orbit-center">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div class="orbit-ring ring-1">
                <div class="orbit-item" style="--i:0"><i class="fab fa-js"></i></div>
                <div class="orbit-item" style="--i:1"><i class="fab fa-react"></i></div>
                <div class="orbit-item" style="--i:2"><i class="fab fa-java"></i></div>
                <div class="orbit-item" style="--i:3"><i class="fab fa-node-js"></i></div>
              </div>
              <div class="orbit-ring ring-2">
                <div class="orbit-item" style="--i:0"><i class="fas fa-database"></i></div>
                <div class="orbit-item" style="--i:1"><i class="fab fa-git-alt"></i></div>
                <div class="orbit-item" style="--i:2"><i class="fas fa-brain"></i></div>
                <div class="orbit-item" style="--i:3"><i class="fab fa-html5"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderSkills(t) {
  const s = t.skills;
  const categoriesHTML = s.categories
    .map((cat) => {
      const tagsHTML = cat.tags
        .map(
          (tag) =>
            `<span class="skill-tag" data-color="${tag.color}"><i class="${tag.icon}"></i> ${tag.label}</span>`
        )
        .join("");
      const descHTML = cat.description ? `<p class="skill-category-desc">${cat.description}</p>` : "";
      return `
        <div class="skill-category reveal">
          <div class="skill-category-header">
            <div class="skill-category-icon"><i class="${cat.icon}"></i></div>
            <h3>${cat.title}</h3>
          </div>
          ${descHTML}
          <div class="skill-tags">${tagsHTML}</div>
        </div>`;
    })
    .join("");

  return `
    <section class="section section-alt" id="skills">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-cogs"></i> ${s.tag}</span>
          <h2 class="section-title">${s.title}</h2>
        </div>
        <div class="skills-grid">
          ${categoriesHTML}
        </div>
      </div>
    </section>`;
}

function renderExperience(t) {
  const e = t.experience;
  const itemsHTML = e.items
    .map((item) => {
      const techHTML = item.tech.map((t) => `<span>${t}</span>`).join("");
      const badgeClass = item.badgeCurrent ? " current" : "";
      const cardClass = item.badgeCurrent ? " featured" : "";
      return `
        <div class="experience-card${cardClass} reveal">
          <div class="card-accent"></div>
          <div class="experience-header">
            <div class="experience-icon"><i class="${item.icon}"></i></div>
            <div class="experience-meta">
              <span class="experience-badge${badgeClass}">${item.badge}</span>
              <span class="experience-date"><i class="fas fa-calendar"></i> ${item.date}</span>
            </div>
          </div>
          <h3>${item.title}</h3>
          <p class="experience-role">${item.role}</p>
          <p>${item.description}</p>
          <div class="experience-tech">${techHTML}</div>
        </div>`;
    })
    .join("");

  const projectCard = (p) => `
      <a href="${p.href}" target="_blank" class="project-card reveal">
        <div class="project-icon"><i class="${p.icon}"></i></div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <span class="project-lang"><i class="${p.langIcon}"></i> ${p.lang}</span>
      </a>`;

  const projectsHTML = e.projects.map(projectCard).join("");

  const archivedHTML = (e.archivedProjects || [])
    .map((p) => projectCard(p).replace('class="project-card reveal', 'class="project-card archived reveal'))
    .join("");

  return `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-briefcase"></i> ${e.tag}</span>
          <h2 class="section-title">${e.title}</h2>
        </div>
        <div class="experience-grid">
          ${itemsHTML}
          <div class="projects-header reveal">
            <h3><i class="fab fa-github"></i> ${e.projectsHeader}</h3>
            <p>${e.projectsSub}</p>
          </div>
          <div class="github-projects">
            ${projectsHTML}
          </div>
          ${e.archivedProjects && e.archivedProjects.length ? `
          <div class="projects-header archived-header reveal">
            <h3><i class="fas fa-box-archive"></i> ${e.archivedHeader}</h3>
            <p>${e.archivedSub}</p>
          </div>
          <div class="github-projects archived-projects">
            ${archivedHTML}
          </div>` : ''}
        </div>
      </div>
    </section>
    <section class="section cta-section" id="cta">
      <div class="container">
        <div class="cta-box reveal">
          <div class="cta-content">
            <h2>${t.cta.title}</h2>
            <p>${t.cta.description}</p>
          </div>
          <a href="#/${currentLang}/${getRouteSlug(currentLang, 5)}" class="btn btn-primary cta-btn">
            ${t.cta.button} <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>`;
}

function renderCertificates(t) {
  const c = t.certificates;
  const itemsHTML = c.items
    .map((item) => {
      const tagsHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
      return `
        <div class="timeline-item reveal">
          <div class="timeline-dot"><i class="${item.icon}"></i></div>
          <div class="timeline-content">
            <div class="timeline-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p class="timeline-org"><i class="fas fa-university"></i> ${item.org}</p>
            <p>${item.desc}</p>
            <div class="timeline-tags">${tagsHTML}</div>
          </div>
        </div>`;
    })
    .join("");

  return `
    <section class="section section-alt" id="certificates">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-certificate"></i> ${c.tag}</span>
          <h2 class="section-title">${c.title}</h2>
        </div>
        <div class="timeline">
          ${itemsHTML}
        </div>
      </div>
    </section>`;
}

function renderContact(t) {
  const c = t.contact;
  return `
    <section class="section" id="contact">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-paper-plane"></i> ${c.tag}</span>
          <h2 class="section-title">${c.title}</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-info reveal">
            <p class="contact-intro">${c.intro}</p>
            <div class="contact-cards">
              <a href="https://mail.google.com/mail/?view=cm&to=batuhan.tonk.1@gmail.com" class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-envelope"></i></div>
                <div>
                  <h4>${c.email}</h4>
                  <p>batuhan.tonk.1@gmail.com</p>
                </div>
              </a>
              <a href="tel:+905411466133" class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-phone"></i></div>
                <div>
                  <h4>${c.phone}</h4>
                  <p>+90 541 146 61 33</p>
                </div>
              </a>
              <div class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4>${c.location}</h4>
                  <p>${c.locationValue}</p>
                </div>
              </div>
            </div>
            <div class="social-links">
              <a href="https://linkedin.com/in/batuhan-tonk-3b520a315" target="_blank" class="social-link linkedin" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/BatuhanTNK" target="_blank" class="social-link github" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=batuhan.tonk.1@gmail.com" class="social-link email" aria-label="Email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div class="contact-form-wrapper reveal">
            <form class="contact-form" id="contactForm" action="https://formspree.io/f/xpqjgrvy" method="POST">
              <div class="form-group">
                <input type="text" id="formName" name="name" placeholder="${c.formName}" required>
                <label for="formName">${c.formName}</label>
              </div>
              <div class="form-group">
                <input type="email" id="formEmail" name="email" placeholder="${c.formEmail}" required>
                <label for="formEmail">${c.formEmail}</label>
              </div>
              <div class="form-group">
                <textarea id="formMessage" name="message" rows="5" placeholder="${c.formMessage}" required></textarea>
                <label for="formMessage">${c.formMessage}</label>
              </div>
              <button type="submit" class="btn btn-primary btn-full">
                <i class="fas fa-paper-plane"></i>
                ${c.formButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

// ========================
// View-Specific Initializers
// ========================

function initHeroEffects() {
  const codeBody = document.querySelector(".code-body");
  if (codeBody) {
    codeBody.style.opacity = "0";
    const codeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = "opacity 0.8s ease";
            entry.target.style.opacity = "1";
            codeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    codeObserver.observe(codeBody);
  }

  // CTA links inside hero
  document.querySelectorAll('.hero a[href^="#/"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = link.getAttribute("href");
    });
  });
}

function initContactForm(t) {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const c = t.contact;
    const btn = this.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;

    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${c.formSending}`;
    btn.style.opacity = "0.8";
    btn.disabled = true;

    try {
      const formData = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        btn.innerHTML = `<i class="fas fa-check"></i> ${c.formSuccess}`;
        btn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
        btn.style.opacity = "1";
        this.reset();
      } else {
        throw new Error("Form error");
      }
    } catch (error) {
      btn.innerHTML = `<i class="fas fa-times"></i> ${c.formError}`;
      btn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      btn.style.opacity = "1";
    }

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = "";
      btn.disabled = false;
      btn.style.opacity = "";
    }, 3000);
  });
}

// ========================
// Reveal Animations
// ========================
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * 100);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealElements.forEach((el) => revealObserver.observe(el));
}

// ========================
// SPA link handling (CTA, etc.)
// ========================
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#/"]');
  if (link) {
    e.preventDefault();
    window.location.hash = link.getAttribute("href");
  }
});

// ========================
// Init
// ========================
handleRoute();

} catch (e) {
  document.getElementById("app").innerHTML = `<div style="color:red;padding:40px;margin-top:80px;font-size:16px;"><h2>JS Error:</h2><pre>${e.message}\n\n${e.stack}</pre></div>`;
}
