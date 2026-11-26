(() => {
  const gallery = document.querySelector('#gallery');
  const previous = document.querySelector('[data-prev]');
  const next = document.querySelector('[data-next]');
  const status = document.querySelector('.gallery-status');
  const frames = [...gallery.querySelectorAll('figure')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function update() {
    const end = gallery.scrollWidth - gallery.clientWidth;
    previous.setAttribute('aria-disabled', String(gallery.scrollLeft <= 2));
    next.setAttribute('aria-disabled', String(gallery.scrollLeft >= end - 2));
    const box = gallery.getBoundingClientRect();
    const visible = frames.map((frame, index) => ({ index, box: frame.getBoundingClientRect() }))
      .filter(frame => frame.box.right > box.left + 15 && frame.box.left < box.right - 15);
    if (visible.length) status.textContent = `Showing ${visible[0].index + 1}–${visible[visible.length - 1].index + 1} of ${frames.length}`;
  }
  function move(direction) {
    const control = direction < 0 ? previous : next;
    if (control.getAttribute('aria-disabled') === 'true') return;
    const step = frames[1].offsetLeft - frames[0].offsetLeft;
    gallery.scrollBy({ left: direction * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  gallery.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  gallery.addEventListener('keydown', event => {
    if (event.target !== gallery) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      gallery.scrollTo({ left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
  });
  update();
})();
