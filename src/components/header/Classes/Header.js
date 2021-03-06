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
    this._bindEventListener();
  }

  toggle() {
    this.$menu.toggleClass('header__panel_visible');
  }

  _bindEventListener() {
    this._handleBurgerButtonClick = this._handleBurgerButtonClick.bind(this);
    this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
    this.$burgerButton.on('click', this._handleBurgerButtonClick);
    this.$closeButton.on('click', this._handleCloseButtonClick);
  }

  _handleBurgerButtonClick() {
    this.toggle();
  }

  _handleCloseButtonClick() {
    this.toggle();
  }
}

export default Header;
