import $ from 'jquery';

class CheckboxList {
  constructor(nodeElem) {
    this.$checkboxList = $(nodeElem);
    this.init();
  }

  init() {
    this.$toggleButton = this.$checkboxList.find('.js-checkbox-list__icon');
    this._bindEventListener();
  }

  toggle() {
    this.$checkboxList.toggleClass('checkbox-list_open');
  }

  _bindEventListener() {
    this.toggle = this.toggle.bind(this);
    this._keyHandler = this._keyHandler.bind(this);
    this.$toggleButton.on('click', this.toggle);
    this.$toggleButton.on('keydown', this._keyHandler);
  }

  _keyHandler(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this.toggle();
    }
  }
}

export default CheckboxList;
