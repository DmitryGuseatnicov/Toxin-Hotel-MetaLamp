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
    [this.calculator] = this.$dropdown.find(constants.CALCULATOR)
      .map((i, el) => new DropdownCalculator(el));
    this.bindEventListener();
  }

  bindEventListener() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$dropdown.on('click', this.clickHandler);
  }

  clickHandler(e) {
    if (e.target.closest('.dropdown__header')) this.toggle();
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
  }

  close() {
    this.$dropdown.removeClass('dropdown_open');
  }

  getValue() {
    return this.calculator.getValue();
  }

  get isOpen() {
    return this.$dropdown.hasClass('dropdown_open');
  }
}

export default Dropdown;
