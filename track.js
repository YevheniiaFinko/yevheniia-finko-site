// Vercel Web Analytics: custom event on every Zcal booking click.
// Custom events are recorded only on Vercel Pro; on Hobby the pageviews still work.
(function () {
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  document.addEventListener('click', function (e) {
    try {
      var a = e.target.closest && e.target.closest('a[href*="zcal.co"]');
      if (!a) return;
      var spot = a.id || (a.closest('header') ? 'header' : (a.closest('[id]') || {}).id) || 'page';
      window.va('event', {
        name: 'book_call_click',
        data: {
          page: location.pathname.replace(/^\//, '') || 'code.html',
          lang: new URLSearchParams(location.search).get('lang') === 'ua' ? 'ua' : 'en',
          spot: spot
        }
      });
    } catch (err) {}
  }, true);
})();
