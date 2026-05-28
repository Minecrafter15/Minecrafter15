/* ============================================================
   VTK Trible Trailer Inc. — main.js
   Lab 07: JS interactions for navigation, menu, filters
============================================================ */

/* ---- Page switcher ---- */
function showPage(pageId, linkEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('visible');

  // Sync active state across both navs
  document.querySelectorAll('.main-nav a, .mobile-menu a').forEach(a => a.classList.remove('active'));
  if (linkEl) {
    const text = linkEl.textContent.trim();
    document.querySelectorAll('.main-nav a, .mobile-menu a').forEach(a => {
      if (a.textContent.trim() === text) a.classList.add('active');
    });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---- Hamburger menu (Lab 07) ---- */
function toggleMenu() {
  const menu     = document.getElementById('mobile-menu');
  const overlay  = document.getElementById('menu-overlay');
  const burger   = document.getElementById('hamburger');
  const isOpen   = menu.classList.toggle('open');
  if (overlay)  overlay.classList.toggle('open', isOpen);
  if (burger)   burger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

/* ---- Truck garage filter (Lab 05) ---- */
function filterTrucks(btn, type) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.truck-card').forEach(card => {
    card.style.display = (type === 'all' || card.dataset.type === type) ? '' : 'none';
  });
}

/* ---- Services sidebar (Lab 05) ---- */
const serviceData = {
  ftl: {
    title: 'FTL — Full Truckload Transportation',
    tagline: 'Ideal for large loads from 15,000 to 45,000 kilograms',
    desc: 'FTL transportation provides a dedicated truck exclusively for your cargo. The trailer travels directly from pickup to delivery without intermediate stops, minimizing handling risk and transit time.',
    advantages: ['Direct delivery without reloading', 'Lower risk of damage', 'Fixed price per shipment', 'Faster transit times'],
    specs: [['Load capacity', 'up to 45,000 kg'], ['Volume', 'up to 70 m³'], ['Trailer length', '13.8 m / 15 m'], ['Routes', 'Germany, France, Poland & more'], ['Delivery time', '1–5 business days'], ['Tracking', 'GPS real-time']]
  },
  ltl: {
    title: 'LTL — Less-than-Truckload Transportation',
    tagline: 'Cost-effective groupage solution for smaller shipments',
    desc: 'LTL combines cargo from multiple clients into a single truck, reducing costs for each shipper. Ideal for shipments between 100 and 10,000 kg that do not require the full capacity of a truck.',
    advantages: ['Lower cost per kg', 'Flexible scheduling', 'Weekly departures', 'Full cargo insurance'],
    specs: [['Load capacity', '100 – 10,000 kg'], ['Volume', 'up to 33 m³'], ['Frequency', 'Weekly departures'], ['Routes', 'All EU countries'], ['Delivery time', '3–10 business days'], ['Tracking', 'Online portal']]
  },
  reefer: {
    title: 'Refrigerated Transportation',
    tagline: 'Temperature-controlled cargo from -25°C to +25°C',
    desc: 'Our reefer fleet ensures stable temperature throughout the journey. Suitable for food, pharmaceuticals, cosmetics and other temperature-sensitive goods with full ATP certification.',
    advantages: ['Stable temperature control', 'ATP-certified trailers', 'Temperature logging', 'HACCP compliance'],
    specs: [['Temperature range', '-25°C to +25°C'], ['Load capacity', 'up to 22,000 kg'], ['Trailer type', 'ATP-certified reefer'], ['Monitoring', 'Real-time temp log'], ['Delivery time', '1–6 business days'], ['Certification', 'ATP / FRC']]
  },
  flatbed: {
    title: 'Flatbed & Oversized Transportation',
    tagline: 'Heavy machinery, equipment, and oversized cargo',
    desc: 'Flatbed trailers are perfect for cargo that cannot be loaded through standard side or rear doors — construction machinery, industrial equipment, steel structures, and oversized items.',
    advantages: ['No height restrictions', 'Easy side/crane loading', 'Lashing certified', 'Pilot escort available'],
    specs: [['Load capacity', 'up to 48,000 kg'], ['Trailer types', 'Flatbed, Lowboy, Extendable'], ['Width', 'up to 3.0 m standard'], ['Oversized permits', 'All EU countries'], ['Delivery time', '2–7 business days'], ['Escort', 'Available on request']]
  },
  hazmat: {
    title: 'Dangerous Goods Transportation (Hazmat)',
    tagline: 'ADR-certified transport for all hazard classes',
    desc: 'We transport dangerous goods under full ADR compliance. All our Hazmat drivers hold ADR certificates. We handle classes 1–9 with proper documentation, placarding, and safety equipment.',
    advantages: ['ADR-certified drivers', 'All hazard classes 1–9', 'Full documentation support', 'Emergency response plan'],
    specs: [['ADR Classes', '1, 2, 3, 4, 5, 6, 7, 8, 9'], ['Certification', 'ADR 2023/2025'], ['Documentation', 'SDS, DGN included'], ['Equipment', 'ADR safety kit standard'], ['Permits', 'EU-wide'], ['Insurance', 'Hazmat-specific policy']]
  },
  cross: {
    title: 'Cross-Border & International Transportation',
    tagline: 'Seamless customs clearance across 48 countries',
    desc: 'Our cross-border expertise covers EU and non-EU countries. We handle T1/T2 transit documents, TIR carnets, phytosanitary certificates, EUR1, CMR and full customs brokerage services.',
    advantages: ['Customs brokerage included', 'TIR/T1/T2 documents', 'EUR.1 / CMR support', '48 countries covered'],
    specs: [['Coverage', '48 European countries'], ['Documents', 'CMR, TIR, EUR.1, T1/T2'], ['Customs', 'Full brokerage service'], ['Non-EU', 'Ukraine, UK, Turkey, CH'], ['Insurance', 'CMR liability covered'], ['Languages', 'EN, DE, PL, UK, RU']]
  }
};

function selectService(btn, id) {
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const d = serviceData[id];
  if (!d) return;

  document.getElementById('svc-title').textContent    = d.title;
  document.getElementById('svc-tagline').textContent  = d.tagline;
  document.getElementById('svc-desc').textContent     = d.desc;

  const advEl = document.getElementById('svc-advantages');
  advEl.innerHTML = d.advantages.map(a => `<li>${a}</li>`).join('');

  const specsEl = document.getElementById('svc-specs');
  specsEl.innerHTML = d.specs.map(([label, val]) =>
    `<div class="spec-row"><span class="spec-label">${label}:</span><span class="spec-val">${val}</span></div>`
  ).join('');
}

/* ---- Form submit handler ---- */
function handleFormSubmit(e) {
  e.preventDefault();
  alert('✅ Your request has been sent! We will respond within 2 hours.');
  e.target.reset();
}

/* ---- Sticky header shadow on scroll ---- */
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 10);
});
