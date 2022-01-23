import DateDropdown from './DateDropdown';
import constants from '../utils/constants';

class FilterDateDropdown extends DateDropdown {
  clickHandler(e) {
    if (e.target.closest(constants.INPUT)) this.toggle();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
    if (e.target.closest(constants.APPLY)) {
      this.addValue();
      this.close();
    }
  }

  addValue() {
    const values = this.getValue().replace(' ', '').split(',');
    let firstDate = '';
    let secondDate = '';

    if (values[0]) {
      firstDate = new Date(values[0]
        .split('.')
        .reverse()
        .join('-'))
        .toLocaleString('ru-RU', { day: 'numeric', month: 'short' })
        .replace('.', '');
    }
    if (values[1]) {
      secondDate = new Date(values[1]
        .split('.')
        .reverse()
        .join('-'))
        .toLocaleString('ru-RU', { day: 'numeric', month: 'short' })
        .replace('.', '');
    }
    this.$inputs.val(`${firstDate} ${secondDate ? `- ${secondDate}` : ''}`);
  }

  clearValue() {
    this.calendar.clear();
    this.$inputs.val('');
  }
}

export default FilterDateDropdown;
