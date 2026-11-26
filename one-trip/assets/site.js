'use strict';
const gallery = document.getElementById('screenshots');
const prev = document.getElementById('gallery-prev');
const next = document.getElementById('gallery-next');
const status = document.getElementById('gallery-status');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateGallery(announce = false) {
  const max = gallery.scrollWidth - gallery.clientWidth;
  prev.setAttribute('aria-disabled', String(gallery.scrollLeft <= 2));
  next.setAttribute('aria-disabled', String(gallery.scrollLeft >= max - 2));
  if (announce) {
    const step = gallery.firstElementChild.getBoundingClientRect().width + 20;
    const first = Math.round(gallery.scrollLeft / step) + 1;
    status.textContent = `Showing screenshots from ${first} of ${gallery.children.length}.`;
  }
}
function moveGallery(direction, control) {
  if (control.getAttribute('aria-disabled') === 'true') return;
  const step = gallery.firstElementChild.getBoundingClientRect().width + 20;
  const count = Math.max(1, Math.floor(gallery.clientWidth / step));
  gallery.scrollBy({left: direction * step * count, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
}
prev.addEventListener('click', () => moveGallery(-1, prev));
next.addEventListener('click', () => moveGallery(1, next));
gallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    moveGallery(event.key === 'ArrowRight' ? 1 : -1, event.key === 'ArrowRight' ? next : prev);
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    gallery.scrollTo({left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }
});
let scrollTimer;
gallery.addEventListener('scroll', () => {
  updateGallery();
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => updateGallery(true), 180);
}, {passive: true});
window.addEventListener('resize', () => updateGallery());
updateGallery();

const videoSlot = document.querySelector('[data-youtube-embed]');
if (videoSlot.dataset.youtubeEmbed) {
  let embed;
  try { embed = new URL(videoSlot.dataset.youtubeEmbed); } catch { embed = null; }
  if (embed && ['https://www.youtube-nocookie.com', 'https://www.youtube.com'].includes(embed.origin) && /^\/embed\/[A-Za-z0-9_-]+$/.test(embed.pathname)) {
    const load = document.createElement('button');
    load.type = 'button';
    load.className = 'youtube-load';
    const poster = document.createElement('img');
    poster.src = videoSlot.dataset.poster;
    poster.width = 540;
    poster.height = 960;
    poster.alt = '';
    const label = document.createElement('span');
    label.textContent = 'Play on YouTube';
    load.append(poster, label);
    load.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = embed.href;
      iframe.title = 'One Trip — Midnight Snacks gameplay';
      iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      videoSlot.replaceChildren(iframe);
      iframe.focus();
    });
    videoSlot.replaceChildren(load);
  }
}
