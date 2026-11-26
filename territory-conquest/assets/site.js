'use strict';

const gallery = document.querySelector('#gallery');
const previous = document.querySelector('[data-previous]');
const next = document.querySelector('[data-next]');
const position = document.querySelector('#gallery-position');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (gallery && previous && next) {
  const slides = Array.from(gallery.children);
  const slideLeft = slide => slide.getBoundingClientRect().left - gallery.getBoundingClientRect().left + gallery.scrollLeft;
  const update = () => {
    const atStart = gallery.scrollLeft <= 2;
    const atEnd = gallery.scrollWidth - gallery.clientWidth - gallery.scrollLeft <= 2;
    previous.setAttribute('aria-disabled', String(atStart));
    next.setAttribute('aria-disabled', String(atEnd));
    let current = 0;
    slides.forEach((slide, index) => {
      if (slideLeft(slide) <= gallery.scrollLeft + 3) current = index;
    });
    if (atEnd) current = slides.length - 1;
    if (position) position.textContent = `${current + 1} / ${slides.length}`;
  };
  const move = direction => {
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const currentScroll = gallery.scrollLeft;
    let target;
    if (direction > 0) {
      target = slides.map(slideLeft).find(left => left > currentScroll + 3) ?? maxScroll;
    } else {
      target = slides.map(slideLeft).reverse().find(left => left < currentScroll - 3) ?? 0;
    }
    gallery.scrollTo({ left: Math.max(0, Math.min(target, maxScroll)), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  };
  previous.addEventListener('click', () => {
    if (previous.getAttribute('aria-disabled') !== 'true') move(-1);
  });
  next.addEventListener('click', () => {
    if (next.getAttribute('aria-disabled') !== 'true') move(1);
  });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      gallery.scrollTo({ left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
  });
  let frame;
  gallery.addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { update(); frame = null; });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
}
