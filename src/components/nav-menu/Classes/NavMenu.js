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
    this._handleNavItemClick = this._handleNavItemClick.bind(this);
    this.$navItems.on('click', this._handleNavItemClick);
  }

  _bindWindowEventListener() {
    this._handleWindowClick = this._handleWindowClick.bind(this);
    $(window).on('click', this._handleWindowClick);
  }

  _handleWindowClick(e) {
    if (!e.target.closest('.nav__item_hav-children')) {
      this.$navItems.removeClass('nav__item_open');
      $(window).off('click', this._handleWindowClick);
    }
  }

  _handleNavItemClick(e) {
    const $target = $(e.currentTarget);

    if ($target.hasClass('nav__item_open')) {
      this.$navItems.removeClass('nav__item_open');
    } else {
      this.$navItems.removeClass('nav__item_open');
      $target.addClass('nav__item_open');
      this._bindWindowEventListener();
    }
  }
}

export default NavMenu;
