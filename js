
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after click
      const navLinks = document.getElementById('nav-links');
      if (navLinks) navLinks.classList.remove('open');
    }
  });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
// Inline CSS for open state (keeps bundle tiny)
const css = document.createElement('style');
css.innerHTML = `#nav-links.open{display:flex;position:absolute;top:64px;left:0;right:0;background:#fff;border-bottom:1px solid #e5e7eb;gap:0;flex-direction:column}#nav-links.open a{padding:14px 24px;border-top:1px solid #f1f5f9}`;
document.head.appendChild(css);

// Pricing toggle (15% off annual, values precomputed)
const toggle = document.getElementById('priceToggle');
function updatePrices(annual){
  document.querySelectorAll('[data-monthly]').forEach(el=>{
    const monthly = parseFloat(el.getAttribute('data-monthly'));
    const annualPrice = parseFloat(el.getAttribute('data-annual'));
    el.textContent = annual ? `$${annualPrice}` : `$${monthly}`;
  });
}
if (toggle){
  let annual = false;
  toggle.addEventListener('click', ()=>{
    annual = !annual;
    toggle.classList.toggle('active', annual);
    updatePrices(annual);
  });
}

// Demo form handler (front-end only). Replace with your endpoint if desired.
const form = document.getElementById('demo-form');
const result = document.getElementById('form-result');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    result.hidden = false;
    result.className = 'form-result ok';
    result.textContent = 'Thanks! We received your request. We\'ll be in touch shortly.';
    // Example endpoint:
    // const formData = new FormData(form);
    // await fetch('https://formspree.io/f/yourid', { method: 'POST', body: formData });
  });
}
