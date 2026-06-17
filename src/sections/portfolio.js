// ============================================
//  PORTFOLIO SECTION
// ============================================

const projects = [
  {
    icon: '📊',
    bg: 'linear-gradient(135deg,rgba(124,111,247,0.25),rgba(0,212,255,0.15))',
    glow: '#7c6ff7',
    tags: ['Trading', 'MT5', 'EA'],
    title: 'XAUUSD Trading EA',
    desc: 'Expert Advisor otomatis untuk MetaTrader 5 dengan strategi MSNR. Backtested dan dioptimasi untuk pasar gold.',
    link: '#',
    category: 'trading',
  },
  {
    icon: '🏪',
    bg: 'linear-gradient(135deg,rgba(255,107,157,0.25),rgba(124,111,247,0.15))',
    glow: '#ff6b9d',
    tags: ['UMKM', 'QRIS', 'Branding'],
    title: 'UMKM Naik Kelas',
    desc: 'Program digitalisasi UMKM: onboarding QRIS, Google Maps, dan branding digital untuk pedagang lokal di KKN.',
    link: '#',
    category: 'umkm',
  },
  {
    icon: '🌿',
    bg: 'linear-gradient(135deg,rgba(0,212,255,0.25),rgba(0,180,80,0.15))',
    glow: '#00d4ff',
    tags: ['KKN', 'Community', 'Riau'],
    title: 'KKN Pangkalan Makmur',
    desc: 'Dokumentasi dan publikasi KKN Kukerta UNRI 2026 di Kampung Pangkalan Makmur, Kecamatan Dayun, Siak.',
    link: '#',
    category: 'community',
  },
  {
    icon: '📝',
    bg: 'linear-gradient(135deg,rgba(124,111,247,0.2),rgba(255,107,157,0.15))',
    glow: '#7c6ff7',
    tags: ['Research', 'PLS-SEM', 'SAFF&Co'],
    title: 'Riset SAFF & Co.',
    desc: 'Skripsi: pengaruh social media marketing dan perceived value terhadap minat beli Gen Z dengan SmartPLS.',
    link: '#',
    category: 'research',
  },
  {
    icon: '🤖',
    bg: 'linear-gradient(135deg,rgba(0,212,255,0.2),rgba(124,111,247,0.2))',
    glow: '#00d4ff',
    tags: ['Web App', 'AI', 'Tools'],
    title: 'AI Caption Generator',
    desc: 'Tool berbasis AI untuk menghasilkan caption Instagram dan deskripsi produk Shopee/Tokopedia secara otomatis.',
    link: '#',
    category: 'webapp',
  },
  {
    icon: '📱',
    bg: 'linear-gradient(135deg,rgba(255,107,157,0.2),rgba(0,212,255,0.15))',
    glow: '#ff6b9d',
    tags: ['Instagram', 'KKN', 'Design'],
    title: 'Konten KKN Instagram',
    desc: 'Strategi grid Instagram dan konten visual untuk dokumentasi KKN dengan estetika vintage botanical.',
    link: '#',
    category: 'design',
  },
];

const filters = [
  { label: 'Semua',     value: 'all' },
  { label: 'Trading',   value: 'trading' },
  { label: 'UMKM',      value: 'umkm' },
  { label: 'Web App',   value: 'webapp' },
  { label: 'Research',  value: 'research' },
  { label: 'Design',    value: 'design' },
];

export function initPortfolio() {
  const section = document.getElementById('portfolio');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="section-header reveal">
        <div class="section-label">Karya</div>
        <h2>Proyek pilihan saya</h2>
        <p style="margin-top:10px;max-width:520px">
          Dari riset akademik sampai tools digital — ini proyek yang paling saya banggakan.
        </p>
      </div>

      <div class="portfolio-filter reveal">
        ${filters.map(f => `
          <button class="filter-btn ${f.value === 'all' ? 'active' : ''}" data-filter="${f.value}">
            ${f.label}
          </button>
        `).join('')}
      </div>

      <div class="portfolio-grid" id="port-grid">
        ${renderCards('all')}
      </div>
    </div>
  `;

  // Filter logic
  section.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      section.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const grid = document.getElementById('port-grid');
      if (grid) {
        grid.innerHTML = renderCards(filter);
        // Re-trigger reveal
        grid.querySelectorAll('.reveal').forEach(el => {
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }
    });
  });
}

function renderCards(filter) {
  const items = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  if (items.length === 0) {
    return `<p style="color:var(--text-muted);grid-column:1/-1">Belum ada proyek di kategori ini.</p>`;
  }
  return items.map((p, i) => `
    <a href="${p.link}" class="port-card glass reveal reveal-delay-${(i % 3) + 1}" style="position:relative">
      <div class="port-thumb" style="background:${p.bg}">
        <div class="port-thumb-glow" style="background:${p.glow}"></div>
        <div class="port-thumb-icon">${p.icon}</div>
        <div class="port-arrow">↗</div>
      </div>
      <div class="port-body">
        <div class="port-tags">
          ${p.tags.map(t => `<span class="port-tag">${t}</span>`).join('')}
        </div>
        <div class="port-title">${p.title}</div>
        <div class="port-desc">${p.desc}</div>
      </div>
    </a>
  `).join('');
}
