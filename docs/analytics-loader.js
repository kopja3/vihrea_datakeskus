(function () {
  const cfg = window.ANALYTICS_CONFIG || {};
  const code = String(cfg.goatcounterCode || '').trim();
  const allowLocal = Boolean(cfg.allowLocal);
  const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);

  if (!code) return;
  if (isLocal && !allowLocal) return;

  window.goatcounter = window.goatcounter || {};
  window.goatcounter.path = function () {
    const params = new URLSearchParams(window.location.search);
    const doc = params.get('doc');
    if (window.location.pathname.endsWith('/site-view.html') && doc) {
      return '/site-view/' + doc;
    }
    if (window.location.pathname.endsWith('/site-view-wide.html') && doc) {
      return '/site-view-wide/' + doc;
    }
    return window.location.pathname + window.location.search;
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = '//gc.zgo.at/count.js';
  script.dataset.goatcounter = 'https://' + code + '.goatcounter.com/count';
  document.head.appendChild(script);
})();
