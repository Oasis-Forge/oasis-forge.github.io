'use strict';

const gallery = document.getElementById('gallery');
const previous = document.getElementById('gallery-prev');
const next = document.getElementById('gallery-next');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateGallery() {
  previous.setAttribute('aria-disabled', String(gallery.scrollLeft <= 2));
  next.setAttribute('aria-disabled', String(gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2));
}

function moveGallery(direction) {
  const control = direction < 0 ? previous : next;
  if (control.getAttribute('aria-disabled') === 'true') return;
  const item = gallery.querySelector('figure');
  const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
  gallery.scrollBy({ left: direction * (item.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}

previous.addEventListener('click', () => moveGallery(-1));
next.addEventListener('click', () => moveGallery(1));
gallery.addEventListener('scroll', updateGallery, { passive: true });
gallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveGallery(event.key === 'ArrowLeft' ? -1 : 1);
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    gallery.scrollTo({ left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
});
window.addEventListener('resize', updateGallery);
updateGallery();

// A populated attribute replaces the local player; no remote content loads until clicked.
const videoShell = document.querySelector('[data-youtube-embed]');
const embedValue = videoShell.getAttribute('data-youtube-embed').trim();
if (embedValue) {
  let embedUrl;
  try {
    const candidate = new URL(embedValue);
    if (candidate.protocol === 'https:' && ['www.youtube-nocookie.com', 'www.youtube.com'].includes(candidate.hostname) && /^\/embed\/[a-zA-Z0-9_-]+$/.test(candidate.pathname)) embedUrl = candidate;
  } catch { /* An invalid replacement keeps the local video available. */ }
  if (embedUrl) {
    const player = videoShell.querySelector('video');
    const button = document.createElement('button');
    button.className = 'embed-play';
    button.type = 'button';
    button.setAttribute('aria-label', 'Play the Sunday Roast heist on YouTube');
    const poster = document.createElement('img');
    poster.src = player.poster;
    poster.alt = '';
    poster.width = 1080;
    poster.height = 608;
    poster.loading = 'lazy';
    const label = document.createElement('span');
    const text = document.createElement('b');
    text.textContent = 'Play gameplay video';
    label.append(text);
    button.append(poster, label);
    videoShell.replaceChildren(button);
    button.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      embedUrl.searchParams.set('autoplay', '1');
      embedUrl.searchParams.set('playsinline', '1');
      iframe.src = embedUrl.href;
      iframe.title = 'Wasn\'t Me — Sunday Roast heist gameplay';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      videoShell.replaceChildren(iframe);
      iframe.focus();
    }, { once: true });
  }
}
