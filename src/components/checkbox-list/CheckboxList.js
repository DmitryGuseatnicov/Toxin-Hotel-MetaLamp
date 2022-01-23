import $ from 'jquery';

class CheckboxList {
  constructor(nodeElem) {
    this.$checkboxList = $(nodeElem);
    console.log(this.$checkboxList);
    this.init();
  }

  init() {
    try {
      this.$toggleButton = this.$checkboxList.find('.checkbox-list__icon');
      this.bindEventListener();
    } catch (error) {
      console.log(error);
    }
  }

  bindEventListener() {
    this.toggle = this.toggle.bind(this);
    this.$toggleButton.on('click', this.toggle);
  }

  toggle() {
    this.$checkboxList.toggleClass('checkbox-list--open');
  }
}

export default CheckboxList;
