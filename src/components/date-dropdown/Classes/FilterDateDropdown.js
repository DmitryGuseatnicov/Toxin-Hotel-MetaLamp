import DateDropdown from './DateDropdown';
import toLocaleStringOptions from '../utils/toLocaleStringOptions';

class FilterDateDropdown extends DateDropdown {
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
