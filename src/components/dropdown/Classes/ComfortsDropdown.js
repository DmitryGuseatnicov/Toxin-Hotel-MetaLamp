import Dropdown from './Dropdown';
import textHelper from '../utils/textHelper';

class ComfortsDropdown extends Dropdown {
  init() {
    super.init();
    this.showValue();
  }

  close() {
    super.close();
    this.showValue();
  }

  clearValue() {
    this.calculator.clearValue();
    this.showValue();
  }

  showValue() {
    let value = '';
    this.getValue().forEach((el) => {
      value += ` ${el.value} ${textHelper(el.name, el.value)},`;
    });
    this.$input.val(value.slice(1, -1));
  }
}

export default ComfortsDropdown;
