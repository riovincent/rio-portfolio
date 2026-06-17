// ============================================
//  SKILLS SECTION
// ============================================

const skills = [
  { icon: '📊', name: 'Marketing Management',  level: 'Advanced',     pct: 88 },
  { icon: '🧠', name: 'Strategic Management',  level: 'Advanced',     pct: 84 },
  { icon: '📈', name: 'SPSS / SmartPLS',        level: 'Intermediate', pct: 78 },
  { icon: '💻', name: 'Web Development',        level: 'Intermediate', pct: 70 },
  { icon: '🤖', name: 'Trading EA (MT5)',        level: 'Intermediate', pct: 65 },
  { icon: '🎨', name: 'Canva & Desain',          level: 'Advanced',     pct: 85 },
  { icon: '📱', name: 'Social Media Marketing', level: 'Advanced',     pct: 90 },
  { icon: '🔍', name: 'Research & Analisis',    level: 'Advanced',     pct: 82 },
];

export function initSkills() {
  const section = document.getElementById('skills');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="section-header reveal">
        <div class="section-label">Kemampuan</div>
        <h2>Skill & stack saya</h2>
        <p style="margin-top:10px;max-width:520px">
          Kombinasi ilmu manajemen dan skill teknis yang saya kembangkan selama kuliah dan proyek nyata.
        </p>
      </div>

      <div class="skills-grid">
        ${skills.map((s, i) => `
          <div class="skill-card glass reveal reveal-delay-${(i % 4) + 1}">
            <span class="skill-icon">${s.icon}</span>
            <div class="skill-name">${s.name}</div>
            <div class="skill-level">${s.level}</div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" data-width="${s.pct}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
