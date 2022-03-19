import Dropdown from './Dropdown';
import textHelper from '../utils/textHelper';
import constants from '../utils/constants';

class GuestsDropdown extends Dropdown {
  init() {
    try {
      this.$clearBtn = this.$dropdown.find(constants.CLEAR);
      this.$applyBtn = this.$dropdown.find(constants.APPLY);
      super.init();
      this.hiddenButtonSwitcher();
      this.showValue();
    } catch (error) {
      console.log(error);
    }
  }

  clickHandler(e) {
    super.clickHandler(e);
    if (e.target.closest(constants.CLEAR)) this.clearValue();
    if (e.target.closest(constants.APPLY)) {
      this.showValue();
      this.close();
    }
    this.hiddenButtonSwitcher();
  }

  clearValue() {
    this.calculator.clearValue();
    this.showValue();
  }

  hiddenButtonSwitcher() {
    if (this.isZeroTotalCount) {
      this.$clearBtn.addClass('dropdown__button-clear--hidden');
    } else {
      this.$clearBtn.removeClass('dropdown__button-clear--hidden');
    }
  }

  showValue() {
    let guests = 0;
    let baby = 0;

    this.getValue().forEach((el) => {
      if (el.name !== 'младенцы') {
        guests += +el.value;
      } else {
        baby += +el.value;
      }
    });

    const value = `${guests > 0
      ? `${guests} ${textHelper('гости', guests)},`
      : ''}${baby > 0 ? ` ${baby} ${textHelper('младенцы', baby)} ` : ''}`;

    this.$input.val(value.replace(/.$/, ''));
  }

  get isZeroTotalCount() {
    let totalCount = 0;
    this.getValue().forEach((el) => {
      totalCount += +el.value;
    });
    return totalCount === 0;
  }
}

export default GuestsDropdown;
