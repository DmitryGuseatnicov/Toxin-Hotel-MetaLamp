import toLocaleStringOptions from '../utils/toLocaleStringOptions';
import DateDropdown from './DateDropdown';

class DoubleDateDropdown extends DateDropdown {
  addValue() {
    const [firstDate = '', secondDate = ''] = this.getValue();

    this.$inputs[0].value = firstDate.toLocaleString(
      'ru-Ru',
      toLocaleStringOptions.standard
    );
    this.$inputs[1].value = secondDate.toLocaleString(
      'ru-Ru',
      toLocaleStringOptions.standard
    );

    this.close();
  }
}

export default DoubleDateDropdown;
