(() => {
  const track = document.querySelector('#gallery-track');
  const previous = document.querySelector('[data-direction="previous"]');
  const next = document.querySelector('[data-direction="next"]');
  const status = document.querySelector('.gallery-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const frames = Array.from(track.querySelectorAll('figure'));
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    previous.setAttribute('aria-disabled', String(track.scrollLeft <= 2));
    next.setAttribute('aria-disabled', String(track.scrollLeft >= max - 2));
    const step = frames.length > 1 ? frames[1].offsetLeft - frames[0].offsetLeft : 1;
    const first = Math.min(frames.length, Math.round(track.scrollLeft / step) + 1);
    const last = Math.min(frames.length, Math.floor((track.scrollLeft + track.clientWidth + 2) / step));
    status.textContent = first === last || last < first ? `Screenshot ${first} of ${frames.length}` : `Screenshots ${first}–${last} of ${frames.length}`;
  };
  const move = (direction) => {
    const button = direction < 0 ? previous : next;
    if (button.getAttribute('aria-disabled') === 'true') return;
    const step = frames[1].offsetLeft - frames[0].offsetLeft;
    track.scrollBy({ left: direction * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      track.scrollTo({ left: event.key === 'Home' ? 0 : track.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
  });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  document.fonts.ready.then(update);
  update();

  const shell = document.querySelector('[data-youtube-embed]');
  const embed = shell.dataset.youtubeEmbed.trim();
  if (embed) {
    try {
      const url = new URL(embed);
      if (url.protocol !== 'https:' || !['www.youtube-nocookie.com', 'www.youtube.com'].includes(url.hostname) || !url.pathname.startsWith('/embed/')) return;
      const iframe = document.createElement('iframe');
      iframe.src = url.href;
      iframe.title = 'Dust Devil gameplay';
      iframe.loading = 'lazy';
      iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.width = '540';
      iframe.height = '960';
      shell.replaceChildren(iframe);
      document.querySelector('#video-description').textContent = 'Watch Dust Devil gameplay on YouTube.';
    } catch { /* Keep the local video when an invalid embed URL is supplied. */ }
  }
})();
