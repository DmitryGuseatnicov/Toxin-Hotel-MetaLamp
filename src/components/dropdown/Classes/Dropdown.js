import $ from 'jquery';

import DropdownCalculator from './DropdownCalculator';
import constants from '../utils/constants';
import '../dropdown.scss';

class Dropdown {
  constructor(nodeElem) {
    this.$dropdown = $(nodeElem);
    this.init();
  }

  init() {
    this.$input = this.$dropdown.find(constants.INPUT);
    [this.calculator] = this.$dropdown
      .find(constants.CALCULATOR)
      .map((i, el) => new DropdownCalculator(el));
    this.bindEventListener();
  }

  bindEventListener() {
    this.clickHandler = this.clickHandler.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.$dropdown.on('click', this.clickHandler);
    this.$dropdown.on('keydown', this.keyHandler);
  }

  clickHandler(e) {
    if (e.target.closest(constants.DROPDOWN_HEADER)) this.toggle();
  }

  keyHandler(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this.toggle();
    }
  }

  windowClickHandler(e) {
    if (!e.target.closest(constants.DROPDOWN)) this.close();
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.$dropdown.addClass('dropdown_open');
    this.$input.addClass(
      'input__text-field_focused',
      'input__text-field_flat-bottom'
    );
    $(window).on('click', this.windowClickHandler);
  }

  close() {
    this.$dropdown.removeClass('dropdown_open');
    this.$input.removeClass(
      'input__text-field_focused',
      'input__text-field_flat-bottom'
    );
    $(window).off('click', this.windowClickHandler);
  }

  getValue() {
    return this.calculator.getValue();
  }

  get isOpen() {
    return this.$dropdown.hasClass('dropdown_open');
  }
}

export default Dropdown;
