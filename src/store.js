// ===== STORE.JS - State Management =====

class Store {
  constructor() {
    this.state = {
      cart: [],
      user: null,
      wishlist: [],
      compareList: [],
      theme: 'dark',
      language: 'vi',
      recentlyViewed: [],
      orders: []
    };
    
    this.listeners = {};
    this.load();
  }

  // Load from LocalStorage
  load() {
    try {
      const saved = localStorage.getItem('huyhoang_store');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
    }
    
    // Apply theme
    document.body.setAttribute('data-theme', this.state.theme);
  }

  // Save to LocalStorage
  save() {
    try {
      localStorage.setItem('huyhoang_store', JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  // Event system
  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
    return () => {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    };
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data));
    }
  }

  // ===== THEME =====
  getTheme() { return this.state.theme; }
  
  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.state.theme);
    this.save();
    this.emit('themeChange', this.state.theme);
  }

  setTheme(theme) {
    this.state.theme = theme;
    document.body.setAttribute('data-theme', theme);
    this.save();
    this.emit('themeChange', theme);
  }

  // ===== LANGUAGE =====
  getLanguage() { return this.state.language; }
  
  setLanguage(lang) {
    this.state.language = lang;
    this.save();
    this.emit('languageChange', lang);
  }

  toggleLanguage() {
    this.setLanguage(this.state.language === 'vi' ? 'en' : 'vi');
  }

  // ===== CART =====
  getCart() { return this.state.cart; }
  
  getCartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => {
      const price = item.salePrice || item.price;
      return sum + price * item.quantity;
    }, 0);
  }

  addToCart(product, variant = null, quantity = 1) {
    const cartId = variant ? `${product.id}-${variant}` : `${product.id}`;
    const existingIndex = this.state.cart.findIndex(item => item.cartId === cartId);
    const maxStock = product.stock || 999;

    if (existingIndex >= 0) {
      const newQty = this.state.cart[existingIndex].quantity + quantity;
      this.state.cart[existingIndex].quantity = Math.min(newQty, maxStock);
    } else {
      if (product.stock !== undefined && product.stock <= 0) return false;
      this.state.cart.push({
        cartId,
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        salePrice: product.salePrice,
        image: product.images?.[0] || product.image,
        variant: variant,
        quantity: Math.min(quantity, maxStock),
        stock: maxStock
      });
    }

    this.save();
    this.emit('cartUpdate', this.state.cart);
    return true;
  }

  removeFromCart(cartId) {
    this.state.cart = this.state.cart.filter(item => item.cartId !== cartId);
    this.save();
    this.emit('cartUpdate', this.state.cart);
  }

  updateCartQuantity(cartId, quantity) {
    const item = this.state.cart.find(item => item.cartId === cartId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(cartId);
      } else {
        item.quantity = quantity;
        this.save();
        this.emit('cartUpdate', this.state.cart);
      }
    }
  }

  clearCart() {
    this.state.cart = [];
    this.save();
    this.emit('cartUpdate', this.state.cart);
  }

  // ===== WISHLIST =====
  getWishlist() { return this.state.wishlist; }

  isInWishlist(productId) {
    return this.state.wishlist.includes(productId);
  }

  toggleWishlist(productId) {
    const index = this.state.wishlist.indexOf(productId);
    if (index >= 0) {
      this.state.wishlist.splice(index, 1);
    } else {
      this.state.wishlist.push(productId);
    }
    this.save();
    this.emit('wishlistUpdate', this.state.wishlist);
    return this.isInWishlist(productId);
  }

  // ===== COMPARE =====
  getCompareList() { return this.state.compareList; }

  isInCompare(productId) {
    return this.state.compareList.includes(productId);
  }

  toggleCompare(productId) {
    const index = this.state.compareList.indexOf(productId);
    if (index >= 0) {
      this.state.compareList.splice(index, 1);
    } else {
      if (this.state.compareList.length >= 4) {
        return false; // max 4
      }
      this.state.compareList.push(productId);
    }
    this.save();
    this.emit('compareUpdate', this.state.compareList);
    return true;
  }

  clearCompare() {
    this.state.compareList = [];
    this.save();
    this.emit('compareUpdate', this.state.compareList);
  }

  // ===== USER =====
  getUser() { return this.state.user; }

  login(userData) {
    this.state.user = userData;
    this.save();
    this.emit('userChange', this.state.user);
  }

  logout() {
    this.state.user = null;
    this.save();
    this.emit('userChange', null);
  }

  isLoggedIn() { return !!this.state.user; }

  // ===== ORDERS =====
  getOrders() { return this.state.orders; }

  addOrder(order) {
    order.id = 'ORD-' + Date.now();
    order.date = new Date().toISOString();
    order.status = 'pending';
    this.state.orders.unshift(order);
    this.save();
    this.emit('orderUpdate', this.state.orders);
    return order;
  }

  updateOrderStatus(orderId, status) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      this.save();
      this.emit('orderUpdate', this.state.orders);
    }
  }

  // ===== RECENTLY VIEWED =====
  addRecentlyViewed(productId) {
    this.state.recentlyViewed = this.state.recentlyViewed.filter(id => id !== productId);
    this.state.recentlyViewed.unshift(productId);
    if (this.state.recentlyViewed.length > 20) {
      this.state.recentlyViewed = this.state.recentlyViewed.slice(0, 20);
    }
    this.save();
  }

  getRecentlyViewed() { return this.state.recentlyViewed; }

  // ===== ADMIN =====
  isAdmin() {
    return this.state.user?.role === 'admin';
  }

  adminLogin(username, password) {
    if (username === 'admin' && password === 'admin123') {
      this.login({ name: 'Admin', email: 'admin@huyhoangstore.com', role: 'admin' });
      return true;
    }
    return false;
  }
}

export default new Store();
