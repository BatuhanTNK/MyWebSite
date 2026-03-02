// ========================
// Theme Toggle
// ========================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ========================
// Mobile Menu
// ========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================
// Navbar Scroll Effect
// ========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================
// Active Nav Link on Scroll
// ========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ========================
// Scroll Reveal Animation
// ========================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animations
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }
);

revealElements.forEach(el => revealObserver.observe(el));

// ========================
// Smooth Scroll for Links
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================
// Contact Form
// ========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    btn.style.opacity = '0.8';
    btn.disabled = true;

    try {
        const formData = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            btn.innerHTML = '<i class="fas fa-check"></i> Mesaj Gönderildi!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            btn.style.opacity = '1';
            this.reset();
        } else {
            throw new Error('Form gönderilemedi!');
        }
    } catch (error) {
        btn.innerHTML = '<i class="fas fa-times"></i> Hata Oluştu!';
        btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        btn.style.opacity = '1';
    }

    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.style.background = '';
        btn.disabled = false;
        btn.style.opacity = '';
    }, 3000);
});

// ========================
// Typing Effect for Code
// ========================
const codeBody = document.querySelector('.code-body');
if (codeBody) {
    codeBody.style.opacity = '0';

    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.8s ease';
                entry.target.style.opacity = '1';
                codeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    codeObserver.observe(codeBody);
}
