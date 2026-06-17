// ============================================
//  SCROLL REVEAL
// ============================================

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Trigger skill bar fill if inside skills section
          const bar = entry.target.querySelector('.skill-bar-fill');
          if (bar) bar.style.width = bar.dataset.width;

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
