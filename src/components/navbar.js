// ============================================
//  NAVBAR COMPONENT
// ============================================

export function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const links = [
    { label: 'Home',        href: '#hero' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Portfolio',   href: '#portfolio' },
    { label: 'Testimonials',href: '#testimonials' },
    { label: 'Blog',        href: '#blog' },
    { label: 'Contact',     href: '#contact' },
  ];

  const isDark = () => document.body.classList.contains('dark') ||
    (!document.body.classList.contains('light'));

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">rio<span>.</span>vincent</a>

      <ul class="nav-links">
        ${links.map(l => `
          <li><a href="${l.href}">${l.label}</a></li>
        `).join('')}
      </ul>

      <div class="nav-right">
        <button class="theme-toggle" aria-label="Toggle theme" id="theme-btn">
          <svg id="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span id="theme-label">Light</span>
        </button>
        <a href="#contact" class="btn btn-primary" style="padding:8px 18px;font-size:0.8rem">
          Hire me ↗
        </a>
        <button class="nav-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" id="mobile-menu">
      ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      <a href="#contact" class="btn btn-primary">Hire me ↗</a>
    </div>
  `;

  // Scroll: add scrolled class
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
  });

  // Active link on scroll
  function updateActiveLink() {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean);
    const scrollY = window.scrollY + 80;

    sections.forEach((sec, i) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const link = nav.querySelector(`a[href="${links[i].href}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < bottom);
      }
    });
  }

  // Smooth scroll on link click
  nav.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu
      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });

  // Hamburger toggle
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('open');
  });

  // Theme toggle
  document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);

  function toggleTheme() {
    const body = document.body;
    const isNowDark = body.classList.toggle('dark');
    body.classList.toggle('light', !isNowDark);
    updateThemeIcon(!isNowDark);
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  }

  function updateThemeIcon(isLight) {
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (!icon || !label) return;

    if (isLight) {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      label.textContent = 'Dark';
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
      label.textContent = 'Light';
    }
  }

  // Load saved theme
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    updateThemeIcon(true);
  }
}
