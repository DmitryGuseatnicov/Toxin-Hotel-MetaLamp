import $ from 'jquery';

class CheckboxList {
  constructor(nodeElem) {
    this.$checkboxList = $(nodeElem);
    this.init();
  }

  init() {
    this.$toggleButton = this.$checkboxList.find('.checkbox-list__icon');
    this.bindEventListener();
  }

  bindEventListener() {
    this.toggle = this.toggle.bind(this);
    this.$toggleButton.on('click', this.toggle);
  }

  toggle() {
    this.$checkboxList.toggleClass('checkbox-list_open');
  }
}

export default CheckboxList;
