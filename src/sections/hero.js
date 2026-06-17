// ============================================
//  HERO SECTION
// ============================================

export function initHero() {
  const section = document.getElementById('hero');
  if (!section) return;

  section.innerHTML = `
    <div class="hero-wrap">

      <!-- LEFT -->
      <div class="hero-left">
        <div class="hero-badge reveal">
          <div class="hero-badge-dot"></div>
          <span>Tersedia untuk proyek & kolaborasi</span>
        </div>

        <h1 class="hero-title reveal reveal-delay-1">
          Halo, saya<br>
          <span class="grad-text">Rio Vincent</span>
        </h1>

        <p class="hero-sub reveal reveal-delay-2">
          Mahasiswa Manajemen Universitas Riau yang membangun solusi digital —
          mulai dari web app, analisis trading, hingga digitalisasi UMKM.
        </p>

        <div class="hero-btns reveal reveal-delay-3">
          <a href="#portfolio" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Lihat portofolio
          </a>
          <a href="#contact" class="btn btn-ghost" id="cv-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>

        <div class="hero-stats reveal reveal-delay-4">
          <div class="hero-stat">
            <div class="hero-stat-num">12+</div>
            <div class="hero-stat-label">Proyek</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-num">3.7</div>
            <div class="hero-stat-label">IPK</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-num">UNRI</div>
            <div class="hero-stat-label">FEB</div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="hero-right reveal reveal-delay-2">
        <div class="avatar-ring-outer"></div>

        <div class="glass avatar-card">
          <div class="avatar-ring">RV</div>
          <div class="avatar-name">Rio Vincent Paulus Sirait</div>
          <div class="avatar-role">Manajemen · Web Dev · Trader</div>
          <div class="avatar-tags">
            <span class="avatar-tag">Marketing</span>
            <span class="avatar-tag">Web dev</span>
            <span class="avatar-tag">XAUUSD</span>
            <span class="avatar-tag">UMKM</span>
          </div>
        </div>

        <div class="float-card float-card-tl">
          <span class="float-card-icon">📊</span>
          <div>
            <div class="float-card-label">XAUUSD</div>
            <div class="float-card-val">Live chart ↗</div>
          </div>
        </div>

        <div class="float-card float-card-br">
          <span class="float-card-icon">✓</span>
          <div>
            <div class="float-card-label">QRIS onboarding</div>
            <div class="float-card-val">Selesai</div>
          </div>
        </div>

        <div class="float-card float-card-tm">
          <span class="float-card-icon">🎓</span>
          <div>
            <div class="float-card-label">Universitas Riau</div>
            <div class="float-card-val">Angkatan 2023</div>
          </div>
        </div>
      </div>

    </div>
  `;
}
