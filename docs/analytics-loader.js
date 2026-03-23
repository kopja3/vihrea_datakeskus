(function () {
  const cfg = window.ANALYTICS_CONFIG || {};
  const rawCode = String(cfg.goatcounterCode || '').trim();
  const siteCode = rawCode.split('/').filter(Boolean).pop() || rawCode;
  const allowLocal = Boolean(cfg.allowLocal);
  const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);

  if (!siteCode) return;
  if (isLocal && !allowLocal) return;

  window.GOATCOUNTER_SITE_CODE = siteCode;
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
  script.dataset.goatcounter = 'https://' + siteCode + '.goatcounter.com/count';
  document.head.appendChild(script);
})();
