import $ from 'jquery';

import constants from '../utils/constants';

class Header {
  constructor(nodeElem) {
    this.$header = $(nodeElem);
    this.init();
  }

  init() {
    this.$burgerButton = this.$header.find(constants.BURGER);
    this.$closeButton = this.$header.find(constants.CLOSE);
    this.$menu = this.$header.find(constants.MENU);
    this.bindEventListener();
  }

  bindEventListener() {
    this.toggle = this.toggle.bind(this);
    this.$burgerButton.on('click', this.toggle);
    this.$closeButton.on('click', this.toggle);
  }

  toggle() {
    this.$menu.toggleClass('header__panel_visible');
  }
}

export default Header;
