import $ from 'jquery';
import Inputmask from 'inputmask';

class InputMaskCreator {
  constructor(nodeElem) {
    try {
      this.$input = nodeElem;
      this.mask = $(this.$input).data().mask;
      this.init();
    } catch (error) {
      console.log(error);
    }
  }

  init() {
    this.maskHandler();
  }

  maskHandler() {
    if (this.mask === 'data') this.createDataMask();
    if (this.mask === 'tel') this.createTelMask();
  }

  createDataMask() {
    const im = new Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
      showMaskOnHover: false,
      showMaskOnFocus: true,
    });
    im.mask(this.$input);
  }

  createTelMask() {
    const im = new Inputmask('+7(999) 999-9999');
    im.mask(this.$input);
  }
}

export default InputMaskCreator;
