// ── YEAR ──────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── SCROLL FADE-IN ────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Slight stagger for consecutive sections
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── NAV ACTIVE LINK ───────────────────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--ink)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' }
);

sections.forEach(sec => navObserver.observe(sec));

// ── NAV SHADOW ON SCROLL ──────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'var(--line-bright)'
    : 'var(--line)';
}, { passive: true });
