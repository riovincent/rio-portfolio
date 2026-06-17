// ============================================
//  TESTIMONIALS SECTION
// ============================================

const testimonials = [
  {
    stars: 5,
    text: 'Rio sangat profesional dan responsif. Landing page yang dibuat untuk UMKM kami jauh melebihi ekspektasi — bersih, mobile-friendly, dan langsung meningkatkan kepercayaan pelanggan.',
    initials: 'AS',
    name: 'Andi Susanto',
    role: 'Pemilik UMKM Kuliner, Pekanbaru',
  },
  {
    stars: 5,
    text: 'Analisis riset untuk skripsi saya sangat membantu. Rio mampu menjelaskan output SmartPLS dengan sangat jelas dan membantu saya memahami hasil path analysis secara mendalam.',
    initials: 'DF',
    name: 'Dewi Fitria',
    role: 'Mahasiswi FEB UNRI',
  },
  {
    stars: 5,
    text: 'Konten Instagram KKN yang Rio buat sangat estetik dan konsisten. Grid feed-nya rapi dan engagement meningkat signifikan sejak pakai strategi konten dari Rio.',
    initials: 'MR',
    name: 'Muhammad Rizky',
    role: 'Ketua KKN Kelompok 12',
  },
];

export function initTestimonials() {
  const section = document.getElementById('testimonials');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="section-header reveal">
        <div class="section-label">Testimoni</div>
        <h2>Kata mereka tentang saya</h2>
      </div>

      <div class="testimonials-grid">
        ${testimonials.map((t, i) => `
          <div class="testi-card glass reveal reveal-delay-${i + 1}">
            <div class="testi-stars">
              ${'★'.repeat(t.stars)}
            </div>
            <p class="testi-text">${t.text}</p>
            <div class="testi-author">
              <div class="testi-avatar">${t.initials}</div>
              <div>
                <div class="testi-name">${t.name}</div>
                <div class="testi-role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


// ============================================
//  BLOG SECTION
// ============================================

const posts = [
  {
    emoji: '📈',
    bg: 'linear-gradient(135deg,rgba(124,111,247,0.2),rgba(0,212,255,0.1))',
    category: 'Trading',
    date: 'Jun 2026',
    title: 'Strategi MSNR untuk XAUUSD: Panduan Lengkap',
    excerpt: 'Breakdown strategi yang saya gunakan di EA MT5, termasuk entry rules, risk management, dan optimasi parameter.',
    link: '#',
  },
  {
    emoji: '🏪',
    bg: 'linear-gradient(135deg,rgba(255,107,157,0.2),rgba(124,111,247,0.1))',
    category: 'UMKM',
    date: 'Mei 2026',
    title: 'QRIS untuk UMKM: Cara Onboarding Tanpa Ribet',
    excerpt: 'Pengalaman langsung mendampingi pedagang lokal mendaftar QRIS selama KKN di Pangkalan Makmur, Siak.',
    link: '#',
  },
  {
    emoji: '🎓',
    bg: 'linear-gradient(135deg,rgba(0,212,255,0.2),rgba(0,180,80,0.1))',
    category: 'Akademik',
    date: 'Apr 2026',
    title: 'PLS-SEM vs CB-SEM: Kapan Harus Pakai yang Mana?',
    excerpt: 'Panduan memilih metode SEM yang tepat untuk penelitian manajemen, berdasarkan pengalaman skripsi saya.',
    link: '#',
  },
];

export function initBlog() {
  const section = document.getElementById('blog');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="section-header reveal" style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px">
        <div>
          <div class="section-label">Blog</div>
          <h2>Tulisan terbaru</h2>
        </div>
        <a href="#" class="btn btn-ghost" style="padding:8px 18px;font-size:0.82rem">Semua artikel ↗</a>
      </div>

      <div class="blog-grid">
        ${posts.map((p, i) => `
          <a href="${p.link}" class="blog-card glass reveal reveal-delay-${i + 1}">
            <div class="blog-thumb" style="background:${p.bg}">${p.emoji}</div>
            <div class="blog-body">
              <div class="blog-meta">
                <span class="blog-category">${p.category}</span>
                <span class="blog-date">${p.date}</span>
              </div>
              <div class="blog-title">${p.title}</div>
              <div class="blog-excerpt">${p.excerpt}</div>
              <div class="blog-readmore">Baca selengkapnya →</div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}


// ============================================
//  CONTACT SECTION
// ============================================

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  tiktok:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 5.69 1.69V6.92a4.79 4.79 0 0 1-2.76-.23z"/></svg>',
  linkedin:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
  github:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9 0 3.2.9.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
  email:     '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
};

const socials = [
  { key: 'instagram', name: 'Instagram', handle: '@rio_vnct',                    href: 'https://instagram.com/rio_vnct' },
  { key: 'tiktok',    name: 'TikTok',    handle: '@riovnct',                     href: 'https://tiktok.com/@riovnct' },
  { key: 'linkedin',  name: 'LinkedIn',  handle: 'Rio Vincent Sirait',           href: 'https://linkedin.com' },
  { key: 'github',    name: 'GitHub',    handle: 'github.com/riovincent',        href: 'https://github.com/riovincent' },
  { key: 'email',     name: 'Email',     handle: 'rio.vincent.paulus@gmail.com', href: 'mailto:rio.vincent.paulus@gmail.com' },
];

export function initContact() {
  const section = document.getElementById('contact');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="section-header reveal">
        <div class="section-label">Kontak</div>
        <h2>Ayo terhubung</h2>
        <p style="margin-top:10px;max-width:480px">
          Punya proyek, tawaran kolaborasi, atau sekadar mau ngobrol soal trading dan bisnis digital? Hubungi saya.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Form -->
        <div class="contact-form-card glass reveal">
          <h3 style="margin-bottom:20px">Kirim pesan</h3>
          <form class="contact-form" id="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cf-name">Nama</label>
                <input class="form-input" id="cf-name" type="text" placeholder="Nama lengkap" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="cf-email">Email</label>
                <input class="form-input" id="cf-email" type="email" placeholder="email@kamu.com" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="cf-subject">Subjek</label>
              <input class="form-input" id="cf-subject" type="text" placeholder="Tentang apa?" />
            </div>
            <div class="form-group">
              <label class="form-label" for="cf-msg">Pesan</label>
              <textarea class="form-textarea" id="cf-msg" placeholder="Tuliskan pesanmu di sini..." required></textarea>
            </div>

            <button type="button" class="ai-helper" id="ai-suggest-btn">
              <span>✨</span>
              <span>Bantuan AI: isi pesan otomatis berdasarkan kebutuhan saya</span>
            </button>

            <div id="cf-status" style="font-size:0.8rem;color:var(--accent-cyan);display:none;padding:8px 0"></div>

            <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:4px">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Kirim pesan
            </button>
          </form>
        </div>

        <!-- Info -->
        <div class="contact-info reveal reveal-delay-1">

          <div class="avail-badge">
            <div class="avail-dot"></div>
            <span class="avail-text">Tersedia untuk proyek freelance & kolaborasi</span>
          </div>

          <div class="contact-info-card glass">
            <div class="contact-info-title">Temukan saya di</div>
            <div class="social-links">
              ${socials.map(s => `
                <a href="${s.href}" target="_blank" rel="noopener" class="social-link">
                  <span class="social-icon social-icon-${s.key}">${ICONS[s.key]}</span>
                  <span class="social-name">${s.name}</span>
                  <span class="social-handle">${s.handle}</span>
                  <span class="social-arrow">↗</span>
                </a>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  // Form submit handler (demo — connect to backend/emailjs as needed)
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('cf-status');
    if (status) {
      status.style.display = 'block';
      status.textContent = '✓ Pesan terkirim! Saya akan membalas dalam 1x24 jam.';
    }
  });

  // AI helper button (placeholder — connect to AI API)
  document.getElementById('ai-suggest-btn')?.addEventListener('click', () => {
    const msg = document.getElementById('cf-msg');
    if (msg && !msg.value) {
      msg.value = 'Halo Rio, saya tertarik untuk berkolaborasi dalam proyek ';
      msg.focus();
    }
  });
}


// ============================================
//  FOOTER
// ============================================

export function initFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-wrap">
      <a href="#hero" class="footer-logo">rio<span>.</span>vincent</a>
      <p class="footer-copy">© ${year} Rio Vincent Paulus Sirait. All rights reserved.</p>
      <nav class="footer-links">
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Kontak</a>
      </nav>
    </div>
  `;
}
