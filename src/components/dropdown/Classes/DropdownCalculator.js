/* eslint-disable class-methods-use-this */
import $ from 'jquery';

import constants from '../utils/constants';

class DropdownCalculator {
  constructor(nodeElem) {
    this.$calculator = $(nodeElem);
    this.init();
  }

  init() {
    this.$calcItems = this.$calculator.find(constants.DROP_ITEM);
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
    this._handleItemClick = this._handleItemClick.bind(this);
    this.$calcItems.on('click', this._handleItemClick);
  }

  _handleItemClick(e) {
    if (e.target.closest(constants.PLUS)) this._plus(e.currentTarget);
    if (e.target.closest(constants.MINUS)) this._minus(e.currentTarget);
  }

  _plus(target) {
    const $value = $(target).find(constants.VALUE);
    $value.text(+$value.text() + 1);
    this._disabledButtonSwitcher(target);
  }

  _minus(target) {
    const $value = $(target).find(constants.VALUE);
    $value.text(+$value.text() - 1);
    this._disabledButtonSwitcher(target);
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
