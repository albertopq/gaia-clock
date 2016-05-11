define(function(require) {
'use strict';

/**
 * Abstraction for handling the Tabs links at the bottom of the UI.
 * @param {HTMLElement} element The containing element for the Tabs UI.
 */
function Tabs(element) {
  this.element = element;
  this.links = element.querySelectorAll('a');
  this.element.addEventListener('click', this);
}

/**
 * Update selected attributes for the selected tab.
 * Also emit a 'selected' event with the relevant data.
 */
Tabs.prototype.handleEvent = function tabsHandleEvent(event) {
  // In case tabs is a NodeList, that does not have forEach.
  Array.prototype.forEach.call(this.links, function setAriaSelectedAttr(tab) {
    tab.setAttribute('aria-selected',
      tab === event.target ? 'true' : 'false');
  });
};


return Tabs;

});
