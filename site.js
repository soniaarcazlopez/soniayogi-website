// soniayogi — shared interactions
(function () {
  // mobile nav toggle
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('.nav-toggle');
    if (toggle) {
      var links = document.querySelector('.nav-links');
      if (links) links.classList.toggle('open');
    }
  });

  // scroll reveal
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();

// GA4 lead tracking: calls, WhatsApp, email, Instagram, booking buttons
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || !window.gtag) return;
    var h = a.getAttribute('href'), ev = null, p = { link_url: h, page: location.pathname };
    if (h.indexOf('tel:') === 0) ev = 'click_to_call';
    else if (h.indexOf('wa.me') > -1 || h.indexOf('whatsapp') > -1) ev = 'whatsapp_click';
    else if (h.indexOf('mailto:') === 0) ev = 'email_click';
    else if (h.indexOf('instagram.com') > -1) ev = 'instagram_click';
    else if (h.indexOf('pay.html') > -1 || h.indexOf('monzo.me') > -1) { ev = 'booking_start'; p.booking = (h.split('for=')[1] || 'general').split('&')[0]; }
    if (ev) gtag('event', ev, p);
  });
})();
