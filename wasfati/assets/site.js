// Optional owner configuration. Leave empty to hide the video completely.
const YOUTUBE_EMBED_URL = '';

(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('#language-toggle');
  const gallery = document.querySelector('.gallery');
  const previous = document.querySelector('[data-previous]');
  const next = document.querySelector('[data-next]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const storageKey = 'wasfati-language';
  const textNodes = [...document.querySelectorAll('[data-en]')].map(node => ({ node, ar: node.textContent }));
  const attributes = ['alt', 'aria-label', 'src'].flatMap(attribute =>
    [...document.querySelectorAll(`[data-en-${attribute}]`)].map(node => ({ node, attribute, ar: node.getAttribute(attribute) }))
  );

  function updateGallery() {
    const position = Math.abs(gallery.scrollLeft);
    previous.disabled = position < 2;
    next.disabled = position >= gallery.scrollWidth - gallery.clientWidth - 2;
  }

  function setLanguage(language, remember = false) {
    const english = language === 'en';
    root.lang = language;
    root.dir = english ? 'ltr' : 'rtl';
    textNodes.forEach(({ node, ar }) => { node.textContent = english ? node.dataset.en : ar; });
    attributes.forEach(({ node, attribute, ar }) => {
      node.setAttribute(attribute, english ? node.getAttribute(`data-en-${attribute}`) : ar);
    });
    toggle.querySelector('span').textContent = english ? 'العربية' : 'English';
    toggle.lang = english ? 'ar' : 'en';
    toggle.setAttribute('aria-label', english ? 'التبديل إلى العربية' : 'Switch to English');
    document.title = english ? 'Wasfati — Your recipes, around one table · Oasis Forge' : 'وصفاتي — Wasfati · Oasis Forge';
    gallery.scrollTo({ left: 0, behavior: 'instant' });
    document.querySelector('.food-strip').scrollTo({ left: 0, behavior: 'instant' });
    if (remember) {
      try { localStorage.setItem(storageKey, language); } catch { /* Browsing with storage disabled still works. */ }
    }
    requestAnimationFrame(updateGallery);
    const videoButton = document.querySelector('#video-shell button');
    if (videoButton) videoButton.textContent = english ? 'Play on YouTube' : 'شاهد على YouTube';
    const frame = document.querySelector('#video-shell iframe');
    if (frame) frame.title = english ? 'Wasfati video' : 'فيديو وصفاتي';
  }

  let initial = 'ar';
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'en' || stored === 'ar') initial = stored;
  } catch { /* Default Arabic when storage is unavailable. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  if (requested === 'en' || requested === 'ar') initial = requested;
  setLanguage(initial, requested === 'en' || requested === 'ar');
  toggle.hidden = false;
  root.classList.add('js');

  toggle.addEventListener('click', () => {
    const language = root.lang === 'ar' ? 'en' : 'ar';
    setLanguage(language, true);
    // Keep an explicit language URL in sync, so reloading honours the new choice.
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', language);
      try { history.replaceState(null, '', url); } catch { /* Also works from local files. */ }
    }
  });

  const step = () => gallery.querySelector('figure').getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).gap);
  const move = distance => gallery.scrollBy({ left: distance, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  const direction = () => root.dir === 'rtl' ? -1 : 1;
  previous.addEventListener('click', () => move(-direction() * step()));
  next.addEventListener('click', () => move(direction() * step()));
  gallery.addEventListener('scroll', updateGallery, { passive: true });
  gallery.addEventListener('keydown', event => {
    if (event.target !== gallery) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move((event.key === 'ArrowLeft' ? -1 : 1) * step());
    }
  });
  new ResizeObserver(updateGallery).observe(gallery);

  // Food is a manually scrollable strip: no automatic motion or duplicate content.
  // Load the optional player only after a visitor explicitly clicks.
  if (YOUTUBE_EMBED_URL.trim()) {
    try {
      const url = new URL(YOUTUBE_EMBED_URL);
      if (url.protocol === 'https:' && ['www.youtube-nocookie.com', 'www.youtube.com'].includes(url.hostname) && /^\/embed\/[\w-]+\/?$/.test(url.pathname)) {
        document.querySelector('#video-section').hidden = false;
        const shell = document.querySelector('#video-shell');
        const play = document.createElement('button');
        play.type = 'button';
        play.textContent = root.lang === 'en' ? 'Play on YouTube' : 'شاهد على YouTube';
        shell.append(play);
        play.addEventListener('click', () => {
          url.searchParams.set('autoplay', '0');
          url.searchParams.set('playsinline', '1');
          const frame = document.createElement('iframe');
          frame.src = url.href;
          frame.title = root.lang === 'en' ? 'Wasfati video' : 'فيديو وصفاتي';
          frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
          frame.allowFullscreen = true;
          frame.referrerPolicy = 'strict-origin-when-cross-origin';
          shell.replaceChildren(frame);
          frame.focus();
        }, { once: true });
      }
    } catch { /* Invalid owner configuration leaves the section hidden. */ }
  }
})();
