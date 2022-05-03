import $ from 'jquery';
import Inputmask from 'inputmask';

class InputMaskCreator {
  constructor(nodeElem) {
    this.$input = nodeElem;
    this.mask = $(this.$input).data().mask;
    this.init();
  }

  init() {
    this._maskHandler();
  }

  _maskHandler() {
    if (this.mask === 'data') this._createDataMask();
    if (this.mask === 'tel') this._createTelMask();
  }

  _createDataMask() {
    const im = new Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
      showMaskOnHover: false,
      showMaskOnFocus: true,
    });
    im.mask(this.$input);
  }

  _createTelMask() {
    const im = new Inputmask('+7(999) 999-9999');
    im.mask(this.$input);
  }
}

export default InputMaskCreator;
