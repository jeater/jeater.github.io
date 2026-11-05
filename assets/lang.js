// Idioma de la página: ?lang=es|en (lo envía la app), luego la preferencia
// guardada y por último el idioma del navegador. Español o inglés.
(function () {
  var supported = ['es', 'en'];
  function pick() {
    var param = new URLSearchParams(location.search).get('lang');
    if (param) {
      var p = param.slice(0, 2).toLowerCase();
      // La app envía su idioma; los que no tienen versión propia van a inglés.
      return supported.indexOf(p) >= 0 ? p : 'en';
    }
    try {
      var saved = localStorage.getItem('lang');
      if (supported.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return nav === 'es' ? 'es' : 'en';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    var t = document.querySelector('meta[name="title-' + lang + '"]');
    if (t) document.title = t.content;
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.set === lang ? 'true' : 'false');
    });
  }

  apply(pick());

  document.addEventListener('DOMContentLoaded', function () {
    apply(document.documentElement.lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        try { localStorage.setItem('lang', b.dataset.set); } catch (e) {}
        apply(b.dataset.set);
      });
    });
  });
})();
