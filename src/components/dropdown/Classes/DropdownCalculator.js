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
    this.$calcItems.each((i, el) => this._disabledButtonSwitcher(el));
    this._bindEventListener();
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

  _bindEventListener() {
    this._clickHandler = this._clickHandler.bind(this);
    this._changeHandler = this._changeHandler.bind(this);
    this.$calcItems.on('click', this._clickHandler);
    this.$calcItems.on('DOMSubtreeModified', this._changeHandler);
  }

  _clickHandler(e) {
    if (e.target.closest(constants.PLUS)) this._plus(e.currentTarget);
    if (e.target.closest(constants.MINUS)) this._minus(e.currentTarget);
  }

  _changeHandler(e) {
    this._disabledButtonSwitcher(e.currentTarget);
  }

  _plus(target) {
    const $value = $(target).find(constants.VALUE);
    $value.text(+$value.text() + 1);
  }

  _minus(target) {
    const $value = $(target).find(constants.VALUE);
    $value.text(+$value.text() - 1);
  }

  _disabledButtonSwitcher(nodeElem) {
    if (this._getIsZeroValue(nodeElem)) {
      $(nodeElem).find(constants.MINUS).attr('disabled', 'disabled');
      return;
    }
    $(nodeElem).find(constants.MINUS).removeAttr('disabled');
  }

  _getIsZeroValue(nodeElem) {
    return $(nodeElem).find(constants.VALUE).text() <= 0;
  }
}

export default DropdownCalculator;
