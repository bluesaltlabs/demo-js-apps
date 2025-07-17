
// Core
import Router from './src/core/Router.js';
import StateManager from './src/core/StateManager.js';
import EventBus from './src/core/EventBus.js';
// Pages

import HomePage from './src/pages/HomePage.js';
import AboutPage from './src/pages/AboutPage.js';

// Components
//import Header from './src/components/layout/Header.js';
//import Footer from './src/components/layout/Footer.js';

export class App {
  constructor() {
    this.router = new Router();
    this.stateManager = new StateManager();
    this.eventBus = new EventBus();
    this.init();
  }

  // Initialize the application
  init() {
    this.initRoutes();
    this.renderLayout();
    this.bindEvents();
  }

  // Initialize the application routes (called by init())
  initRoutes() {
    this.router.register('/', new HomePage());
    this.router.register('/about', new AboutPage());
  }

  // render the application layout (called by init())
  renderLayout() {
    // const header = new Header();
    // const footer = new Footer();
    // document.body.insertAdjacentHTML('afterbegin', header.render());
    // document.body.insertAdjacentHTML('afterend', footer.render());
  }

  // Bind application events (called by init())
  bindEvents() {
    // Global event listeners
    document.addEventListener('click', this.handleLinkClick.bind(this));
  }

  // Handle link clicks (called by bindEvents())
  handleLinkClick(event) {
    if (event.target.tagName === 'A' && event.target.dataset.route) {
      event.preventDefault();
      this.router.navigate(event.target.dataset.route);
    }
  }

  //
}

new App();
