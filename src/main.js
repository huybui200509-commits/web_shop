// ===== MAIN.JS - Huy Hoàng Store SPA =====
import './styles/index.css';
import router from './router.js';
import store from './store.js';
import t from './i18n.js';
import { formatPrice, calcDiscount, generateStarsWithCount, formatDate } from './utils/format.js';
import { initScrollReveal, initBackToTop, initStickyHeader, showToast, lazyLoadImages } from './utils/animate.js';
import { products, categories, blogs, banners, getProductById, getProductsByCategory, filterProducts, getSaleProducts, getHotProducts, getNewProducts, getBestSellers, getRelatedProducts, getCategoryBrands, searchProducts } from './data/data.js';

// ===== GLOBAL TIMER MANAGEMENT =====
let countdownIntervalId = null;

function clearCountdownTimer() {
  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
    countdownIntervalId = null;
  }
}

// ====================================
//  HEADER COMPONENT
// ====================================
function renderHeader() {
  const cartCount = store.getCartCount();
  const wishCount = store.getWishlist().length;
  const user = store.getUser();
  const lang = store.getLanguage();
  const theme = store.getTheme();

  document.getElementById('header').innerHTML = `
    <div class="site-header">
      <div class="header-inner">
        <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>

        <a href="#/" class="logo">
          <div class="logo-icon">HH</div>
          <div class="logo-text">Huy Hoàng <span class="highlight">Store</span></div>
        </a>

        <nav class="nav-menu">
          <div class="nav-item">
            <a href="#/" class="nav-link">${t('home')}</a>
          </div>
          <div class="nav-item">
            <a href="#/categories" class="nav-link">
              ${t('categories')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="mega-menu">
              ${categories.map(cat => `
                <a href="#/category/${cat.id}" class="mega-menu-item">
                  <span class="icon">${cat.icon}</span>
                  <div>
                    <div class="label">${lang === 'vi' ? cat.name : cat.nameEn}</div>
                    <div class="sublabel">${cat.count} ${t('items')}</div>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>
          <div class="nav-item">
            <a href="#/flash-sale" class="nav-link" style="color:var(--sale)">⚡ ${t('flashSale')}</a>
          </div>
          <div class="nav-item">
            <a href="#/pc-builder" class="nav-link">${t('pcBuilder')}</a>
          </div>
          <div class="nav-item">
            <a href="#/blog" class="nav-link">${t('blog')}</a>
          </div>
        </nav>

        <div class="header-search">
          <button class="header-search-btn" id="open-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>${t('search')}</span>
            <span class="shortcut">Ctrl+K</span>
          </button>
        </div>

        <div class="header-actions">
          <button class="toggle-btn" id="theme-toggle" data-tooltip="${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}">
            ${theme === 'dark'
              ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
            }
          </button>
          <button class="toggle-btn" id="lang-toggle">
            <span class="label-text">${lang.toUpperCase()}</span>
          </button>
          <a href="#/wishlist" class="header-action-btn" data-tooltip="${t('wishlist')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            ${wishCount > 0 ? `<span class="badge-count">${wishCount}</span>` : ''}
          </a>
          <button class="header-action-btn" id="open-cart" data-tooltip="${t('cart')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            ${cartCount > 0 ? `<span class="badge-count">${cartCount}</span>` : ''}
          </button>
          <a href="${user ? '#/account' : '#/login'}" class="header-action-btn" data-tooltip="${user ? t('account') : t('login')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>
        </div>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav">
      <a href="#/" class="nav-link">${t('home')}</a>
      ${categories.slice(0, 8).map(cat => `<a href="#/category/${cat.id}" class="nav-link">${cat.icon} ${lang === 'vi' ? cat.name : cat.nameEn}</a>`).join('')}
      <a href="#/flash-sale" class="nav-link" style="color:var(--sale)">⚡ ${t('flashSale')}</a>
      <a href="#/pc-builder" class="nav-link">🖥️ ${t('pcBuilder')}</a>
      <a href="#/blog" class="nav-link">📝 ${t('blog')}</a>
      <a href="#/about" class="nav-link">${t('about')}</a>
      <a href="#/contact" class="nav-link">${t('contact')}</a>
    </nav>
  `;

  // Event listeners
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    store.toggleTheme();
    renderHeader();
  });

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    store.toggleLanguage();
    renderHeader();
    router.handleRoute(); // Re-render current page
  });

  document.getElementById('open-search')?.addEventListener('click', openSearchModal);
  document.getElementById('open-cart')?.addEventListener('click', openCartDrawer);

  document.getElementById('mobile-toggle')?.addEventListener('click', () => {
    const btn = document.getElementById('mobile-toggle');
    const nav = document.getElementById('mobile-nav');
    btn.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-toggle')?.classList.remove('active');
      document.getElementById('mobile-nav')?.classList.remove('active');
    });
  });

  // NOTE: Keyboard shortcut is registered once in initApp(), not here
  // to prevent duplicate listeners on every renderHeader() call
}

// ====================================
//  FOOTER COMPONENT
// ====================================
function renderFooter() {
  const lang = store.getLanguage();
  document.getElementById('footer').innerHTML = `
    <div class="site-footer">
      <div class="footer-main">
        <div class="footer-brand">
          <a href="#/" class="logo">
            <div class="logo-icon">HH</div>
            <div class="logo-text">Huy Hoàng <span class="highlight">Store</span></div>
          </a>
          <p class="description">Gear Chuẩn – Giá Đỉnh – Phục Vụ Tận Tâm. ${lang === 'vi' ? 'Chuyên cung cấp bàn phím cơ, chuột gaming, linh kiện PC & Laptop chính hãng.' : 'Specialized in mechanical keyboards, gaming mice, PC & Laptop components.'}</p>
          <div class="footer-social">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://zalo.me/0966246346" target="_blank" aria-label="Zalo">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </a>
            <a href="mailto:huybui259@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>${t('categories')}</h4>
          <ul>
            ${categories.slice(0, 8).map(cat => `<li><a href="#/category/${cat.id}">${lang === 'vi' ? cat.name : cat.nameEn}</a></li>`).join('')}
          </ul>
        </div>

        <div class="footer-col">
          <h4>${t('customerService')}</h4>
          <ul>
            <li><a href="#/about">${t('aboutUs')}</a></li>
            <li><a href="#/contact">${t('contact')}</a></li>
            <li><a href="#/blog">${t('blog')}</a></li>
            <li><a href="#/pc-builder">${t('pcBuilder')}</a></li>
            <li><a href="#">${t('shippingPolicy')}</a></li>
            <li><a href="#">${t('returnPolicy')}</a></li>
            <li><a href="#">${t('privacyPolicy')}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>${t('contact')}</h4>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <div class="label">${t('address')}</div>
              <div class="value">222 Nguyễn Tĩnh, Hạc Thành, Thanh Hóa</div>
            </div>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div>
              <div class="label">Hotline / Zalo</div>
              <div class="value">0966 246 346</div>
            </div>
          </div>
          <div class="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div>
              <div class="label">${t('workingHours')}</div>
              <div class="value">24/7</div>
            </div>
          </div>
          <div class="footer-payments">
            <h4>${t('paymentMethods')}</h4>
            <div class="payment-icons">
              <span class="payment-icon">💳 Bank</span>
              <span class="payment-icon">📦 COD</span>
              <span class="payment-icon">📱 Momo</span>
              <span class="payment-icon">💰 ZaloPay</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">© 2024 Huy Hoàng Store. ${t('allRightsReserved')} <span class="heart">❤️</span> Huy Hoàng</div>
        <div class="footer-bottom-links">
          <a href="#">${t('privacyPolicy')}</a>
          <a href="#">${t('returnPolicy')}</a>
        </div>
      </div>
    </div>
  `;
}

// ====================================
//  SEARCH MODAL
// ====================================
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  modal.innerHTML = `
    <div class="search-modal active">
      <div class="overlay active" id="search-overlay"></div>
      <div class="search-modal-content">
        <div class="search-input-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="search-input" placeholder="${t('searchPlaceholder')}" autofocus />
          <button onclick="document.getElementById('search-modal').innerHTML=''" style="color:var(--text-muted);cursor:pointer">✕</button>
        </div>
        <div class="search-results" id="search-results"></div>
        <div class="search-suggestions">
          <h4>${store.getLanguage() === 'vi' ? 'Tìm kiếm phổ biến' : 'Popular searches'}</h4>
          <div class="search-tags">
            ${['Keychron', 'RTX 4060', 'Chuột gaming', 'RAM DDR5', 'SSD 1TB', 'Akko'].map(tag => `<span class="tag" onclick="document.getElementById('search-input').value='${tag}';document.getElementById('search-input').dispatchEvent(new Event('input'))">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('search-overlay')?.addEventListener('click', closeSearchModal);
  document.getElementById('search-input')?.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    const resultsDiv = document.getElementById('search-results');
    if (query.length < 2) { resultsDiv.innerHTML = ''; return; }

    const results = searchProducts(query).slice(0, 8);
    resultsDiv.innerHTML = results.length === 0
      ? `<div class="empty-state" style="padding:var(--space-8)"><p>${t('noResults')}</p></div>`
      : results.map(p => `
        <a href="#/product/${p.id}" class="search-result-item" onclick="document.getElementById('search-modal').innerHTML=''">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <div class="search-result-info">
            <div class="name">${p.name}</div>
            <div class="category">${p.brand} • ${categories.find(c => c.id === p.category)?.name || p.category}</div>
            <div class="price">${formatPrice(p.salePrice || p.price)}</div>
          </div>
        </a>
      `).join('');
  });

  setTimeout(() => document.getElementById('search-input')?.focus(), 100);
}

function closeSearchModal() {
  document.getElementById('search-modal').innerHTML = '';
}

// ====================================
//  CART DRAWER
// ====================================
function openCartDrawer() {
  renderCartDrawer(true);
}

function closeCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  if (drawer) drawer.classList.remove('active');
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.classList.remove('active');
  setTimeout(() => { document.getElementById('cart-drawer-container').innerHTML = ''; }, 300);
}

function renderCartDrawer(open = false) {
  const cart = store.getCart();
  const container = document.getElementById('cart-drawer-container');

  container.innerHTML = `
    <div class="overlay ${open ? 'active' : ''}" id="cart-overlay"></div>
    <div class="cart-drawer ${open ? 'active' : ''}">
      <div class="cart-drawer-header">
        <h3>🛒 ${t('yourCart')} (${store.getCartCount()})</h3>
        <button onclick="window.__closeCart()" class="btn-icon" style="color:var(--text-muted)">✕</button>
      </div>
      <div class="cart-drawer-items">
        ${cart.length === 0 ? `
          <div class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <h3>${t('cartEmpty')}</h3>
            <p>${t('cartEmptyDesc')}</p>
            <a href="#/" class="btn btn-primary" onclick="window.__closeCart()">${t('continueShopping')}</a>
          </div>
        ` : cart.map(item => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
              <div class="cart-item-bottom">
                <div class="cart-item-price">${formatPrice((item.salePrice || item.price) * item.quantity)}</div>
                <div class="qty-selector">
                  <button onclick="window.__updateCartQty('${item.cartId}', ${item.quantity - 1})">−</button>
                  <input type="number" value="${item.quantity}" min="1" readonly />
                  <button onclick="window.__updateCartQty('${item.cartId}', ${item.quantity + 1})">+</button>
                </div>
                <button class="cart-item-remove" onclick="window.__removeCartItem('${item.cartId}')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      ${cart.length > 0 ? `
        <div class="cart-drawer-footer">
          <div class="cart-total-row">
            <span class="cart-total-label">${t('total')}</span>
            <span class="cart-total-value">${formatPrice(store.getCartTotal())}</span>
          </div>
          <a href="#/cart" class="btn btn-secondary btn-full" onclick="window.__closeCart()">${t('cart')}</a>
          <a href="#/checkout" class="btn btn-primary btn-full" onclick="window.__closeCart()" style="margin-top:8px">${t('checkout')}</a>
        </div>
      ` : ''}
    </div>
  `;

  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);
}

// Global cart functions
window.__closeCart = closeCartDrawer;
window.__updateCartQty = (cartId, qty) => { store.updateCartQuantity(cartId, qty); renderCartDrawer(true); renderHeader(); };
window.__removeCartItem = (cartId) => { store.removeFromCart(cartId); renderCartDrawer(true); renderHeader(); showToast(t('success'), 'success'); };

// ====================================
//  PRODUCT CARD COMPONENT
// ====================================
function productCard(p) {
  const lang = store.getLanguage();
  const discount = calcDiscount(p.price, p.salePrice);
  const inWishlist = store.isInWishlist(p.id);

  // Extract layout info from specs if available
  const layoutInfo = p.specs?.['Layout'] || '';
  const layoutShort = layoutInfo.match(/(\d+%)/)?.[1] || '';
  const connectionInfo = p.specs?.['Kết nối'] || p.specs?.['Connectivity'] || '';
  const isWireless = connectionInfo.toLowerCase().includes('bluetooth') || connectionInfo.toLowerCase().includes('2.4g') || connectionInfo.toLowerCase().includes('wireless');

  // Badge text
  const badgeNewText = lang === 'vi' ? 'MỚI' : 'NEW';
  const badgeHotText = lang === 'vi' ? 'BÁN CHẠY' : 'HOT';
  const viewDetailText = lang === 'vi' ? 'Xem Chi Tiết' : 'View Details';
  const addCartText = lang === 'vi' ? 'Thêm Vào Giỏ' : 'Add to Cart';
  const outOfStockText = lang === 'vi' ? 'Hết hàng' : 'Sold Out';

  return `
    <div class="product-card ${p.stock <= 0 ? 'out-of-stock' : ''}" data-id="${p.id}">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-card-badges">
          ${discount > 0 ? `<span class="badge badge-sale">-${discount}%</span>` : ''}
          ${p.badge === 'new' ? `<span class="badge badge-new">${badgeNewText}</span>` : ''}
          ${p.badge === 'hot' || p.sold > 200 ? `<span class="badge badge-hot">${badgeHotText}</span>` : ''}
          ${p.stock <= 0 ? `<span class="badge badge-soldout">${outOfStockText}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <button class="product-card-action" onclick="event.preventDefault();event.stopPropagation();window.__toggleWishlist(${p.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? 'var(--sale)' : 'none'}" stroke="${inWishlist ? 'var(--sale)' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="product-card-action" onclick="event.preventDefault();event.stopPropagation();window.__toggleCompare(${p.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          </button>
        </div>
        <div class="product-card-overlay">
          <a href="#/product/${p.id}" class="overlay-btn overlay-btn-detail">${viewDetailText}</a>
          <button class="overlay-btn overlay-btn-cart" onclick="event.preventDefault();event.stopPropagation();window.__addToCart(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>${p.stock <= 0 ? outOfStockText : addCartText}</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${p.brand}</div>
        <div class="product-card-name"><a href="#/product/${p.id}">${p.name}</a></div>
        ${layoutShort || isWireless ? `
          <div class="product-card-tags">
            ${layoutShort ? `<span class="product-card-tag">${layoutShort}</span>` : ''}
            ${isWireless ? `<span class="product-card-tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg></span>` : `<span class="product-card-tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"/><line x1="7" y1="12" x2="7.01" y2="12"/></svg></span>`}
          </div>
        ` : ''}
        <div class="product-card-rating">${generateStarsWithCount(p.rating, p.reviewCount)}</div>
        <div class="product-card-price">
          <span class="current ${!p.salePrice ? 'no-sale' : ''}">${formatPrice(p.salePrice || p.price)}</span>
          ${p.salePrice ? `<span class="original">${formatPrice(p.price)}</span>` : ''}
        </div>
        <button class="btn-add-cart" onclick="window.__addToCart(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          ${p.stock <= 0 ? outOfStockText : addCartText}
        </button>
      </div>
    </div>
  `;
}

// Global product actions
window.__addToCart = (id) => {
  const p = getProductById(id);
  if (p) {
    store.addToCart(p);
    renderHeader();
    showToast(`${p.name} đã thêm vào giỏ hàng!`, 'success');
  }
};

window.__toggleWishlist = (id) => {
  const added = store.toggleWishlist(id);
  renderHeader();
  const p = getProductById(id);
  showToast(added ? `Đã thêm ${p?.name} vào yêu thích` : 'Đã xóa khỏi yêu thích', added ? 'success' : 'info');
  // Update wishlist icons in-place without full page re-render
  document.querySelectorAll(`.product-card[data-id="${id}"] .product-card-action:first-child svg`).forEach(svg => {
    svg.setAttribute('fill', added ? 'var(--sale)' : 'none');
    svg.setAttribute('stroke', added ? 'var(--sale)' : 'currentColor');
  });
};

window.__toggleCompare = (id) => {
  const result = store.toggleCompare(id);
  if (!result) {
    showToast('Tối đa 4 sản phẩm so sánh!', 'warning');
  } else {
    showToast('Đã cập nhật danh sách so sánh', 'info');
  }
};

// ====================================
//  HOME PAGE
// ====================================
function renderHomePage() {
  const lang = store.getLanguage();
  const saleProducts = getSaleProducts(8);
  const newProds = getNewProducts(8);
  const bestSelling = getBestSellers(8);

  document.getElementById('main-content').innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1600&h=900&fit=crop" alt="Huy Hoàng Store" />
      </div>
      <div class="hero-content">
        <div class="hero-badge reveal">✨ ${lang === 'vi' ? 'Chào mừng đến Huy Hoàng Store' : 'Welcome to Huy Hoàng Store'}</div>
        <h1 class="hero-title reveal">${t('heroTitle')} <span class="gold">${t('heroTitleSub')}</span></h1>
        <p class="hero-subtitle reveal">${t('heroSubtitle')}</p>
        <div class="hero-actions reveal">
          <a href="#/categories" class="btn btn-primary btn-lg">${t('shopNow')} →</a>
          <a href="#/pc-builder" class="btn btn-secondary btn-lg">${t('pcBuilder')}</a>
        </div>
        <div class="hero-stats reveal">
          <div><div class="hero-stat-value">500+</div><div class="hero-stat-label">${t('items')}</div></div>
          <div><div class="hero-stat-value">50+</div><div class="hero-stat-label">${lang === 'vi' ? 'Thương hiệu' : 'Brands'}</div></div>
          <div><div class="hero-stat-value">10K+</div><div class="hero-stat-label">${lang === 'vi' ? 'Khách hàng' : 'Customers'}</div></div>
          <div><div class="hero-stat-value">24/7</div><div class="hero-stat-label">${lang === 'vi' ? 'Hỗ trợ' : 'Support'}</div></div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="section container">
      <div class="section-header reveal">
        <h2>${t('featuredCategories')}</h2>
        <a href="#/categories" class="view-all">${t('viewAll')} →</a>
      </div>
      <div class="category-grid stagger-children">
        ${categories.map(cat => `
          <a href="#/category/${cat.id}" class="category-card">
            <span class="icon">${cat.icon}</span>
            <span class="name">${lang === 'vi' ? cat.name : cat.nameEn}</span>
            <span class="count">${getProductsByCategory(cat.id).length} ${t('items')}</span>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- FLASH SALE -->
    <section class="section container">
      <div class="flash-sale-header reveal">
        <h2 class="flash-sale-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="var(--sale)" stroke="var(--sale)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          ${t('flashSaleTitle')}
        </h2>
        <div class="countdown" id="countdown">
          <div class="countdown-item"><span class="countdown-value" id="cd-h">00</span><span class="countdown-label">${lang === 'vi' ? 'Giờ' : 'Hours'}</span></div>
          <div class="countdown-item"><span class="countdown-value" id="cd-m">00</span><span class="countdown-label">${lang === 'vi' ? 'Phút' : 'Min'}</span></div>
          <div class="countdown-item"><span class="countdown-value" id="cd-s">00</span><span class="countdown-label">${lang === 'vi' ? 'Giây' : 'Sec'}</span></div>
        </div>
        <a href="#/flash-sale" class="btn btn-secondary btn-sm">${t('viewAll')} →</a>
      </div>
      <div class="product-grid stagger-children">
        ${saleProducts.slice(0, 4).map(p => productCard(p)).join('')}
      </div>
    </section>

    <!-- NEW ARRIVALS -->
    <section class="section container">
      <div class="section-header reveal">
        <h2>${t('newArrivals')}</h2>
        <a href="#/categories" class="view-all">${t('viewAll')} →</a>
      </div>
      <div class="product-grid stagger-children">
        ${newProds.slice(0, 8).map(p => productCard(p)).join('')}
      </div>
    </section>

    <!-- BRANDS -->
    <section class="section container">
      <div class="section-header reveal">
        <h2>${t('topBrands')}</h2>
      </div>
      <div class="brands-slider reveal">
        ${['Razer', 'Corsair', 'Logitech', 'Keychron', 'Akko', 'Samsung', 'ASUS', 'MSI', 'Intel', 'AMD', 'Noctua', 'G.Skill', 'Kingston', 'Ducky', 'SteelSeries'].map(b => `<div class="brand-item">${b}</div>`).join('')}
      </div>
    </section>

    <!-- BEST SELLERS -->
    <section class="section container">
      <div class="section-header reveal">
        <h2>${t('bestSellers')}</h2>
        <a href="#/categories" class="view-all">${t('viewAll')} →</a>
      </div>
      <div class="product-grid stagger-children">
        ${bestSelling.slice(0, 4).map(p => productCard(p)).join('')}
      </div>
    </section>

    <!-- BLOG -->
    <section class="section container">
      <div class="section-header reveal">
        <h2>${t('latestBlog')}</h2>
        <a href="#/blog" class="view-all">${t('viewAll')} →</a>
      </div>
      <div class="blog-grid stagger-children">
        ${blogs.slice(0, 3).map(b => `
          <a href="#/blog/${b.slug}" class="blog-card">
            <div class="blog-card-image"><img src="${b.image}" alt="${b.title}" loading="lazy" /></div>
            <div class="blog-card-body">
              <div class="blog-card-category">${b.category}</div>
              <h3 class="blog-card-title">${lang === 'vi' ? b.title : b.titleEn}</h3>
              <p class="blog-card-excerpt">${lang === 'vi' ? b.excerpt : b.excerptEn}</p>
              <div class="blog-card-meta"><span>${b.author}</span><span>•</span><span>${formatDate(b.date)}</span><span>•</span><span>${b.readTime}</span></div>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- COMMITMENTS -->
    <section class="section container">
      <div class="commitments stagger-children reveal">
        <div class="commitment-card">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h3>${t('genuine')}</h3>
          <p>${t('genuineDesc')}</p>
        </div>
        <div class="commitment-card">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
          <h3>${t('fastDelivery')}</h3>
          <p>${t('fastDeliveryDesc')}</p>
        </div>
        <div class="commitment-card">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
          <h3>${t('warranty')}</h3>
          <p>${t('warrantyDesc')}</p>
        </div>
        <div class="commitment-card">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h3>${t('support247')}</h3>
          <p>${t('support247Desc')}</p>
        </div>
      </div>
    </section>
  `;

  // Countdown timer
  startCountdownTimer();
  initScrollReveal();
}

function startCountdownTimer() {
  // Clear any previous interval to prevent memory leaks
  clearCountdownTimer();

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  // Run immediately once, then set interval
  function updateCountdown() {
    const now = new Date();
    const diff = endOfDay - now;
    if (diff <= 0) { clearCountdownTimer(); return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const hEl = document.getElementById('cd-h');
    const mEl = document.getElementById('cd-m');
    const sEl = document.getElementById('cd-s');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }

  updateCountdown();
  countdownIntervalId = setInterval(updateCountdown, 1000);
}

// ====================================
//  CATEGORY PAGE
// ====================================
function renderCategoryPage(params, query) {
  const lang = store.getLanguage();
  const categoryId = params.slug;
  const category = categories.find(c => c.id === categoryId);
  const categoryBrands = getCategoryBrands(categoryId);
  const sort = query.sort || 'newest';
  const brand = query.brand || '';

  let filtered = filterProducts({ category: categoryId, brand: brand || undefined, sort });
  const catName = category ? (lang === 'vi' ? category.name : category.nameEn) : t('categories');

  document.getElementById('main-content').innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">${t('home')}</a><span class="separator">›</span>
        <span class="current">${catName}</span>
      </div>
      <div class="category-page-header">
        <h1>${category ? category.icon + ' ' : ''}${catName}</h1>
        <p class="result-count">${filtered.length} ${t('results')}</p>
      </div>
      <div class="page-layout">
        <aside class="sidebar">
          <div class="filter-sidebar">
            <div class="filter-section">
              <h3>${t('brand')}</h3>
              <div class="filter-options">
                <label class="filter-option"><input type="radio" name="brand" value="" ${!brand ? 'checked' : ''} onchange="window.location.hash='/category/${categoryId}?sort=${sort}'" /> ${t('allBrands')}</label>
                ${categoryBrands.map(b => `<label class="filter-option"><input type="radio" name="brand" value="${b}" ${brand === b ? 'checked' : ''} onchange="window.location.hash='/category/${categoryId}?brand=${b}&sort=${sort}'" /> ${b}</label>`).join('')}
              </div>
            </div>
          </div>
        </aside>
        <div>
          <div class="toolbar">
            <div class="toolbar-left">
              <span style="font-size:var(--text-sm);color:var(--text-secondary)">${t('sortBy')}:</span>
              <select class="input" style="width:auto;padding:var(--space-2) var(--space-3)" onchange="window.location.hash='/category/${categoryId}?brand=${brand}&sort='+this.value">
                <option value="newest" ${sort === 'newest' ? 'selected' : ''}>${t('newest')}</option>
                <option value="price-asc" ${sort === 'price-asc' ? 'selected' : ''}>${t('priceAsc')}</option>
                <option value="price-desc" ${sort === 'price-desc' ? 'selected' : ''}>${t('priceDesc')}</option>
                <option value="best-selling" ${sort === 'best-selling' ? 'selected' : ''}>${t('bestSelling')}</option>
              </select>
            </div>
          </div>
          <div class="product-grid">
            ${filtered.length === 0 ? `<div class="empty-state" style="grid-column:1/-1"><h3>${t('noResults')}</h3></div>` : filtered.map(p => productCard(p)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  initScrollReveal();
}

// All categories listing
function renderCategoriesPage() {
  const lang = store.getLanguage();
  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-8)">${t('featuredCategories')}</h1>
      <div class="category-grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr))">
        ${categories.map(cat => `
          <a href="#/category/${cat.id}" class="category-card reveal">
            <span class="icon" style="font-size:36px">${cat.icon}</span>
            <span class="name">${lang === 'vi' ? cat.name : cat.nameEn}</span>
            <span class="count">${getProductsByCategory(cat.id).length} ${t('items')}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  initScrollReveal();
}

// ====================================
//  PRODUCT DETAIL PAGE
// ====================================
function renderProductPage(params) {
  const lang = store.getLanguage();
  const p = getProductById(params.id);
  if (!p) { renderNotFound(); return; }

  store.addRecentlyViewed(p.id);
  const discount = calcDiscount(p.price, p.salePrice);
  const related = getRelatedProducts(p, 4);
  const catInfo = categories.find(c => c.id === p.category);

  document.getElementById('main-content').innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">${t('home')}</a><span class="separator">›</span>
        <a href="#/category/${p.category}">${catInfo ? (lang === 'vi' ? catInfo.name : catInfo.nameEn) : p.category}</a><span class="separator">›</span>
        <span class="current">${p.name}</span>
      </div>
      <div class="product-detail">
        <div class="product-gallery">
          <div class="product-gallery-main"><img src="${p.images?.[0] || p.image}" alt="${p.name}" id="main-product-img" /></div>
          ${p.images && p.images.length > 1 ? `
            <div class="product-thumbnails">
              ${p.images.map((img, i) => `<button class="product-thumbnail ${i === 0 ? 'active' : ''}" onclick="document.getElementById('main-product-img').src='${img}';document.querySelectorAll('.product-thumbnail').forEach(t=>t.classList.remove('active'));this.classList.add('active')"><img src="${img}" alt="" /></button>`).join('')}
            </div>
          ` : ''}
        </div>
        <div class="product-info">
          <div class="brand">${p.brand}</div>
          <h1>${p.name}</h1>
          <div class="product-meta">
            <div>${generateStarsWithCount(p.rating, p.reviewCount)}</div>
            <div class="sku">${t('sku')}: SP${String(p.id).padStart(4, '0')}</div>
            <div class="stock ${p.stock > 0 ? 'in-stock' : 'out-of-stock'}">
              ${p.stock > 0 ? `✓ ${t('inStock')} (${p.stock})` : `✕ ${t('outOfStock')}`}
            </div>
          </div>
          <div class="product-price-section">
            <span class="current">${formatPrice(p.salePrice || p.price)}</span>
            ${p.salePrice ? `<span class="original">${formatPrice(p.price)}</span><span class="discount-badge">-${discount}%</span>` : ''}
          </div>
          ${p.variants && p.variants.length > 0 ? `
            <div class="variant-section">
              <div class="variant-label">${lang === 'vi' ? 'Phiên bản' : 'Variant'}:</div>
              <div class="variant-options">
                ${p.variants.map((v, i) => `<button class="variant-option ${i === 0 ? 'active' : ''}" onclick="document.querySelectorAll('.variant-option').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${v}</button>`).join('')}
              </div>
            </div>
          ` : ''}
          <div class="product-actions">
            <div class="qty-selector">
              <button onclick="const i=this.nextElementSibling;i.value=Math.max(1,+i.value-1)">−</button>
              <input type="number" value="1" min="1" max="${p.stock}" id="product-qty" />
              <button onclick="const i=this.previousElementSibling;i.value=Math.min(${p.stock},+i.value+1)">+</button>
            </div>
            <button class="btn btn-primary btn-lg" onclick="window.__addToCartWithQty(${p.id})" ${p.stock <= 0 ? 'disabled' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              ${t('addToCart')}
            </button>
            <button class="btn btn-secondary btn-lg" onclick="window.__addToCartWithQty(${p.id});window.location.hash='/checkout'" ${p.stock <= 0 ? 'disabled' : ''}>
              ${t('buyNow')}
            </button>
          </div>
          <p style="color:var(--text-secondary);margin-top:var(--space-4);font-size:var(--text-sm)">${p.description}</p>
          
          <!-- Tabs -->
          <div class="product-tabs" style="margin-top:var(--space-8)">
            <div class="tabs">
              <button class="tab active" onclick="showTab(this, 'tab-specs')">${t('specifications')}</button>
              <button class="tab" onclick="showTab(this, 'tab-desc')">${t('description')}</button>
              <button class="tab" onclick="showTab(this, 'tab-reviews')">${t('reviews')} (${p.reviewCount})</button>
            </div>
            <div class="tab-content active" id="tab-specs">
              ${p.specs ? `<table class="specs-table">${Object.entries(p.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table>` : '<p>Đang cập nhật...</p>'}
            </div>
            <div class="tab-content" id="tab-desc">
              <p style="line-height:1.8;color:var(--text-secondary)">${p.description}</p>
            </div>
            <div class="tab-content" id="tab-reviews">
              <div class="empty-state" style="padding:var(--space-8)">
                <p>${lang === 'vi' ? 'Chưa có đánh giá nào. Hãy là người đầu tiên!' : 'No reviews yet. Be the first!'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length > 0 ? `
        <div class="related-products section">
          <div class="section-header"><h2>${t('relatedProducts')}</h2></div>
          <div class="product-grid">${related.map(p => productCard(p)).join('')}</div>
        </div>
      ` : ''}
    </div>
  `;
}

window.showTab = (btn, tabId) => {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');
};

window.__addToCartWithQty = (id) => {
  const p = getProductById(id);
  const qty = parseInt(document.getElementById('product-qty')?.value || 1);
  const variant = document.querySelector('.variant-option.active')?.textContent || null;
  if (p) {
    store.addToCart(p, variant, qty);
    renderHeader();
    showToast(`${p.name} đã thêm vào giỏ hàng!`, 'success');
  }
};

// ====================================
//  CART PAGE
// ====================================
function renderCartPage() {
  const lang = store.getLanguage();
  const cart = store.getCart();
  document.getElementById('main-content').innerHTML = `
    <div class="container cart-page">
      <div class="breadcrumb">
        <a href="#/">${t('home')}</a><span class="separator">›</span>
        <span class="current">${t('cart')}</span>
      </div>
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-8)">🛒 ${t('yourCart')}</h1>
      ${cart.length === 0 ? `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <h3>${t('cartEmpty')}</h3>
          <p>${t('cartEmptyDesc')}</p>
          <a href="#/" class="btn btn-primary">${t('continueShopping')}</a>
        </div>
      ` : `
        <div style="display:grid;grid-template-columns:1fr 380px;gap:var(--space-8);align-items:start">
          <div>
            ${cart.map(item => `
              <div class="cart-item" style="display:flex;gap:var(--space-4);padding:var(--space-4);border-bottom:1px solid var(--border-color)">
                <img src="${item.image}" alt="${item.name}" style="width:100px;height:100px;object-fit:cover;border-radius:var(--radius-md);background:var(--bg-tertiary)" />
                <div style="flex:1">
                  <a href="#/product/${item.id}" style="font-weight:var(--weight-semibold)">${item.name}</a>
                  ${item.variant ? `<div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:4px">${item.variant}</div>` : ''}
                  <div style="color:var(--sale);font-weight:var(--weight-bold);margin-top:var(--space-2)">${formatPrice(item.salePrice || item.price)}</div>
                  <div style="display:flex;align-items:center;gap:var(--space-4);margin-top:var(--space-3)">
                    <div class="qty-selector">
                      <button onclick="window.__updateCartQty('${item.cartId}', ${item.quantity - 1});window.__renderCartPage()">−</button>
                      <input type="number" value="${item.quantity}" readonly />
                      <button onclick="window.__updateCartQty('${item.cartId}', ${item.quantity + 1});window.__renderCartPage()">+</button>
                    </div>
                    <span style="font-weight:var(--weight-bold)">${formatPrice((item.salePrice || item.price) * item.quantity)}</span>
                    <button class="btn btn-ghost btn-sm" style="margin-left:auto;color:var(--error)" onclick="window.__removeCartItem('${item.cartId}');window.__renderCartPage()">✕ ${t('remove')}</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="cart-summary">
            <h3>${lang === 'vi' ? 'Tóm tắt đơn hàng' : 'Order Summary'}</h3>
            <div class="cart-summary-row"><span>${t('subtotal')}</span><span>${formatPrice(store.getCartTotal())}</span></div>
            <div class="cart-summary-row"><span>${t('shipping')}</span><span style="color:var(--success)">${t('freeShipping')}</span></div>
            <div class="voucher-input">
              <input class="input" placeholder="${t('voucher')}" />
              <button class="btn btn-secondary btn-sm">${t('applyVoucher')}</button>
            </div>
            <div class="cart-summary-row total"><span>${t('total')}</span><span class="value">${formatPrice(store.getCartTotal())}</span></div>
            <a href="#/checkout" class="btn btn-primary btn-full btn-lg" style="margin-top:var(--space-4)">${t('checkout')} →</a>
            <a href="#/" class="btn btn-ghost btn-full" style="margin-top:var(--space-2)">${t('continueShopping')}</a>
          </div>
        </div>
      `}
    </div>
  `;
}

// ====================================
//  CHECKOUT PAGE
// ====================================
function renderCheckoutPage() {
  const cart = store.getCart();
  if (cart.length === 0) { window.location.hash = '/cart'; return; }

  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <div class="breadcrumb"><a href="#/">${t('home')}</a><span class="separator">›</span><a href="#/cart">${t('cart')}</a><span class="separator">›</span><span class="current">${t('checkout')}</span></div>
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-8)">${t('checkout')}</h1>
      <div class="checkout-grid">
        <div>
          <div class="checkout-section">
            <h3>${t('customerInfo')}</h3>
            <div class="form-grid">
              <div class="input-group"><label>${t('fullName')} *</label><input class="input" id="ck-name" required /></div>
              <div class="input-group"><label>${t('phone')} *</label><input class="input" id="ck-phone" type="tel" required /></div>
              <div class="input-group full-width"><label>${t('email')}</label><input class="input" id="ck-email" type="email" /></div>
              <div class="input-group full-width"><label>${t('address')} *</label><input class="input" id="ck-address" required /></div>
              <div class="input-group"><label>${t('city')}</label><input class="input" id="ck-city" /></div>
              <div class="input-group"><label>${t('district')}</label><input class="input" id="ck-district" /></div>
              <div class="input-group full-width"><label>${t('note')}</label><textarea class="input" id="ck-note" rows="3"></textarea></div>
            </div>
          </div>
          <div class="checkout-section">
            <h3>${t('paymentMethod')}</h3>
            <div class="payment-methods">
              <label class="payment-method active" onclick="document.querySelectorAll('.payment-method').forEach(m=>m.classList.remove('active'));this.classList.add('active')">
                <input type="radio" name="payment" value="bank" checked style="display:none" />
                <div class="icon">🏦</div>
                <div class="info"><div class="name">${t('bankTransfer')}</div><div class="desc">QR Code chuyển khoản nhanh</div></div>
              </label>
              <label class="payment-method" onclick="document.querySelectorAll('.payment-method').forEach(m=>m.classList.remove('active'));this.classList.add('active')">
                <input type="radio" name="payment" value="cod" style="display:none" />
                <div class="icon">📦</div>
                <div class="info"><div class="name">${t('cod')}</div><div class="desc">Thanh toán khi nhận hàng</div></div>
              </label>
              <label class="payment-method" onclick="document.querySelectorAll('.payment-method').forEach(m=>m.classList.remove('active'));this.classList.add('active')">
                <input type="radio" name="payment" value="ewallet" style="display:none" />
                <div class="icon">📱</div>
                <div class="info"><div class="name">${t('eWallet')}</div><div class="desc">Momo, ZaloPay, VNPay</div></div>
              </label>
            </div>
          </div>
        </div>
        <div class="cart-summary">
          <h3>${store.getLanguage() === 'vi' ? 'Đơn hàng của bạn' : 'Your Order'}</h3>
          ${cart.map(item => `
            <div style="display:flex;gap:var(--space-3);padding:var(--space-3) 0;border-bottom:1px solid var(--border-light)">
              <img src="${item.image}" alt="" style="width:50px;height:50px;object-fit:cover;border-radius:var(--radius-sm);background:var(--bg-tertiary)" />
              <div style="flex:1;font-size:var(--text-sm)">
                <div style="font-weight:var(--weight-medium)">${item.name}</div>
                <div style="color:var(--text-muted)">x${item.quantity}</div>
              </div>
              <div style="font-weight:var(--weight-bold);font-size:var(--text-sm)">${formatPrice((item.salePrice || item.price) * item.quantity)}</div>
            </div>
          `).join('')}
          <div class="cart-summary-row" style="margin-top:var(--space-4)"><span>${t('subtotal')}</span><span>${formatPrice(store.getCartTotal())}</span></div>
          <div class="cart-summary-row"><span>${t('shipping')}</span><span style="color:var(--success)">${t('freeShipping')}</span></div>
          <div class="cart-summary-row total"><span>${t('total')}</span><span class="value">${formatPrice(store.getCartTotal())}</span></div>
          <button class="btn btn-primary btn-full btn-lg" style="margin-top:var(--space-4)" onclick="window.__placeOrder()">${t('placeOrder')}</button>
        </div>
      </div>
    </div>
  `;
}

window.__placeOrder = () => {
  const name = document.getElementById('ck-name')?.value;
  const phone = document.getElementById('ck-phone')?.value;
  if (!name || !phone) { showToast('Vui lòng nhập họ tên và số điện thoại!', 'error'); return; }

  const order = store.addOrder({
    items: [...store.getCart()],
    total: store.getCartTotal(),
    customer: { name, phone, email: document.getElementById('ck-email')?.value, address: document.getElementById('ck-address')?.value },
    payment: document.querySelector('input[name="payment"]:checked')?.value || 'cod'
  });

  store.clearCart();
  renderHeader();

  document.getElementById('main-content').innerHTML = `
    <div class="container section" style="text-align:center;padding:var(--space-24) 0">
      <div style="font-size:64px;margin-bottom:var(--space-6)">🎉</div>
      <h1 style="color:var(--gold);margin-bottom:var(--space-4)">${t('orderSuccess')}</h1>
      <p style="color:var(--text-secondary);margin-bottom:var(--space-2)">${t('orderSuccessDesc')}</p>
      <p style="color:var(--text-muted);margin-bottom:var(--space-8)">Mã đơn hàng: <strong style="color:var(--gold)">${order.id}</strong></p>
      <a href="#/" class="btn btn-primary btn-lg">${t('continueShopping')}</a>
    </div>
  `;
};

// ====================================
//  FLASH SALE PAGE
// ====================================
function renderFlashSalePage() {
  const lang = store.getLanguage();
  const saleProducts = getSaleProducts(20);
  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <div class="flash-sale-banner reveal">
        <div style="font-size:48px;margin-bottom:var(--space-4)">⚡</div>
        <h1>${t('flashSaleTitle')}</h1>
        <p style="color:var(--text-secondary);margin-top:var(--space-2)">${lang === 'vi' ? 'Ưu đãi có hạn - Nhanh tay kẻo hết!' : 'Limited time offer - Hurry up!'}</p>
        <div class="countdown" style="justify-content:center;margin-top:var(--space-6)">
          <div class="countdown-item"><span class="countdown-value" id="cd-h">00</span><span class="countdown-label">${lang === 'vi' ? 'Giờ' : 'Hours'}</span></div>
          <div class="countdown-item"><span class="countdown-value" id="cd-m">00</span><span class="countdown-label">${lang === 'vi' ? 'Phút' : 'Min'}</span></div>
          <div class="countdown-item"><span class="countdown-value" id="cd-s">00</span><span class="countdown-label">${lang === 'vi' ? 'Giây' : 'Sec'}</span></div>
        </div>
      </div>
      <div class="product-grid stagger-children">
        ${saleProducts.map(p => productCard(p)).join('')}
      </div>
    </div>
  `;
  startCountdownTimer();
  initScrollReveal();
}

// ====================================
//  PC BUILDER PAGE
// ====================================
function renderPCBuilderPage() {
  const lang = store.getLanguage();
  const steps = [
    { id: 'cpu', name: 'CPU', icon: '🧠' },
    { id: 'mainboard', name: 'Mainboard', icon: '🔌' },
    { id: 'ram', name: 'RAM', icon: '💾' },
    { id: 'vga', name: 'VGA', icon: '🎮' },
    { id: 'ssd', name: 'SSD', icon: '💽' },
    { id: 'psu', name: 'Nguồn (PSU)', icon: '⚡' },
    { id: 'case', name: 'Case', icon: '🖥️' },
    { id: 'cooling', name: 'Tản nhiệt', icon: '❄️' },
  ];

  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <div class="breadcrumb"><a href="#/">${t('home')}</a><span class="separator">›</span><span class="current">${t('pcBuilder')}</span></div>
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-2)">🖥️ ${t('pcBuilderTitle')}</h1>
      <p style="color:var(--text-secondary);margin-bottom:var(--space-8)">${t('pcBuilderDesc')}</p>
      <div class="pc-builder-grid">
        <div>
          ${steps.map((step, i) => {
            const stepProducts = getProductsByCategory(step.id);
            return `
              <div class="builder-step" id="builder-step-${step.id}">
                <div class="builder-step-header">
                  <div class="builder-step-number">${i + 1}</div>
                  <div class="builder-step-title">${step.icon} ${step.name}</div>
                </div>
                <select class="input" onchange="window.__updateBuilder()" data-step="${step.id}">
                  <option value="">-- ${t('selectComponent')} --</option>
                  ${stepProducts.map(p => `<option value="${p.id}" data-price="${p.salePrice || p.price}">${p.name} - ${formatPrice(p.salePrice || p.price)}</option>`).join('')}
                </select>
              </div>
            `;
          }).join('')}
        </div>
        <div class="builder-summary">
          <h3>💰 ${t('totalConfig')}</h3>
          <div id="builder-selected"></div>
          <div class="builder-total" id="builder-total">0₫</div>
          <button class="btn btn-primary btn-full" onclick="window.__addBuilderToCart()">${t('addAllToCart')}</button>
          <button class="btn btn-ghost btn-full" style="margin-top:var(--space-2)" onclick="document.querySelectorAll('.builder-step select').forEach(s=>s.value='');window.__updateBuilder()">${t('resetConfig')}</button>
        </div>
      </div>
    </div>
  `;
}

window.__updateBuilder = () => {
  let total = 0;
  let html = '';
  document.querySelectorAll('.builder-step select').forEach(sel => {
    if (sel.value) {
      const p = getProductById(parseInt(sel.value));
      if (p) {
        const price = p.salePrice || p.price;
        total += price;
        html += `<div style="display:flex;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--border-light);font-size:var(--text-sm)">
          <span>${p.name}</span><span style="color:var(--gold);font-weight:var(--weight-bold)">${formatPrice(price)}</span>
        </div>`;
      }
    }
  });
  document.getElementById('builder-selected').innerHTML = html || '<p style="text-align:center;color:var(--text-muted);padding:var(--space-4)">Chưa chọn linh kiện nào</p>';
  document.getElementById('builder-total').textContent = formatPrice(total);
};

window.__addBuilderToCart = () => {
  let added = 0;
  document.querySelectorAll('.builder-step select').forEach(sel => {
    if (sel.value) {
      const p = getProductById(parseInt(sel.value));
      if (p) { store.addToCart(p); added++; }
    }
  });
  if (added > 0) { renderHeader(); showToast(`Đã thêm ${added} linh kiện vào giỏ hàng!`, 'success'); }
  else { showToast('Vui lòng chọn ít nhất 1 linh kiện!', 'warning'); }
};

// ====================================
//  BLOG PAGE
// ====================================
function renderBlogPage() {
  const lang = store.getLanguage();
  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-8)">📝 ${t('blogTitle')}</h1>
      <div class="blog-grid stagger-children">
        ${blogs.map(b => `
          <a href="#/blog/${b.slug}" class="blog-card">
            <div class="blog-card-image"><img src="${b.image}" alt="${b.title}" loading="lazy" /></div>
            <div class="blog-card-body">
              <div class="blog-card-category">${b.category}</div>
              <h3 class="blog-card-title">${lang === 'vi' ? b.title : b.titleEn}</h3>
              <p class="blog-card-excerpt">${lang === 'vi' ? b.excerpt : b.excerptEn}</p>
              <div class="blog-card-meta"><span>${b.author}</span><span>•</span><span>${formatDate(b.date)}</span></div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  initScrollReveal();
}

function renderBlogPost(params) {
  const lang = store.getLanguage();
  const post = blogs.find(b => b.slug === params.slug);
  if (!post) { renderNotFound(); return; }

  document.getElementById('main-content').innerHTML = `
    <article class="blog-post">
      <div class="breadcrumb"><a href="#/">${t('home')}</a><span class="separator">›</span><a href="#/blog">${t('blog')}</a><span class="separator">›</span><span class="current">${lang === 'vi' ? post.title : post.titleEn}</span></div>
      <div class="blog-card-category" style="margin-top:var(--space-4)">${post.category}</div>
      <h1>${lang === 'vi' ? post.title : post.titleEn}</h1>
      <div class="blog-card-meta" style="margin-bottom:var(--space-8)"><span>${post.author}</span><span>•</span><span>${formatDate(post.date)}</span><span>•</span><span>${post.readTime}</span></div>
      <img src="${post.image}" alt="" style="width:100%;border-radius:var(--radius-xl);margin-bottom:var(--space-8)" />
      <div class="blog-post-content">${post.content}</div>
    </article>
  `;
}

// ====================================
//  ABOUT PAGE
// ====================================
function renderAboutPage() {
  document.getElementById('main-content').innerHTML = `
    <div class="container">
      <div class="about-hero reveal">
        <h1>${t('aboutTitle')}</h1>
        <p>${t('aboutDesc')}</p>
      </div>
      <div class="about-values reveal">
        <div class="about-value-card"><div class="icon">🎯</div><h3>Sứ mệnh</h3><p>Mang đến sản phẩm công nghệ chính hãng với giá tốt nhất cho người dùng Việt Nam.</p></div>
        <div class="about-value-card"><div class="icon">💎</div><h3>Giá trị cốt lõi</h3><p>Chất lượng - Uy tín - Tận tâm. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng.</p></div>
        <div class="about-value-card"><div class="icon">🚀</div><h3>Tầm nhìn</h3><p>Trở thành cửa hàng linh kiện PC & gear gaming uy tín hàng đầu tại Thanh Hóa.</p></div>
      </div>
      <div class="section" style="text-align:center">
        <h2 style="margin-bottom:var(--space-8)">Thông tin cửa hàng</h2>
        <div class="contact-info-cards" style="max-width:800px;margin:0 auto">
          <div class="contact-info-card"><div class="icon">📍</div><div class="label">Địa chỉ</div><div class="value">222 Nguyễn Tĩnh, Hạc Thành, Thanh Hóa</div></div>
          <div class="contact-info-card"><div class="icon">📞</div><div class="label">Hotline</div><div class="value">0966 246 346</div></div>
          <div class="contact-info-card"><div class="icon">📧</div><div class="label">Email</div><div class="value">huybui259@gmail.com</div></div>
          <div class="contact-info-card"><div class="icon">⏰</div><div class="label">Giờ mở cửa</div><div class="value">24/7</div></div>
        </div>
      </div>
    </div>
  `;
  initScrollReveal();
}

// ====================================
//  CONTACT PAGE
// ====================================
function renderContactPage() {
  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-8)">${t('contactTitle')}</h1>
      <div class="contact-grid">
        <div>
          <div class="contact-info-cards">
            <div class="contact-info-card"><div class="icon">📍</div><div class="label">Địa chỉ</div><div class="value">222 Nguyễn Tĩnh, Hạc Thành, Thanh Hóa</div></div>
            <div class="contact-info-card"><div class="icon">📞</div><div class="label">Hotline / Zalo</div><div class="value">0966 246 346</div></div>
            <div class="contact-info-card"><div class="icon">📧</div><div class="label">Email</div><div class="value">huybui259@gmail.com</div></div>
            <div class="contact-info-card"><div class="icon">👤</div><div class="label">Facebook</div><div class="value">Bùi Huy</div></div>
          </div>
          <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.0!2d105.78!3d19.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ4JzAuMCJOIDEwNcKwNDYnNDguMCJF!5e0!3m2!1svi!2s!4v1" allowfullscreen loading="lazy" title="Map"></iframe>
          </div>
        </div>
        <div>
          <div class="checkout-section">
            <h3>${t('sendMessage')}</h3>
            <div class="form-grid">
              <div class="input-group"><label>${t('fullName')}</label><input class="input" /></div>
              <div class="input-group"><label>${t('email')}</label><input class="input" type="email" /></div>
              <div class="input-group full-width"><label>${t('phone')}</label><input class="input" type="tel" /></div>
              <div class="input-group full-width"><label>${t('yourMessage')}</label><textarea class="input" rows="5"></textarea></div>
              <div class="full-width"><button class="btn btn-primary btn-full" onclick="showToast('Tin nhắn đã được gửi!','success')">${t('sendMessage')}</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ====================================
//  LOGIN PAGE
// ====================================
function renderLoginPage() {
  document.getElementById('main-content').innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <div style="text-align:center;margin-bottom:var(--space-6)">
          <div class="logo-icon" style="width:56px;height:56px;font-size:var(--text-xl);margin:0 auto var(--space-4)">HH</div>
          <h1>${t('loginTitle')}</h1>
          <p class="subtitle">${t('loginSubtitle')}</p>
        </div>
        <div class="auth-tabs">
          <button class="auth-tab active" onclick="document.getElementById('login-form').style.display='block';document.getElementById('register-form').style.display='none';document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">${t('login')}</button>
          <button class="auth-tab" onclick="document.getElementById('login-form').style.display='none';document.getElementById('register-form').style.display='block';document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">${t('register')}</button>
        </div>
        <div id="login-form">
          <div class="input-group" style="margin-bottom:var(--space-4)"><label>${t('email')}</label><input class="input" type="email" id="login-email" value="user@example.com" /></div>
          <div class="input-group" style="margin-bottom:var(--space-4)"><label>${t('password')}</label><input class="input" type="password" id="login-pass" value="password" /></div>
          <button class="btn btn-primary btn-full btn-lg" onclick="store.login({name:'Huy Hoàng',email:document.getElementById('login-email').value,role:'user'});renderHeader();showToast('Đăng nhập thành công!','success');window.location.hash='/account'">${t('login')}</button>
        </div>
        <div id="register-form" style="display:none">
          <div class="input-group" style="margin-bottom:var(--space-4)"><label>${t('fullName')}</label><input class="input" /></div>
          <div class="input-group" style="margin-bottom:var(--space-4)"><label>${t('email')}</label><input class="input" type="email" /></div>
          <div class="input-group" style="margin-bottom:var(--space-4)"><label>${t('password')}</label><input class="input" type="password" /></div>
          <div class="input-group" style="margin-bottom:var(--space-4)"><label>${t('confirmPassword')}</label><input class="input" type="password" /></div>
          <button class="btn btn-primary btn-full btn-lg" onclick="showToast('Đăng ký thành công!','success')">${t('register')}</button>
        </div>
      </div>
    </div>
  `;
}

// ====================================
//  ACCOUNT PAGE
// ====================================
function renderAccountPage() {
  const user = store.getUser();
  if (!user) { window.location.hash = '/login'; return; }
  const orders = store.getOrders();

  document.getElementById('main-content').innerHTML = `
    <div class="container">
      <div class="account-layout">
        <div class="account-sidebar">
          <div style="text-align:center;padding:var(--space-4) 0;border-bottom:1px solid var(--border-color);margin-bottom:var(--space-4)">
            <div class="avatar avatar-lg" style="margin:0 auto var(--space-3)">${user.name?.charAt(0) || 'U'}</div>
            <div style="font-weight:var(--weight-semibold)">${user.name}</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">${user.email}</div>
          </div>
          <a href="#/account" class="account-nav-item active"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${t('profile')}</a>
          <a href="#/wishlist" class="account-nav-item"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> ${t('myWishlist')}</a>
          <button class="account-nav-item" style="width:100%;color:var(--error)" onclick="store.logout();renderHeader();window.location.hash='/'">${t('logout')}</button>
        </div>
        <div>
          <h2 style="margin-bottom:var(--space-6)">${t('orderHistory')}</h2>
          ${orders.length === 0 ? `<div class="empty-state"><h3>Chưa có đơn hàng nào</h3><a href="#/" class="btn btn-primary" style="margin-top:var(--space-4)">${t('shopNow')}</a></div>` : `
            <div class="admin-table-wrapper">
              <table class="admin-table">
                <thead><tr><th>Mã đơn</th><th>Ngày</th><th>Tổng tiền</th><th>Trạng thái</th></tr></thead>
                <tbody>
                  ${orders.map(o => `<tr><td><strong>${o.id}</strong></td><td>${formatDate(o.date)}</td><td style="color:var(--gold);font-weight:var(--weight-bold)">${formatPrice(o.total)}</td><td><span class="status-badge ${o.status}">${t(o.status)}</span></td></tr>`).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// ====================================
//  WISHLIST PAGE
// ====================================
function renderWishlistPage() {
  const wishlist = store.getWishlist();
  const wishProducts = wishlist.map(id => getProductById(id)).filter(Boolean);

  document.getElementById('main-content').innerHTML = `
    <div class="container wishlist-page">
      <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-8)">❤️ ${t('myWishlist')} (${wishProducts.length})</h1>
      ${wishProducts.length === 0 ? `<div class="empty-state"><h3>Chưa có sản phẩm yêu thích</h3><a href="#/" class="btn btn-primary" style="margin-top:var(--space-4)">${t('shopNow')}</a></div>` : `
        <div class="product-grid">${wishProducts.map(p => productCard(p)).join('')}</div>
      `}
    </div>
  `;
}

// ====================================
//  COMPARE PAGE
// ====================================
function renderComparePage() {
  const compareList = store.getCompareList();
  const compareProducts = compareList.map(id => getProductById(id)).filter(Boolean);

  document.getElementById('main-content').innerHTML = `
    <div class="container section">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-8)">
        <h1 style="font-size:var(--text-3xl)">⚖️ ${t('compareTitle')}</h1>
        ${compareProducts.length > 0 ? `<button class="btn btn-ghost btn-sm" onclick="store.clearCompare();renderComparePage()">${t('clearAll')}</button>` : ''}
      </div>
      ${compareProducts.length === 0 ? `<div class="empty-state"><h3>Chưa có sản phẩm để so sánh</h3><p>Thêm sản phẩm từ trang danh mục</p><a href="#/categories" class="btn btn-primary" style="margin-top:var(--space-4)">${t('shopNow')}</a></div>` : `
        <div class="compare-table-wrapper">
          <table class="compare-table">
            <thead><tr><th></th>${compareProducts.map(p => `<th><div class="compare-product-cell"><img src="${p.image}" alt="${p.name}" /><div style="font-weight:var(--weight-bold)">${p.name}</div><div style="color:var(--sale);font-weight:var(--weight-bold)">${formatPrice(p.salePrice || p.price)}</div></div></th>`).join('')}</tr></thead>
            <tbody>
              <tr><td>Thương hiệu</td>${compareProducts.map(p => `<td>${p.brand}</td>`).join('')}</tr>
              <tr><td>Đánh giá</td>${compareProducts.map(p => `<td>${p.rating}⭐ (${p.reviewCount})</td>`).join('')}</tr>
              <tr><td>Đã bán</td>${compareProducts.map(p => `<td>${p.sold}</td>`).join('')}</tr>
              <tr><td>Còn hàng</td>${compareProducts.map(p => `<td>${p.stock > 0 ? '✓ Có' : '✕ Hết'}</td>`).join('')}</tr>
              ${compareProducts[0]?.specs ? Object.keys(compareProducts[0].specs).map(key => `<tr><td>${key}</td>${compareProducts.map(p => `<td>${p.specs?.[key] || '-'}</td>`).join('')}</tr>`).join('') : ''}
              <tr><td></td>${compareProducts.map(p => `<td><button class="btn btn-primary btn-sm" onclick="window.__addToCart(${p.id})">${t('addToCart')}</button></td>`).join('')}</tr>
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

// ====================================
//  ADMIN PAGES
// ====================================
function renderAdminLogin() {
  document.getElementById('main-content').innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <div style="text-align:center;margin-bottom:var(--space-6)"><div class="logo-icon" style="width:56px;height:56px;font-size:var(--text-xl);margin:0 auto var(--space-4)">HH</div><h1>Admin Panel</h1><p class="subtitle">Đăng nhập quản trị</p></div>
        <div class="input-group" style="margin-bottom:var(--space-4)"><label>Username</label><input class="input" id="admin-user" value="admin" /></div>
        <div class="input-group" style="margin-bottom:var(--space-6)"><label>Password</label><input class="input" type="password" id="admin-pass" /></div>
        <button class="btn btn-primary btn-full btn-lg" onclick="if(store.adminLogin(document.getElementById('admin-user').value,document.getElementById('admin-pass').value)){renderHeader();window.location.hash='/admin/dashboard'}else{showToast('Sai tài khoản hoặc mật khẩu!','error')}">Đăng nhập</button>
      </div>
    </div>
  `;
}

function renderAdminDashboard() {
  if (!store.isAdmin()) { window.location.hash = '/admin'; return; }
  const orders = store.getOrders();
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  document.getElementById('main-content').innerHTML = `
    <div class="admin-layout" style="padding-top:0">
      ${adminSidebar('dashboard')}
      <div class="admin-content">
        <div class="admin-header"><h1>📊 Dashboard</h1></div>
        <div class="stat-cards">
          <div class="stat-card"><div class="icon">📦</div><div class="value">${products.length}</div><div class="label">${t('totalProducts')}</div></div>
          <div class="stat-card"><div class="icon">📋</div><div class="value">${orders.length}</div><div class="label">${t('totalOrders')}</div></div>
          <div class="stat-card"><div class="icon">💰</div><div class="value">${formatPrice(totalRevenue)}</div><div class="label">${t('totalRevenue')}</div></div>
          <div class="stat-card"><div class="icon">👥</div><div class="value">1,234</div><div class="label">${t('totalCustomers')}</div></div>
        </div>
        <div class="admin-table-wrapper">
          <h3 style="padding:var(--space-4) var(--space-4) 0">Đơn hàng gần đây</h3>
          <table class="admin-table">
            <thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Tổng tiền</th><th>Trạng thái</th><th>Ngày</th></tr></thead>
            <tbody>
              ${orders.length === 0 ? '<tr><td colspan="5" style="text-align:center;padding:var(--space-8)">Chưa có đơn hàng</td></tr>' :
                orders.slice(0, 10).map(o => `<tr><td><strong>${o.id}</strong></td><td>${o.customer?.name || 'N/A'}</td><td style="color:var(--gold);font-weight:var(--weight-bold)">${formatPrice(o.total)}</td><td><span class="status-badge ${o.status}">${t(o.status)}</span></td><td>${formatDate(o.date)}</td></tr>`).join('')
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminProducts() {
  if (!store.isAdmin()) { window.location.hash = '/admin'; return; }

  document.getElementById('main-content').innerHTML = `
    <div class="admin-layout" style="padding-top:0">
      ${adminSidebar('products')}
      <div class="admin-content">
        <div class="admin-header"><h1>📦 ${t('productManagement')}</h1><span style="color:var(--text-muted)">${products.length} sản phẩm</span></div>
        <div class="admin-table-wrapper">
          <table class="admin-table">
            <thead><tr><th>Hình</th><th>${t('productName')}</th><th>${t('brand')}</th><th>Danh mục</th><th>${t('price')}</th><th>${t('stock')}</th></tr></thead>
            <tbody>
              ${products.slice(0, 30).map(p => `
                <tr>
                  <td><img src="${p.image}" alt="" style="width:48px;height:48px;object-fit:cover;border-radius:var(--radius-sm)" /></td>
                  <td><strong>${p.name}</strong></td>
                  <td>${p.brand}</td>
                  <td>${categories.find(c => c.id === p.category)?.name || p.category}</td>
                  <td><span style="color:var(--sale);font-weight:var(--weight-bold)">${formatPrice(p.salePrice || p.price)}</span>${p.salePrice ? `<br><s style="font-size:var(--text-xs);color:var(--text-muted)">${formatPrice(p.price)}</s>` : ''}</td>
                  <td>${p.stock}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminOrders() {
  if (!store.isAdmin()) { window.location.hash = '/admin'; return; }
  const orders = store.getOrders();

  document.getElementById('main-content').innerHTML = `
    <div class="admin-layout" style="padding-top:0">
      ${adminSidebar('orders')}
      <div class="admin-content">
        <div class="admin-header"><h1>📋 ${t('orderManagement')}</h1></div>
        <div class="admin-table-wrapper">
          <table class="admin-table">
            <thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>SĐT</th><th>Sản phẩm</th><th>Tổng tiền</th><th>Thanh toán</th><th>Trạng thái</th><th>Ngày</th></tr></thead>
            <tbody>
              ${orders.length === 0 ? '<tr><td colspan="8" style="text-align:center;padding:var(--space-8)">Chưa có đơn hàng</td></tr>' :
                orders.map(o => `
                  <tr>
                    <td><strong>${o.id}</strong></td>
                    <td>${o.customer?.name || 'N/A'}</td>
                    <td>${o.customer?.phone || 'N/A'}</td>
                    <td>${o.items?.length || 0} SP</td>
                    <td style="color:var(--gold);font-weight:var(--weight-bold)">${formatPrice(o.total)}</td>
                    <td>${o.payment === 'bank' ? '🏦 CK' : o.payment === 'cod' ? '📦 COD' : '📱 Ví'}</td>
                    <td>
                      <select class="input" style="padding:4px 8px;font-size:var(--text-xs)" onchange="store.updateOrderStatus('${o.id}',this.value);renderAdminOrders()">
                        <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Chờ xử lý</option>
                        <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Đã xác nhận</option>
                        <option value="shipping" ${o.status === 'shipping' ? 'selected' : ''}>Đang giao</option>
                        <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Đã giao</option>
                        <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Đã hủy</option>
                      </select>
                    </td>
                    <td>${formatDate(o.date)}</td>
                  </tr>
                `).join('')
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function adminSidebar(active) {
  return `
    <aside class="admin-sidebar">
      <a href="#/" class="logo" style="margin-bottom:var(--space-8)"><div class="logo-icon" style="width:36px;height:36px;font-size:var(--text-sm)">HH</div><div class="logo-text" style="font-size:var(--text-base)">Admin</div></a>
      <a href="#/admin/dashboard" class="admin-nav-item ${active === 'dashboard' ? 'active' : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Dashboard</a>
      <a href="#/admin/products" class="admin-nav-item ${active === 'products' ? 'active' : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> Sản phẩm</a>
      <a href="#/admin/orders" class="admin-nav-item ${active === 'orders' ? 'active' : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Đơn hàng</a>
      <div style="margin-top:auto;padding-top:var(--space-8)">
        <a href="#/" class="admin-nav-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> Về trang chủ</a>
        <button class="admin-nav-item" style="width:100%;color:var(--error)" onclick="window.__adminLogout()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> Đăng xuất</button>
      </div>
    </aside>
  `;
}

// ====================================
//  404 PAGE
// ====================================
function renderNotFound() {
  document.getElementById('main-content').innerHTML = `
    <div class="not-found">
      <div class="code">404</div>
      <h1>${t('notFound')}</h1>
      <p>${t('notFoundDesc')}</p>
      <a href="#/" class="btn btn-primary btn-lg">${t('goHome')}</a>
    </div>
  `;
}

// ====================================
//  CHAT WIDGET
// ====================================
function renderChatWidget() {
  document.getElementById('chat-widget').innerHTML = `
    <div class="chat-widget" id="chat-widget-inner">
      <div class="chat-widget-buttons">
        <a href="https://zalo.me/0966246346" target="_blank" class="chat-btn">💬 Chat Zalo</a>
        <a href="https://facebook.com" target="_blank" class="chat-btn">📘 Messenger</a>
        <a href="tel:0966246346" class="chat-btn">📞 Gọi ngay</a>
      </div>
      <button class="chat-toggle" onclick="document.getElementById('chat-widget-inner').classList.toggle('expanded')">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>
  `;
}

// ====================================
//  INIT APP & ROUTES
// ====================================
function initApp() {
  // Render static components
  renderHeader();
  renderFooter();
  renderChatWidget();
  initBackToTop();
  initStickyHeader();

  // Register global keyboard shortcuts ONCE (not inside renderHeader)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
      closeCartDrawer();
    }
  });

  // Expose functions needed by inline onclick in admin sidebar
  window.__renderCartPage = renderCartPage;
  window.__adminLogout = () => { store.logout(); renderHeader(); window.location.hash = '/'; };

  // Setup routes
  router.addRoutes({
    '/': () => renderHomePage(),
    '/categories': () => renderCategoriesPage(),
    '/category/:slug': (params, query) => renderCategoryPage(params, query),
    '/product/:id': (params) => renderProductPage(params),
    '/cart': () => renderCartPage(),
    '/checkout': () => renderCheckoutPage(),
    '/flash-sale': () => renderFlashSalePage(),
    '/pc-builder': () => renderPCBuilderPage(),
    '/compare': () => renderComparePage(),
    '/blog': () => renderBlogPage(),
    '/blog/:slug': (params) => renderBlogPost(params),
    '/about': () => renderAboutPage(),
    '/contact': () => renderContactPage(),
    '/login': () => renderLoginPage(),
    '/account': () => renderAccountPage(),
    '/wishlist': () => renderWishlistPage(),
    '/admin': () => renderAdminLogin(),
    '/admin/dashboard': () => renderAdminDashboard(),
    '/admin/products': () => renderAdminProducts(),
    '/admin/orders': () => renderAdminOrders(),
    '*': () => renderNotFound(),
  });

  // Trigger initial route AFTER routes are registered (fixes #1)
  router.handleRoute();

  // Listen for store changes
  store.on('cartUpdate', () => renderHeader());
  store.on('wishlistUpdate', () => renderHeader());

  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loading-screen')?.classList.add('hidden');
    setTimeout(() => document.getElementById('loading-screen')?.remove(), 500);
  }, 800);
}

// Start the app
initApp();
