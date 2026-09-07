/**
 * AuctusAI marketing site — interactions.
 *   1. Demo video loader — real <video controls> when a file exists at
 *      data-src, the slot's placeholder as the fallback when it does not
 *   2. Scroll-reveal for sections/cards
 *   3. Count-up for hero metrics
 *   4. Animated Watch→Detect→Act→Prove signal chain
 *   5. Nav scrolled state
 * All motion respects prefers-reduced-motion.
 */
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {

  /* -------- 1. Demo video auto-loader --------
     Wires a real player when a file exists at data-src; otherwise the slot's
     placeholder markup stays put as the fallback, so a slot whose clip has not
     been recorded yet keeps working exactly as it did.

     Playback is the browser's own <video controls>: a real scrubber, so a
     visitor can rewind and replay a demo instead of watching it go past once.
     We deliberately do NOT attach our own click-to-toggle — native controls
     already toggle on click, and a second handler would cancel them out. */

  /* A scrubber is only real if seeking works. Our host answers HTTP Range
     requests with a plain 200 and no Accept-Ranges (verified against the live
     site: `Range: bytes=0-999` returns the whole file), and Chrome then reports
     seekable = [0,0] — the scrubber is drawn, but every seek snaps back to 0.

     So: measure it, and only if the host really is not range-capable, pull the
     clip down once and hand the element a blob URL, which is always seekable.
     Where Range is honoured this costs nothing and does not run. The fetch is
     deferred until the slot is near the viewport, so a visitor who never
     scrolls to a demo never pays for it; clips are ~0.5-1.3 MB. */
  function ensureSeekable(slot, videoEl, src) {
    const seekableToEnd = () => {
      const d = videoEl.duration;
      if (!d || !isFinite(d) || !videoEl.seekable.length) return false;
      return videoEl.seekable.end(videoEl.seekable.length - 1) >= d - 0.5;
    };

    const swapInBlob = () => {
      fetch(src)
        .then((r) => (r.ok ? r.blob() : null))
        .then((blob) => {
          if (!blob || videoEl.dataset.blobbed) return;
          videoEl.dataset.blobbed = '1';
          const at = videoEl.currentTime;
          const wasPlaying = !videoEl.paused;
          const objectUrl = URL.createObjectURL(blob);
          videoEl.addEventListener('loadedmetadata', function restore() {
            videoEl.removeEventListener('loadedmetadata', restore);
            if (at > 0) videoEl.currentTime = at;
            if (wasPlaying) videoEl.play().catch(() => {});
          });
          videoEl.src = objectUrl;
          videoEl.load();
          window.addEventListener('pagehide', () => URL.revokeObjectURL(objectUrl), { once: true });
        })
        .catch(() => {});
    };

    videoEl.addEventListener('loadedmetadata', function check() {
      videoEl.removeEventListener('loadedmetadata', check);
      if (seekableToEnd()) return;                 // host handles Range — nothing to do
      if (!('IntersectionObserver' in window)) { swapInBlob(); return; }
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => { if (e.isIntersecting) { obs.disconnect(); swapInBlob(); } });
      }, { rootMargin: '400px' });
      io.observe(slot);
    });
  }

  document.querySelectorAll('.demo-slot[data-src]').forEach((slot) => {
    const src = slot.getAttribute('data-src');
    const videoEl = slot.querySelector('video');
    if (!src || !videoEl) return;
    fetch(src, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) return;
        videoEl.setAttribute('controls', '');       // scrub · rewind · replay
        videoEl.setAttribute('playsinline', '');
        ensureSeekable(slot, videoEl, src);         // must be armed before load()
        videoEl.src = src;
        videoEl.load();
        slot.classList.add('has-video');
        videoEl.addEventListener('play', () => slot.classList.add('is-playing'));
        videoEl.addEventListener('pause', () => slot.classList.remove('is-playing'));

        if (slot.dataset.cover) {
          // Cover mode (the captioned walkthroughs): poster frame first, play on
          // the visitor's click. Never autoplay, and never loop — these are
          // watched deliberately, and a loop would fight the scrubber.
          videoEl.removeAttribute('autoplay');
          videoEl.removeAttribute('loop');
          slot.classList.add('is-cover');
        } else if (!REDUCED) {
          // Ambient loop (the CTA teaser). Muted autoplay only; anyone who asked
          // for reduced motion gets the poster frame and the play button.
          videoEl.setAttribute('autoplay', '');
          videoEl.play().catch(() => {});
        }
      })
      .catch(() => {});
  });

  /* -------- 5. Nav scrolled state -------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------- 2. Scroll reveal (everything below the hero) -------- */
  const revealSel = [
    '.section-head', '.narrative-card', '.narrative-more', '.process-card',
    '.vertical-card', '.trust-card', '.playbook-row', '.cred-row',
    '.feature-list li', '.cta-panel', '.split .split-media',
    '.section .demo-slot', '.strip', '.post-card', '.post-cta'
  ].join(',');

  const revealEls = Array.from(document.querySelectorAll(revealSel))
    .filter((el) => !el.closest('.hero'));

  if (REDUCED || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    revealEls.forEach((el) => {
      el.classList.add('reveal');
      // gentle stagger within a shared parent
      const sibs = el.parentElement ? Array.from(el.parentElement.children) : [el];
      const i = Math.max(0, sibs.indexOf(el));
      el.style.transitionDelay = `${Math.min(i, 5) * 60}ms`;
    });
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  /* -------- 3. Count-up for hero metrics -------- */
  const counters = document.querySelectorAll('[data-count]');
  const runCount = (el) => {
    const to = parseFloat(el.dataset.to || '0');
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const pre = el.dataset.prefix || '';
    const suf = el.dataset.suffix || '';
    const fmt = (n) => pre + n.toLocaleString('en-US', {
      minimumFractionDigits: dec, maximumFractionDigits: dec
    }) + suf;
    if (REDUCED) { el.textContent = fmt(to); return; }
    const dur = 1100, t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(to);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    if (REDUCED || !('IntersectionObserver' in window)) {
      counters.forEach(runCount);
    } else {
      const cio = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { runCount(e.target); obs.unobserve(e.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach((el) => cio.observe(el));
    }
  }

  /* -------- 4. Animated signal chain (Watch→Detect→Act→Prove) -------- */
  const chain = document.getElementById('hero-chain');
  if (chain && !REDUCED) {
    const nodes = Array.from(chain.querySelectorAll('.chain-node'));
    let active = 1;
    setInterval(() => {
      nodes.forEach((n, i) => {
        n.classList.toggle('active', i === active);
        n.classList.toggle('done', i < active);
      });
      active = (active + 1) % (nodes.length + 1);
    }, 1600);
  }
});
