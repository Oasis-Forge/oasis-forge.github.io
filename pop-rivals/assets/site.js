'use strict';
const gallery = document.querySelector('#gallery');
const previous = document.querySelector('#gallery-prev');
const next = document.querySelector('#gallery-next');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
function updateGallery() {
  previous.setAttribute('aria-disabled', String(gallery.scrollLeft <= 8));
  next.setAttribute('aria-disabled', String(gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 8));
}
function moveGallery(direction) {
  const control = direction < 0 ? previous : next;
  if (control.getAttribute('aria-disabled') === 'true') return;
  const step = gallery.querySelector('figure').getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).gap);
  gallery.scrollBy({ left: direction * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
previous.addEventListener('click', () => moveGallery(-1));
next.addEventListener('click', () => moveGallery(1));
gallery.addEventListener('scroll', updateGallery, { passive: true });
gallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveGallery(event.key === 'ArrowLeft' ? -1 : 1);
  }
  if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    gallery.scrollTo({ left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
});
addEventListener('resize', updateGallery);
if ('ResizeObserver' in window) new ResizeObserver(updateGallery).observe(gallery);
updateGallery();
