'use strict';

const gallery = document.getElementById('gallery');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const position = document.getElementById('gallery-position');
const slides = Array.from(gallery.querySelectorAll('figure'));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateGallery() {
  const end = gallery.scrollWidth - gallery.clientWidth;
  previous.setAttribute('aria-disabled', String(gallery.scrollLeft <= 2));
  next.setAttribute('aria-disabled', String(gallery.scrollLeft >= end - 2));
  const firstLeft = slides[0].offsetLeft;
  let closest = 0;
  slides.forEach((slide, index) => {
    if (Math.abs(slide.offsetLeft - firstLeft - gallery.scrollLeft) < Math.abs(slides[closest].offsetLeft - firstLeft - gallery.scrollLeft)) closest = index;
  });
  const visibleEnd = gallery.scrollLeft + gallery.clientWidth;
  let last = closest;
  slides.forEach((slide, index) => {
    if (slide.offsetLeft - firstLeft + slide.offsetWidth <= visibleEnd + 2) last = Math.max(last, index);
  });
  const startLabel = String(closest + 1).padStart(2, '0');
  const endLabel = String(last + 1).padStart(2, '0');
  position.textContent = (last > closest ? startLabel + '–' + endLabel : startLabel) + ' / 06';
}

function moveGallery(direction) {
  const control = direction < 0 ? previous : next;
  if (control.getAttribute('aria-disabled') === 'true') return;
  const step = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).columnGap);
  gallery.scrollBy({ left: direction * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}

previous.addEventListener('click', () => moveGallery(-1));
next.addEventListener('click', () => moveGallery(1));
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
let queued = false;
gallery.addEventListener('scroll', () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { updateGallery(); queued = false; });
}, { passive: true });
new ResizeObserver(updateGallery).observe(gallery);
updateGallery();
