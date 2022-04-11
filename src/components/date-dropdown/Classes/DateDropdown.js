import $ from 'jquery';

import AirDatepicker from 'air-datepicker';
import options from '../../calendar/calendar';
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
    this.calendar = new AirDatepicker(this.id, options);
    this.bindEventListener();
  }

  bindEventListener() {
    this.clickHandler = this.clickHandler.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.$dateDropdown.on('click', this.clickHandler);
    this.$dateDropdown.on('keydown', this.keyHandler);
  }

  clickHandler(e) {
    if (e.target.closest(constants.ICON)) this.toggle();
    if (e.target.closest(constants.APPLY)) this.addValue();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
  }

  keyHandler(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this.toggle();
    }
  }

  windowClickHandler(e) {
    const isOutside =
      !e.target.closest(constants.DATE_DROPDOWN) &&
      !e.target.closest('.-other-month-');

    if (isOutside) this.close();
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.$dateDropdown.addClass('date-dropdown_open');
    if (window.innerWidth <= 420) this.createPopup();
    $(window).on('click', this.windowClickHandler);
  }

  close() {
    this.$dateDropdown.removeClass('date-dropdown_open');
    $(window).off('click', this.windowClickHandler);
    if (this.popup) this.popup.remove();
  }

  get isOpen() {
    return this.$dateDropdown.hasClass('date-dropdown_open');
  }

  createPopup() {
    this.popup = $('<div class="date-dropdown__popup"></div>');
    $('body').append(this.popup);
  }

  getValue() {
    return this.$rootInput.val();
  }

  addValue() {
    this.$inputs.val(this.getValue());
  }

  clearValue() {
    this.calendar.clear();
  }
}

export default DateDropdown;
