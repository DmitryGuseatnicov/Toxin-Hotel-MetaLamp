import $ from 'jquery';

import Calendar from '../../../libs/Calendar';
import constants from '../utils/constants';

class DateDropdown {
  constructor(nodeElem) {
    this.$dateDropdown = $(nodeElem);
    this.init();
  }

  init() {
    this.calendar = new Calendar(this.$dateDropdown.find(constants.ROOT)[0]);

    this.$inputs = this.$dateDropdown.find(constants.INPUT);
    this.$icon = this.$dateDropdown.find(constants.ICON);
    this.$clearButton = this.$dateDropdown.find(constants.CLEAR);
    this.$applyButton = this.$dateDropdown.find(constants.APPLY);

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

  addValue() {
    const values = this.getValue();
    this.$inputs.val(`${values.join(' ')}`);
  }

  _bindEventListener() {
    this._handleWindowClick = this._handleWindowClick.bind(this);
    this._handleInputIconClick = this._handleInputIconClick.bind(this);
    this._handleClearButtonClick = this._handleClearButtonClick.bind(this);
    this._handleApplyButtonClick = this._handleApplyButtonClick.bind(this);
    this._handleDateDropdownKeydown =
      this._handleDateDropdownKeydown.bind(this);

    this.$icon.on('click', this._handleInputIconClick);
    this.$clearButton.on('click', this._handleClearButtonClick);
    this.$applyButton.on('click', this._handleApplyButtonClick);
    this.$dateDropdown.on('keydown', this._handleDateDropdownKeydown);
  }

  _handleInputIconClick(e) {
    e.stopPropagation();
    this._toggle();
  }

  _handleClearButtonClick() {
    this.clearValue();
  }

  _handleApplyButtonClick() {
    this.addValue();
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
