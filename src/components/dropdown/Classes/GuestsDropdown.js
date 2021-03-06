import Dropdown from './Dropdown';
import textHelper from '../utils/textHelper';
import constants from '../utils/constants';

class GuestsDropdown extends Dropdown {
  init() {
    this.$clearBtn = this.$dropdown.find(constants.CLEAR);
    this.$applyBtn = this.$dropdown.find(constants.APPLY);
    super.init();
    this._hiddenButtonSwitcher();
    this._showValue();
  }

  clearValue() {
    this.calculator.clearValue();
    this._showValue();
  }

  _bindEventListener() {
    super._bindEventListener();
    this._handleClearButtonClick = this._handleClearButtonClick.bind(this);
    this._handleApplyButtonClick = this._handleApplyButtonClick.bind(this);
    this._handleDropItemsClick = this._handleDropItemsClick.bind(this);

    this.$clearBtn.on('click', this._handleClearButtonClick);
    this.$applyBtn.on('click', this._handleApplyButtonClick);
    this.$calcItems.on('click', this._handleDropItemsClick);
  }

  _handleClearButtonClick() {
    this.clearValue();
  }

  _handleApplyButtonClick() {
    this._showValue();
    this.close();
  }

  _handleDropItemsClick() {
    this._hiddenButtonSwitcher();
  }

  _hiddenButtonSwitcher() {
    if (this._isZeroTotalCount) {
      this.$clearBtn.addClass('dropdown__button-clear_hidden');
    } else {
      this.$clearBtn.removeClass('dropdown__button-clear_hidden');
    }
  }

  _showValue() {
    let guests = 0;
    let baby = 0;

    this.getValue().forEach((el) => {
      if (el.name !== 'младенцы') {
        guests += +el.value;
      } else {
        baby += +el.value;
      }
    });

    const value = `${
      guests > 0 ? `${guests} ${textHelper('гости', guests)},` : ''
    }${baby > 0 ? ` ${baby} ${textHelper('младенцы', baby)} ` : ''}`;

    this.$input.val(value.replace(/.$/, ''));
  }

  get _isZeroTotalCount() {
    let totalCount = 0;
    this.getValue().forEach((el) => {
      totalCount += +el.value;
    });
    return totalCount === 0;
  }
}

export default GuestsDropdown;
