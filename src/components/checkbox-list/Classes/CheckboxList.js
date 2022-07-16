import $ from 'jquery';

class CheckboxList {
  constructor(nodeElem) {
    this.$checkboxList = $(nodeElem);
    this.init();
  }

  init() {
    this.$visibilityToggle = this.$checkboxList.find(
      '.js-checkbox-list__visibility-toggle'
    );
    this._bindEventListener();
  }

  toggle() {
    this.$checkboxList.toggleClass('checkbox-list_open');
  }

  _bindEventListener() {
    this._handleVisibilityToggleClick =
      this._handleVisibilityToggleClick.bind(this);
    this._handleVisibilityToggleKeyDown =
      this._handleVisibilityToggleKeyDown.bind(this);

    this.$visibilityToggle.on('click', this._handleVisibilityToggleClick);
    this.$visibilityToggle.on('keydown', this._handleVisibilityToggleKeyDown);
  }

  _handleVisibilityToggleClick() {
    this.toggle();
  }

  _handleVisibilityToggleKeyDown(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this.toggle();
    }
  }
}

export default CheckboxList;
