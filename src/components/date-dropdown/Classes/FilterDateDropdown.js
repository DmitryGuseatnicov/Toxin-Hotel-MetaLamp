import DateDropdown from './DateDropdown';
import toLocaleStringOptions from '../utils/toLocaleStringOptions';
import constants from '../utils/constants';

class FilterDateDropdown extends DateDropdown {
  _handleDateDropdownClick(e) {
    if (e.target.closest(constants.INPUT_WRAPPER)) this._toggle();
    if (e.target.closest(constants.APPLY)) this._addValue();
    if (e.target.closest(constants.CLEAR)) this.clearValue();
  }

  _addValue() {
    let [firstDate = '', secondDate = ''] = this.getValue();

    firstDate = firstDate
      .toLocaleString('ru-RU', toLocaleStringOptions.short)
      .replace('.', '');

    secondDate = `${
      secondDate
        ? `- ${secondDate
            .toLocaleString('ru-RU', toLocaleStringOptions.short)
            .replace('.', '')}`
        : ''
    }`;

    this.$inputs.val(`${firstDate} ${secondDate}`);
    this.close();
  }
}

export default FilterDateDropdown;
