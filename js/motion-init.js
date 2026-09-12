(function () {
  var HERO_SELECTOR = '.hero h1, .hero .deck, .hero-ctas, .hero .trust-strip, .hero-panel, .page-header .eyebrow, .page-header h1, .page-header p';
  var REVEAL_SELECTOR = '.service-card, .segment, .demo-card, .contact-card, .stat-card, .phase, .cta-band, .section-head, table.pkg tbody tr';

  function revealHeadlines() {
    document.querySelectorAll('.aurora-headline').forEach(function (h) {
      h.classList.add('reveal-in');
    });
  }

  function showAllPlain() {
    document.querySelectorAll(HERO_SELECTOR + ',' + REVEAL_SELECTOR).forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    revealHeadlines();
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cursor-follow aurora glow runs independently of the CDN import — pure
  // local JS, so it still works even if the motion library never loads.
  var heroEl = document.getElementById('auroraHero');
  if (heroEl && !prefersReduced && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var glow = heroEl.querySelector('.aurora-cursor-glow');
    if (glow) {
      var targetX = 0, targetY = 0, curX = 0, curY = 0, raf = null;
      var loop = function () {
        curX += (targetX - curX) * 0.15;
        curY += (targetY - curY) * 0.15;
        glow.style.transform = 'translate(' + curX + 'px,' + curY + 'px)';
        raf = requestAnimationFrame(loop);
      };
      heroEl.addEventListener('mouseenter', function () {
        heroEl.classList.add('aurora-active');
        if (!raf) raf = requestAnimationFrame(loop);
      });
      heroEl.addEventListener('mouseleave', function () {
        heroEl.classList.remove('aurora-active');
      });
      heroEl.addEventListener('mousemove', function (e) {
        var r = heroEl.getBoundingClientRect();
        targetX = e.clientX - r.left;
        targetY = e.clientY - r.top;
      });
    }
  }

  if (prefersReduced) {
    showAllPlain();
    return;
  }

  import('https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm')
    .then(function (mod) {
      var animate = mod.animate;
      var inView = mod.inView;

      document.querySelectorAll(HERO_SELECTOR).forEach(function (el, i) {
        animate(
          el,
          { opacity: [0, 1], transform: ['translateY(14px)', 'translateY(0)'] },
          { duration: 0.6, delay: i * 0.07, easing: [0.16, 1, 0.3, 1] }
        );
      });
      revealHeadlines();

      document.querySelectorAll(REVEAL_SELECTOR).forEach(function (el) {
        inView(
          el,
          function () {
            animate(
              el,
              { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0)'] },
              { duration: 0.5, easing: [0.16, 1, 0.3, 1] }
            );
          },
          { margin: '0px 0px -10% 0px' }
        );
      });
    })
    .catch(function () {
      showAllPlain();
    });
})();
