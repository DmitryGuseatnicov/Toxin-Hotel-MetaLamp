import DateDropdown from './DateDropdown';
import toLocaleStringOptions from '../utils/toLocaleStringOptions';

class FilterDateDropdown extends DateDropdown {
  _bindEventListener() {
    super._bindEventListener();
    this._handleInputClick = this._handleInputClick.bind(this);

    this.$inputs.on('click', this._handleInputClick);
  }

  _handleInputClick() {
    this._toggle();
  }

  addValue() {
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
