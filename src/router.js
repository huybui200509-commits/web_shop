// ===== ROUTER.JS - Hash-based SPA Router =====

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.beforeHooks = [];
    this.afterHooks = [];
    
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  addRoutes(routeMap) {
    Object.entries(routeMap).forEach(([path, handler]) => {
      this.routes[path] = handler;
    });
    return this;
  }

  beforeEach(hook) {
    this.beforeHooks.push(hook);
    return this;
  }

  afterEach(hook) {
    this.afterHooks.push(hook);
    return this;
  }

  navigate(path) {
    window.location.hash = path;
  }

  getHash() {
    return window.location.hash.slice(1) || '/';
  }

  parseRoute(hash) {
    const [path, queryString] = hash.split('?');
    const params = {};
    const query = {};

    if (queryString) {
      queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        query[decodeURIComponent(key)] = decodeURIComponent(value || '');
      });
    }

    // Match route patterns like /category/:slug
    for (const [pattern, handler] of Object.entries(this.routes)) {
      const patternParts = pattern.split('/');
      const pathParts = path.split('/');

      if (patternParts.length !== pathParts.length) continue;

      let match = true;
      const routeParams = {};

      for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
          routeParams[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
        } else if (patternParts[i] !== pathParts[i]) {
          match = false;
          break;
        }
      }

      if (match) {
        return { handler, params: routeParams, query, path };
      }
    }

    // 404 fallback
    return { handler: this.routes['*'] || null, params: {}, query, path };
  }

  async handleRoute() {
    const hash = this.getHash();
    const route = this.parseRoute(hash);

    if (!route.handler) return;

    // Before hooks
    for (const hook of this.beforeHooks) {
      const result = await hook(route, this.currentRoute);
      if (result === false) return;
    }

    const previousRoute = this.currentRoute;
    this.currentRoute = route;

    // Page transition
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.add('page-exit');
      await new Promise(r => setTimeout(r, 200));
      
      // Execute handler
      await route.handler(route.params, route.query);
      
      mainContent.classList.remove('page-exit');
      mainContent.classList.add('page-enter');
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      setTimeout(() => {
        mainContent.classList.remove('page-enter');
      }, 400);
    }

    // After hooks
    for (const hook of this.afterHooks) {
      await hook(route, previousRoute);
    }
  }

  // Helper to create links
  static link(path, text, className = '') {
    return `<a href="#${path}" class="${className}">${text}</a>`;
  }
}

export default new Router();
