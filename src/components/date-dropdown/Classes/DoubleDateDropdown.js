import DateDropdown from './DateDropdown';

class DoubleDateDropdown extends DateDropdown {
  addValue() {
    const values = this.getValue().split(',');
    this.$inputs[0].value = values[0] ?? '';
    this.$inputs[1].value = values[1] ?? '';
    this.close();
  }

  clearValue() {
    this.calendar.clear();
    this.$inputs[0].value = '';
    this.$inputs[1].value = '';
  }
}

export default DoubleDateDropdown;
