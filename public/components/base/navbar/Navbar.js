; (function () {
    "use strict";
class Navbar extends HTMLElement {
    constructor() {
        // Always call parent constructor first
        super();
      }
      connectedCallback() {
        const template = document.getElementById("navbar-template");
        const navbarTemplate = document.createElement('template');
        navbarTemplate.innerHTML = template.content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navbarTemplate.content);
    };
}
customElements.define('navbar-template', Navbar);
})();