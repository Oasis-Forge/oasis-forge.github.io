(() => {
  'use strict';
  const gallery = document.getElementById('gallery');
  const previous = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateGallery = () => {
    previous.setAttribute('aria-disabled', String(gallery.scrollLeft <= 2));
    next.setAttribute('aria-disabled', String(gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2));
  };
  const moveGallery = (direction) => {
    const button = direction < 0 ? previous : next;
    if (button.getAttribute('aria-disabled') === 'true') return;
    const card = gallery.querySelector('figure');
    const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const count = Math.max(1, Math.floor(gallery.clientWidth / step));
    gallery.scrollBy({left: direction * step * count, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  };
  previous.addEventListener('click', () => moveGallery(-1));
  next.addEventListener('click', () => moveGallery(1));
  gallery.addEventListener('scroll', updateGallery, {passive: true});
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      moveGallery(event.key === 'ArrowRight' ? 1 : -1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      gallery.scrollTo({left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: 'instant'});
    }
  });
  window.addEventListener('resize', updateGallery);
  updateGallery();
  document.getElementById('year').textContent = new Date().getFullYear();

  // One-attribute video replacement; no YouTube request is made before a click.
  const slot = document.querySelector('[data-youtube-url]');
  const embed = slot.dataset.youtubeUrl.trim();
  if (embed) {
    let url;
    try { url = new URL(embed); } catch { return; }
    if (url.protocol !== 'https:' || !['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname) || !/^\/embed\/[\w-]+$/.test(url.pathname)) return;
    url.hostname = 'www.youtube-nocookie.com';
    url.search = '';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'youtube-load';
    const poster = document.createElement('img');
    poster.src = 'assets/gameplay-poster.jpg';
    poster.alt = '';
    poster.width = 540;
    poster.height = 1170;
    poster.loading = 'lazy';
    const label = document.createElement('span');
    label.textContent = 'Watch gameplay on YouTube';
    button.append(poster, label);
    button.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = url.href;
      iframe.title = 'Tide Trader gameplay on YouTube';
      iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      slot.replaceChildren(iframe);
      iframe.focus();
    }, {once: true});
    slot.replaceChildren(button);
    const caption = slot.closest('figure').querySelector('figcaption');
    caption.textContent = 'Gameplay · Plays on YouTube';
  }
})();
