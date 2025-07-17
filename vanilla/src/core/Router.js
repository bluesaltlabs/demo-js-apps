// Router Class
export default class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.init();
  }

  // Initialize router
  init() {
    window.addEventListener('popstate', this.handleRouteChange.bind(this));
    window.addEventListener('load', this.handleRouteChange.bind(this));
  }

  // Register route
  register(path, component) {
    this.routes[path] = component;
  }

  // Navigate to specified path
  navigate(path) {
    history.pushState({}, '', path);
    this.renderRoute(path);
  }

  // Handle route change event
  handleRouteChange() {
    const path = window.location.pathname;
    this.renderRoute(path);
  }

  // Render route for the specified path
  renderRoute(path) {
    const component = this.routes[path];

    if(component) {
      const appContainer = document.getElementById('app');
      appContainer.innerHTML = component.render();
      component.mount?.();
    }
  }
}
