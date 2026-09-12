(function () {
  var HERO_SELECTOR = '.hero h1, .hero .deck, .hero-ctas, .hero .trust-strip, .hero-panel, .page-header .eyebrow, .page-header h1, .page-header p';
  var REVEAL_SELECTOR = '.service-card, .segment, .demo-card, .contact-card, .stat-card, .phase, .cta-band, .section-head, table.pkg tbody tr';

  function showAllPlain() {
    document.querySelectorAll(HERO_SELECTOR + ',' + REVEAL_SELECTOR).forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
