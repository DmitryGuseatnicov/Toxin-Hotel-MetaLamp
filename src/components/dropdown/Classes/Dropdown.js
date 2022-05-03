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
    this._bindEventListener();
  }

  open() {
    this.$dropdown.addClass('dropdown_open');
    this.$input.addClass(
      'input__text-field_focused',
      'input__text-field_flat-bottom'
    );
    $(window).on('click', this._windowClickHandler);
  }

  close() {
    this.$dropdown.removeClass('dropdown_open');
    this.$input.removeClass(
      'input__text-field_focused',
      'input__text-field_flat-bottom'
    );
    $(window).off('click', this._windowClickHandler);
  }

  getValue() {
    return this.calculator.getValue();
  }

  get isOpen() {
    return this.$dropdown.hasClass('dropdown_open');
  }

  _bindEventListener() {
    this._clickHandler = this._clickHandler.bind(this);
    this._keyHandler = this._keyHandler.bind(this);
    this._windowClickHandler = this._windowClickHandler.bind(this);
    this.$dropdown.on('click', this._clickHandler);
    this.$dropdown.on('keydown', this._keyHandler);
  }

  _clickHandler(e) {
    if (e.target.closest(constants.DROPDOWN_HEADER)) this._toggle();
  }

  _keyHandler(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this._toggle();
    }
  }

  _windowClickHandler(e) {
    if (!e.target.closest(constants.DROPDOWN)) this.close();
  }

  _toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

export default Dropdown;
