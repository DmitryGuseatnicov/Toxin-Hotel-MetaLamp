import $ from 'jquery';

import Calendar from '../../../libs/Calendar';
import constants from '../utils/constants';

class DateDropdown {
  constructor(nodeElem) {
    this.$dateDropdown = $(nodeElem);
    this.init();
  }

  init() {
    this.$inputs = this.$dateDropdown.find(constants.INPUT);
    this.calendar = new Calendar(this.$dateDropdown.find(constants.ROOT)[0]);
    this._bindEventListener();
  }

  open() {
    this.$dateDropdown.addClass('date-dropdown_open');
    if (window.innerWidth <= 420) this._createPopup();
    $(window).on('click', this._handleWindowClick);
  }

  close() {
    this.$dateDropdown.removeClass('date-dropdown_open');
    $(window).off('click', this._handleWindowClick);
    if (this.popup) this.popup.remove();
  }

  getValue() {
    return this.calendar.selectedDates;
  }

  get isOpen() {
    return this.$dateDropdown.hasClass('date-dropdown_open');
  }

  clearValue() {
    this.calendar.clear();
    this.$inputs.val('');
  }

  _bindEventListener() {
    this._handleWindowClick = this._handleWindowClick.bind(this);
    this._handleDateDropdownClick = this._handleDateDropdownClick.bind(this);
    this._handleDateDropdownKeydown =
      this._handleDateDropdownKeydown.bind(this);

    this.$dateDropdown.on('click', this._handleDateDropdownClick);
    this.$dateDropdown.on('keydown', this._handleDateDropdownKeydown);
  }

  _handleDateDropdownClick(e) {
    if (e.target.closest(constants.ICON)) this._toggle();
    if (e.target.closest(constants.APPLY)) this._addValue();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
  }

  _handleDateDropdownKeydown(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this._toggle();
    }
  }

  _handleWindowClick(e) {
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
}

export default DateDropdown;
