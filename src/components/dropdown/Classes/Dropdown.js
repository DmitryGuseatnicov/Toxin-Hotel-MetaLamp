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
    try {
      this.$input = this.$dropdown.find(constants.INPUT);
      [this.calculator] = this.$dropdown.find(constants.CALCULATOR)
        .map((i, el) => new DropdownCalculator(el));
      this.bindEventListener();
    } catch (error) {
      console.log(error);
    }
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
    this.$dropdown.addClass('dropdown--open');
  }

  close() {
    this.$dropdown.removeClass('dropdown--open');
  }

  getValue() {
    return this.calculator.getValue();
  }

  get isOpen() {
    return this.$dropdown.hasClass('dropdown--open');
  }
}

export default Dropdown;
