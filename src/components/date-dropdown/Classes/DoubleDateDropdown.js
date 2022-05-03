import DateDropdown from './DateDropdown';

class DoubleDateDropdown extends DateDropdown {
  clearValue() {
    this.calendar.clear();
    this.$inputs[0].value = '';
    this.$inputs[1].value = '';
  }

  _addValue() {
    const values = this.getValue().split(',');
    this.$inputs[0].value = values[0] ? values[0] : '';
    this.$inputs[1].value = values[1] ? values[1] : '';
    this.close();
    this.$inputs.change();
  }
}

export default DoubleDateDropdown;
