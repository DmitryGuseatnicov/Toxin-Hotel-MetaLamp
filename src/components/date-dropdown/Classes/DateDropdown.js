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
    this.$dateDropdown.on('click', this.clickHandler);
  }

  clickHandler(e) {
    if (e.target.closest(constants.ICON)) this.toggle();
    if (e.target.closest(constants.APPLY)) this.addValue();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
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
  }

  close() {
    this.$dateDropdown.removeClass('date-dropdown_open');
  }

  get isOpen() {
    return this.$dateDropdown.hasClass('date-dropdown_open');
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
