import $ from 'jquery';

import constants from '../utils/constants';

class NavMenu {
  constructor($navMenu) {
    this.$navMenu = $navMenu;
    this.init();
  }

  init() {
    this.$navItems = this.$navMenu.find(constants.NAV_ITEMS);
    this.bindEventListener();
  }

  bindEventListener() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$navItems.on('click', this.clickHandler);
  }

  bindWindowEventListener() {
    this.windowClickHandler = this.windowClickHandler.bind(this);
    $(window).on('click', this.windowClickHandler);
  }

  windowClickHandler(e) {
    if (!e.target.closest('.nav__item_hav-childrens')) {
      this.$navItems.removeClass('nav__item_open');
      $(window).off('click', this.windowClickHandler);
    }
  }

  clickHandler(e) {
    if (e.target.closest('.nav__item_hav-childrens')) {
      if (e.target.closest('.nav__item-link')) {
        this.toggle(e.currentTarget);
      }
    }
  }

  toggle(target) {
    this.bindWindowEventListener();
    $(target).toggleClass('nav__item_open');
  }
}

export default NavMenu;
