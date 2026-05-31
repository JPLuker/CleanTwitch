function hideUnwanted() {
  // --- HOMEPAGE: hide the big featured carousel and all recommended shelves ---
  document.querySelectorAll([
    '[data-a-target="front-page-carousel"]',
    '[data-a-target="front-page-main-content"]',
    '[data-a-target="frontpage-headliner-layout"]',
    '[data-a-target="frontpage-headliner"]',
    '.front-page-carousel',
    '.featured-content-carousel__wrapper',
  ].join(',')).forEach(el => {
    el.style.setProperty('display', 'none', 'important');
  });

  // --- FOLLOWING PAGE: hide "Recommended channels" section in main content ---
  document.querySelectorAll('h2, h3').forEach(el => {
    if (el.textContent.trim() === 'Recommended channels') {
      let node = el;
      for (let i = 0; i < 8; i++) {
        node = node.parentElement;
        if (!node) break;
        if (node.tagName === 'SECTION' || node.tagName === 'ARTICLE' ||
            (node.tagName === 'DIV' && i > 2)) {
          node.style.setProperty('display', 'none', 'important');
          return;
        }
      }
    }
  });

  // --- SIDEBAR: hide "Live Channels" (non-followed) section ---
  document.querySelectorAll('[class*="side-nav"] p, [class*="side-nav"] span, [class*="side-nav"] h2, [class*="side-nav"] h3').forEach(el => {
    if (el.textContent.trim() === 'Live Channels') {
      let node = el;
      for (let i = 0; i < 6; i++) {
        node = node.parentElement;
        if (!node) break;
        if (node.className && node.className.includes('side-nav-section')) {
          node.style.setProperty('display', 'none', 'important');
          return;
        }
      }
      let fallback = el.parentElement?.parentElement?.parentElement?.parentElement;
      if (fallback) fallback.style.setProperty('display', 'none', 'important');
    }
  });
}

hideUnwanted();
document.addEventListener('DOMContentLoaded', hideUnwanted);
const observer = new MutationObserver(hideUnwanted);
observer.observe(document.documentElement, { childList: true, subtree: true });
