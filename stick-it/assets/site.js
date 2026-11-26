(() => {
  'use strict';
  const gallery = document.querySelector('#gallery');
  const previous = document.querySelector('#gallery-prev');
  const next = document.querySelector('#gallery-next');
  const status = document.querySelector('#gallery-status');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  const update = () => {
    const end = gallery.scrollWidth - gallery.clientWidth;
    previous.setAttribute('aria-disabled', String(gallery.scrollLeft <= 2));
    next.setAttribute('aria-disabled', String(gallery.scrollLeft >= end - 2));
    const bounds = gallery.getBoundingClientRect();
    const visible = [...gallery.children].map((item, index) => ({ rect: item.getBoundingClientRect(), index })).filter(({ rect }) => rect.right > bounds.left + 15 && rect.left < bounds.right - 15);
    if (visible.length) status.textContent = `Screenshots ${visible[0].index + 1}–${visible[visible.length - 1].index + 1} of ${gallery.children.length}`;
    scheduled = false;
  };
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
  const move = (direction) => {
    const button = direction < 0 ? previous : next;
    if (button.getAttribute('aria-disabled') === 'true') return;
    const step = gallery.children[0].getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).gap);
    gallery.scrollBy({ left: direction * step, behavior: motion.matches ? 'instant' : 'smooth' });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  gallery.addEventListener('scroll', schedule, { passive: true });
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
    if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); gallery.scrollTo({ left: event.key === 'Home' ? 0 : gallery.scrollWidth, behavior: motion.matches ? 'instant' : 'smooth' }); }
  });
  window.addEventListener('resize', schedule);
  update();

  const stage = document.querySelector('.video-stage');
  const loadLocalVideo = () => {
    const video = stage.querySelector('video');
    const load = () => { const source = video.querySelector('source'); source.src = source.dataset.src; video.load(); };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => { if (entries.some(entry => entry.isIntersecting)) { load(); observer.disconnect(); } }, { rootMargin: '300px' });
      observer.observe(video);
    } else load();
  };
  const youtube = stage.dataset.youtubeUrl;
  if (youtube) {
    try {
      const url = new URL(youtube);
      if (url.protocol !== 'https:' || !['www.youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname) || !/^\/embed\/[a-zA-Z0-9_-]+$/.test(url.pathname)) { loadLocalVideo(); return; }
      const button = document.createElement('button');
      button.className = 'video-load';
      button.type = 'button';
      button.textContent = 'Watch gameplay on YouTube';
      stage.replaceChildren(button);
      button.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.src = url.href;
        iframe.title = 'Stick It gameplay on YouTube';
        iframe.width = '540'; iframe.height = '1170';
        iframe.allow = 'fullscreen; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        stage.replaceChildren(iframe);
      });
    } catch { loadLocalVideo(); }
  } else {
    loadLocalVideo();
  }
})();
