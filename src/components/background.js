// ============================================
//  BACKGROUND — Animated floating orb canvas
// ============================================

export function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const orbs = [
    { x: 0.15, y: 0.1,  r: 0.28, color: '#6c63ff', vx: 0.00008, vy: 0.00006 },
    { x: 0.85, y: 0.25, r: 0.22, color: '#00d4ff', vx: -0.00007, vy: 0.00009 },
    { x: 0.5,  y: 0.75, r: 0.18, color: '#ff6b9d', vx: 0.00006, vy: -0.00008 },
    { x: 0.75, y: 0.8,  r: 0.15, color: '#7c6ff7', vx: -0.00005, vy: -0.00006 },
  ];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isLight = document.body.classList.contains('light');

    // Background gradient
    const grad = ctx.createRadialGradient(
      canvas.width * 0.3, canvas.height * 0.3, 0,
      canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
    );

    if (isLight) {
      grad.addColorStop(0, '#dde3ff');
      grad.addColorStop(0.5, '#e8ebff');
      grad.addColorStop(1, '#f0f2ff');
    } else {
      grad.addColorStop(0, '#0d1b3e');
      grad.addColorStop(0.5, '#0a0a1f');
      grad.addColorStop(1, '#07071a');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Orbs
    orbs.forEach(orb => {
      const x = orb.x * canvas.width;
      const y = orb.y * canvas.height;
      const r = orb.r * Math.min(canvas.width, canvas.height);

      const radialGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
      radialGrad.addColorStop(0, orb.color + (isLight ? '55' : '45'));
      radialGrad.addColorStop(0.5, orb.color + (isLight ? '28' : '22'));
      radialGrad.addColorStop(1, orb.color + '00');

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = radialGrad;
      ctx.fill();

      // Move
      orb.x += orb.vx;
      orb.y += orb.vy;

      // Bounce
      if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
      if (orb.y < 0.05 || orb.y > 0.95) orb.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}
