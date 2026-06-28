// ──────────────────────────────────────────────────────────
//  script.js  —  Cuenta atrás + animaciones de scroll
// ──────────────────────────────────────────────────────────

/* ── Cuenta atrás hasta el 25 de julio de 2026, 16:00h ── */
function updateCountdown() {
  const start  = new Date('2026-07-25T16:00:00');
  const end    = new Date('2026-08-01T16:00:00');
  const now    = new Date();
  const diff   = start - now;

  if (now >= end) {
    document.getElementById('countdown').innerHTML =
      '<div class="countdown-box"><span class="countdown-num">🏖️</span><span class="countdown-label">¡Ya llegamos!</span></div>';
    return;
  }

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<div class="countdown-box"><span class="countdown-num">🚴</span><span class="countdown-label">¡Estamos pedaleando!</span></div>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const fmt = n => String(n).padStart(2, '0');

  document.getElementById('cd-days').textContent    = days;
  document.getElementById('cd-hours').textContent   = fmt(hours);
  document.getElementById('cd-minutes').textContent = fmt(minutes);
  document.getElementById('cd-seconds').textContent = fmt(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ── Animaciones al hacer scroll ── */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
