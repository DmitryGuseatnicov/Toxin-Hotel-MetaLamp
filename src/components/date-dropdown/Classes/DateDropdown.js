import $ from 'jquery';

import Calendar from '../../../libs/Calendar';
import constants from '../utils/constants';

class DateDropdown {
  constructor(nodeElem) {
    this.$dateDropdown = $(nodeElem);
    this.init();
  }

  init() {
    this.$rootInput = this.$dateDropdown.find(constants.ROOT__INPUT);
    this.id = `#${this.$rootInput.attr('id')}`;
    this.$inputs = this.$dateDropdown.find(constants.INPUTS);
    this.calendar = new Calendar(this.id);
    this._bindEventListener();
  }

  open() {
    this.$dateDropdown.addClass('date-dropdown_open');
    if (window.innerWidth <= 420) this._createPopup();
    $(window).on('click', this._windowClickHandler);
  }

  close() {
    this.$dateDropdown.removeClass('date-dropdown_open');
    $(window).off('click', this._windowClickHandler);
    if (this.popup) this.popup.remove();
  }

  getValue() {
    return this.$rootInput.val();
  }

  get isOpen() {
    return this.$dateDropdown.hasClass('date-dropdown_open');
  }

  clearValue() {
    this.calendar.clear();
  }

  _bindEventListener() {
    this._clickHandler = this._clickHandler.bind(this);
    this._keyHandler = this._keyHandler.bind(this);
    this._windowClickHandler = this._windowClickHandler.bind(this);
    this.$dateDropdown.on('click', this._clickHandler);
    this.$dateDropdown.on('keydown', this._keyHandler);
  }

  _clickHandler(e) {
    if (e.target.closest(constants.ICON)) this._toggle();
    if (e.target.closest(constants.APPLY)) this._addValue();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
  }

  _keyHandler(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this._toggle();
    }
  }

  _windowClickHandler(e) {
    const isOutside =
      !e.target.closest(constants.DATE_DROPDOWN) &&
      !e.target.closest('.-other-month-');

    if (isOutside) this.close();
  }

  _toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  _createPopup() {
    this.popup = $('<div class="date-dropdown__popup"></div>');
    $('body').append(this.popup);
  }

  _addValue() {
    this.$inputs.val(this.getValue());
  }
}

export default DateDropdown;
