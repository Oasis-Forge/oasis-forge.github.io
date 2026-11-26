(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.querySelector('#language-toggle');
  const translatable = [...document.querySelectorAll('[data-en]')];
  const translatedAttributes = [...document.querySelectorAll('[data-en-alt], [data-en-aria-label], [data-en-src]')];
  for (const element of translatable) element.dataset.ar = element.textContent;
  for (const element of translatedAttributes) {
    for (const attribute of ['alt', 'aria-label', 'src']) {
      if (element.hasAttribute(`data-en-${attribute}`)) element.setAttribute(`data-ar-${attribute}`, element.getAttribute(attribute));
    }
  }
  const gallery = document.querySelector('#gallery');
  const previous = document.querySelector('#gallery-prev');
  const next = document.querySelector('#gallery-next');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  function updateGallery() {
    const position = Math.abs(gallery.scrollLeft);
    const max = gallery.scrollWidth - gallery.clientWidth;
    previous.setAttribute('aria-disabled', String(position <= 2));
    next.setAttribute('aria-disabled', String(position >= max - 2));
  }
  function moveGallery(direction) {
    const control = direction < 0 ? previous : next;
    if (control.getAttribute('aria-disabled') === 'true') return;
    const distance = gallery.querySelector('figure').getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).gap);
    gallery.scrollBy({left: direction * distance * (root.dir === 'rtl' ? -1 : 1), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }
  function setLanguage(language) {
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    for (const element of translatable) element.textContent = element.dataset[language];
    for (const element of translatedAttributes) {
      for (const attribute of ['alt', 'aria-label', 'src']) {
        const value = element.getAttribute(`data-${language}-${attribute}`);
        if (value !== null) element.setAttribute(attribute, value);
      }
    }
    toggle.innerHTML = language === 'ar' ? 'English <span aria-hidden="true">◎</span>' : 'العربية <span aria-hidden="true">◎</span>';
    toggle.lang = language === 'ar' ? 'en' : 'ar';
    toggle.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = language === 'ar' ? 'تحدي كرة القدم · Koora Trivia — Oasis Forge' : 'Koora Trivia — Think you know football? · Oasis Forge';
    gallery.scrollTo({left:0,behavior:'instant'});
    requestAnimationFrame(updateGallery);
    try { localStorage.setItem('koora-page-language', language); } catch { /* The toggle also works without storage. */ }
  }
  toggle.addEventListener('click', () => setLanguage(root.lang === 'ar' ? 'en' : 'ar'));
  toggle.hidden = false;
  document.querySelector('.gallery-controls').hidden = false;
  previous.addEventListener('click', () => moveGallery(-1));
  next.addEventListener('click', () => moveGallery(1));
  gallery.addEventListener('scroll', updateGallery, {passive:true});
  gallery.addEventListener('keydown', event => {
    if (event.target !== gallery) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const visualDirection = event.key === 'ArrowRight' ? 1 : -1;
      moveGallery(visualDirection * (root.dir === 'rtl' ? -1 : 1));
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      gallery.scrollTo({left: event.key === 'Home' ? 0 : gallery.scrollWidth * (root.dir === 'rtl' ? -1 : 1), behavior:reducedMotion.matches ? 'instant' : 'smooth'});
    }
  });
  addEventListener('resize', updateGallery);
  if ('ResizeObserver' in window) new ResizeObserver(updateGallery).observe(gallery);
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('koora-page-language'); } catch { /* Arabic remains the default. */ }
  if (savedLanguage === 'en') setLanguage('en');
  updateGallery();
})();
