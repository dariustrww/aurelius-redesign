/* ============================================================
   D Aurelius Group — shared site behaviour (loaded on every page)

   - Light / dark theme toggle (the no-flash *initial* theme is set by a
     tiny inline script in each page's <head>, so it runs before paint)
   - Scroll-reveal animation for elements with class="reveal"
   - Nav turns solid once the page is scrolled (homepage nav, id="navbar")
   - Mobile hamburger menu
   - Cleans the #hash from the URL after scrolling to a section

   Every element lookup is null-guarded, so this one file is safe on any page.
   ============================================================ */

// ── Theme toggle (light / dark) ─────────────────────────────────────────
document.querySelectorAll('.theme-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('aurelius-theme', next); } catch (e) { /* storage unavailable */ }
  });
});

// ── Scroll reveal ────────────────────────────────────────────────────────
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

// ── Nav: solid background once scrolled (homepage nav has id="navbar") ──
var navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── Mobile menu ──────────────────────────────────────────────────────────
var menuBtn = document.getElementById('mobileMenuBtn');
var overlay = document.getElementById('mobileOverlay');
if (menuBtn && overlay) {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });
}
// Called from the mobile-menu links' onclick attributes — must remain a global function.
function closeMobileMenu() {
  if (menuBtn) menuBtn.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Clean the #hash from the URL after scrolling to a section ───────────
function safeQuery(selector) {
  try { return document.querySelector(selector); } catch (e) { return null; }
}
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function () {
    if (safeQuery(link.getAttribute('href'))) {
      setTimeout(function () { history.replaceState(null, '', window.location.pathname); }, 800);
    }
  });
});
if (window.location.hash && safeQuery(window.location.hash)) {
  setTimeout(function () { history.replaceState(null, '', window.location.pathname); }, 1200);
}
