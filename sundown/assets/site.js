(() => {
  'use strict';
  const gallery = document.getElementById('gallery');
  const arrows = Array.from(document.querySelectorAll('.gallery-arrow'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!gallery || arrows.length !== 2) return;
  const update = () => {
    const end = gallery.scrollWidth - gallery.clientWidth;
    arrows[0].setAttribute('aria-disabled', String(gallery.scrollLeft <= 5));
    arrows[1].setAttribute('aria-disabled', String(gallery.scrollLeft >= end - 5));
  };
  const move = direction => {
    const card = gallery.querySelector('figure');
    const gap = parseFloat(getComputedStyle(gallery).gap) || 0;
    gallery.scrollBy({left: direction * (card.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  };
  arrows.forEach(button => button.addEventListener('click', () => {
    if (button.getAttribute('aria-disabled') === 'true') return;
    move(Number(button.dataset.direction));
  }));
  gallery.addEventListener('scroll', update, {passive: true});
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      gallery.scrollTo({left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
    }
  });
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(gallery);
  else window.addEventListener('resize', update);
  update();
})();
