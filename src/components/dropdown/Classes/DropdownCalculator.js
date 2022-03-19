/* eslint-disable class-methods-use-this */
import $ from 'jquery';

import constants from '../utils/constants';

class DropdownCalculator {
  constructor(nodeElem) {
    this.$calculator = $(nodeElem);
    this.init();
  }

  init() {
    this.$calcItems = this.$calculator.find(constants.CALC_ITEMS);
    this.$calcItems.each((i, el) => this.disabledButtonSwitcher(el));
    this.bindEventListener();
  }

  bindEventListener() {
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.$calcItems.on('click', this.clickHandler);
    this.$calcItems.on('DOMSubtreeModified', this.changeHandler);
  }

  clickHandler(e) {
    if (e.target.closest(constants.PLUS)) this.plus(e.currentTarget);
    if (e.target.closest(constants.MINUS)) this.minus(e.currentTarget);
  }

  changeHandler(e) {
    this.disabledButtonSwitcher(e.currentTarget);
  }

  plus(target) {
    const $value = $(target).find(constants.VALUE);
    $value.text(+$value.text() + 1);
  }

  minus(target) {
    const $value = $(target).find(constants.VALUE);
    $value.text(+$value.text() - 1);
  }

  disabledButtonSwitcher(nodeElem) {
    if (this.getIsZeroValue(nodeElem)) {
      $(nodeElem).find(constants.MINUS).attr('disabled', 'disabled');
      return;
    }
    $(nodeElem).find(constants.MINUS).removeAttr('disabled');
  }

  getIsZeroValue(nodeElem) {
    return $(nodeElem).find(constants.VALUE).text() <= 0;
  }

  getValue() {
    const result = [];

    this.$calcItems.each((i, el) => {
      if ($(el).find(constants.VALUE).text() > 0) {
        const name = $(el).find(constants.NAME).text();
        const value = $(el).find(constants.VALUE).text();
        result.push({ name, value });
      }
    });
    return result;
  }

  clearValue() {
    this.$calculator.find(constants.VALUE).text(0);
  }
}

export default DropdownCalculator;
