import $ from 'jquery';

class CheckboxList {
  constructor(nodeElem) {
    this.$checkboxList = $(nodeElem);
    this.init();
  }

  init() {
    this.$toggleButton = this.$checkboxList.find('.js-checkbox-list__icon');
    this.bindEventListener();
  }

  bindEventListener() {
    this.toggle = this.toggle.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.$toggleButton.on('click', this.toggle);
    this.$toggleButton.on('keydown', this.keyHandler);
  }

  keyHandler(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this.toggle();
    }
  }

  toggle() {
    this.$checkboxList.toggleClass('checkbox-list_open');
  }
}

export default CheckboxList;
