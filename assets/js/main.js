/**
 * Karachi Brasserie - Main Client Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCategoryPills();
  renderMenuItems('all');
  initSearch();
  initGalleryLightbox();
  initReservationForm();
});

/* ==========================================================================
   Navigation Bar & Scroll Handlers
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Active section indicator
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   Menu Category Filter & Rendering
   ========================================================================== */
let activeCategory = 'all';
let currentSearchQuery = '';

function initCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => {
    const count = cat.id === 'all' 
      ? MENU_ITEMS.length 
      : MENU_ITEMS.filter(item => item.category === cat.id).length;
    
    return `
      <button class="category-pill-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        <span>${cat.name}</span>
        <span class="pill-count">${count}</span>
      </button>
    `;
  }).join('');

  container.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      applyMenuFilters();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('menu-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    applyMenuFilters();
  });
}

function applyMenuFilters() {
  let filtered = MENU_ITEMS;

  if (activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === activeCategory);
  }

  if (currentSearchQuery) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(currentSearchQuery) ||
      (item.description && item.description.toLowerCase().includes(currentSearchQuery)) ||
      (item.subcategory && item.subcategory.toLowerCase().includes(currentSearchQuery))
    );
  }

  renderFilteredItems(filtered);
}

function renderMenuItems(category = 'all') {
  activeCategory = category;
  applyMenuFilters();
}

function renderFilteredItems(items) {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="menu-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; color: var(--accent-gold); display: block;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--coffee-dark); margin-bottom: 0.5rem;">No dishes found</h4>
        <p>Try searching for another dish, drink or switch categories.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => {
    const badgeHtml = item.badge 
      ? `<span class="menu-badge">${item.badge}</span>` 
      : `<span class="menu-category-tag">${item.subcategory || 'Karachi Brasserie'}</span>`;

    // High quality food image with graceful fallback placeholder
    const imagePath = item.image || `assets/images/dishes/${item.id}.jpg`;

    return `
      <div class="menu-card" data-id="${item.id}">
        <div class="menu-card-media">
          <img 
            src="${imagePath}" 
            alt="${item.name}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='assets/images/dishes/chicken-4.jpg';" 
          />
          ${item.isSignature ? '<span class="menu-signature-pill">Chef Signature</span>' : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-item-header">
            <h3 class="menu-item-name">${item.name}</h3>
            <span class="menu-item-price">Rs. ${item.price.toLocaleString()}</span>
          </div>
          <p class="menu-item-desc">${item.description || 'Prepared fresh with fine ingredients.'}</p>
          <div class="menu-card-footer">
            ${badgeHtml}
            <span class="menu-currency-label">PKR</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Restaurant Gallery & Interactive Lightbox
   ========================================================================== */
function initGalleryLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const imgElement = document.getElementById('lightbox-img');
  const captionElement = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!modal || !imgElement) return;

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      const subtitle = card.getAttribute('data-subtitle');

      imgElement.src = src;
      captionElement.textContent = `${title} — ${subtitle}`;
      modal.classList.add('active');
    });
  });

  const closeModal = () => modal.classList.remove('active');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Reservation Form & WhatsApp Bridge
   ========================================================================== */
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const modal = document.getElementById('reservation-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalDetails = document.getElementById('modal-booking-details');
  const whatsappBtn = document.getElementById('modal-whatsapp-btn');

  if (!form) return;

  // Set default minimum date to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const requests = document.getElementById('res-requests').value.trim();

    if (!name || !phone || !date || !time || !guests) {
      alert('Please fill out all required fields.');
      return;
    }

    // Populate Modal Summary
    modalDetails.innerHTML = `
      <strong>Guest Name:</strong> ${name}<br>
      <strong>Contact / WhatsApp:</strong> ${phone}<br>
      <strong>Date & Time:</strong> ${date} at ${time}<br>
      <strong>Party Size:</strong> ${guests} Guest(s)<br>
      ${requests ? `<strong>Special Request:</strong> ${requests}<br>` : ''}
      <hr style="margin: 0.6rem 0; border: none; border-top: 1px dashed var(--border-medium);">
      <span style="color: var(--accent-gold-dark); font-weight: 600;">Status: Pending instant WhatsApp / Phone confirmation</span>
    `;

    // Prepare WhatsApp Message
    const encodedMsg = encodeURIComponent(
      `Hello Karachi Brasserie! I would like to reserve a table:\n\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Date: ${date}\n` +
      `• Time: ${time}\n` +
      `• Guests: ${guests}\n` +
      (requests ? `• Notes: ${requests}\n` : '') +
      `\nPlease confirm availability. Thank you!`
    );

    // Official/Verified WhatsApp channel
    whatsappBtn.href = `https://wa.me/?text=${encodedMsg}`;

    modal.classList.add('active');
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      form.reset();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        form.reset();
      }
    });
  }
}
