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
    this.$inputWrapper = this.$dropdown.find(constants.INPUT_WRAPPER);

    this.$calcItems = this.$dropdown.find(constants.CALCULATOR);
    this.calculator = new DropdownCalculator(this.$calcItems[0]);

    this._bindEventListener();
  }

  open() {
    this.$dropdown.addClass('dropdown_open');
    this.$input.addClass(
      'input__text-field_focused input__text-field_flat-bottom'
    );
    $(window).on('click', this._handleWindowClick);
  }

  close() {
    this.$dropdown.removeClass('dropdown_open');
    this.$input.removeClass(
      'input__text-field_focused input__text-field_flat-bottom'
    );
    $(window).off('click', this._handleWindowClick);
  }

  getValue() {
    return this.calculator.getValue();
  }

  get isOpen() {
    return this.$dropdown.hasClass('dropdown_open');
  }

  _bindEventListener() {
    this._handleWindowClick = this._handleWindowClick.bind(this);
    this._handleInputWrapperClick = this._handleInputWrapperClick.bind(this);
    this._handleInputWrapperKeydown =
      this._handleInputWrapperKeydown.bind(this);

    this.$inputWrapper.on('click', this._handleInputWrapperClick);
    this.$inputWrapper.on('keydown', this._handleInputWrapperKeydown);
  }

  _handleInputWrapperClick() {
    this._toggle();
  }

  _handleInputWrapperKeydown(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this._toggle();
    }
  }

  _handleWindowClick(e) {
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
