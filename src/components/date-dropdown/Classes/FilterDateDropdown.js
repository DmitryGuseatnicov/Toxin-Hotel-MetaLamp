import DateDropdown from './DateDropdown';
import constants from '../utils/constants';

class FilterDateDropdown extends DateDropdown {
  clearValue() {
    this.calendar.clear();
    this.$inputs.val('');
  }

  _clickHandler(e) {
    if (e.target.closest(constants.INPUT)) this._toggle();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
    if (e.target.closest(constants.APPLY)) {
      this._addValue();
      this.close();
    }
  }

  _addValue() {
    const values = this.getValue().replace(' ', '').split(',');
    let firstDate = '';
    let secondDate = '';

    if (values[0]) {
      firstDate = new Date(values[0].split('.').reverse().join('-'))
        .toLocaleString('ru-RU', { day: 'numeric', month: 'short' })
        .replace('.', '');
    }
    if (values[1]) {
      secondDate = new Date(values[1].split('.').reverse().join('-'))
        .toLocaleString('ru-RU', { day: 'numeric', month: 'short' })
        .replace('.', '');
    }
    this.$inputs.val(`${firstDate} ${secondDate ? `- ${secondDate}` : ''}`);
  }
}

export default FilterDateDropdown;
