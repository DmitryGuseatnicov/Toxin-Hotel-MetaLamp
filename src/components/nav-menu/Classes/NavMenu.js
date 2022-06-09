import $ from 'jquery';

import constants from '../utils/constants';

class NavMenu {
  constructor($navMenu) {
    this.$navMenu = $navMenu;
    this.init();
  }

  init() {
    this.$navItems = this.$navMenu.find(constants.NAV_ITEMS);
    this._bindEventListener();
  }

  toggle(target) {
    this._bindWindowEventListener();
    $(target).toggleClass('nav__item_open');
  }

  _bindEventListener() {
    this._clickHandler = this._clickHandler.bind(this);
    this.$navItems.on('click', this._clickHandler);
  }

  _bindWindowEventListener() {
    this._windowClickHandler = this._windowClickHandler.bind(this);
    $(window).on('click', this._windowClickHandler);
  }

  _windowClickHandler(e) {
    if (!e.target.closest('.nav__item_hav-children')) {
      this.$navItems.removeClass('nav__item_open');
      $(window).off('click', this._windowClickHandler);
    }
  }

  _clickHandler(e) {
    if (e.target.closest('.nav__item_hav-children')) {
      if (e.target.closest('.nav__item-link')) {
        this.toggle(e.currentTarget);
      }
    }
  }
}

export default NavMenu;
