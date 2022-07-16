import $ from 'jquery';
import wNumb from 'wnumb';

import constants from '../utils/constants';

const numFormate = wNumb({
  thousand: ' ',
});

class BookingForm {
  constructor(nodeElem) {
    this.$bookingForm = $(nodeElem);
    this.init();
  }

  init() {
    this.$daysInputs = this.$bookingForm.find(constants.INPUTS);
    this.$totalPrice = this.$bookingForm.find(constants.TOTAL_PRICE);
    this.$calculation = this.$bookingForm.find(constants.CALCULATION);
    this.$price = this.$bookingForm.find(constants.PRICE);

    this.priceForDay = this.$bookingForm
      .find(constants.PRICE_FOR_DAY)
      .text()
      .replace(/[^+\d]/g, '');
    this.additionally = this.$bookingForm
      .find(constants.ADDITIONALLY)
      .text()
      .replace(/[^+\d]/g, '');
    this.sale = this.$bookingForm
      .find(constants.SALE)
      .text()
      .replace(/[^+\d]/g, '');

    this.calculatePrice();
    this._bindEventListener();
  }

  calculatePrice() {
    const days = this._getDays();
    const isCorrectDaysValue = typeof days === 'number' && !Number.isNaN(days);

    if (isCorrectDaysValue) {
      const totalPrice = days * this.priceForDay;
      const correctPrice = +totalPrice - +this.sale + +this.additionally;

      this.$calculation.text(
        `${numFormate.to(+this.priceForDay)}₽ х ${days} суток`
      );
      this.$price.text(`${numFormate.to(totalPrice)}₽`);
      this.$totalPrice.text(`${numFormate.to(correctPrice)}₽`);
    }
  }

  _getDays() {
    const dates = this.$daysInputs.map((i, el) => el.value);

    const firstDate = new Date(dates[0].split('.').reverse().join('-'));

    const secondDate = new Date(dates[1].split('.').reverse().join('-'));

    const timeDiff = Math.abs(secondDate.getTime() - firstDate.getTime());
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return days;
  }

  _bindEventListener() {
    this._handleDateDropdownChange = this._handleDateDropdownChange.bind(this);
    this._handleDateDropdownInput = this._handleDateDropdownInput.bind(this);
    this.$daysInputs.on('change', this._handleDateDropdownChange);
    this.$daysInputs.on('input', this._handleDateDropdownInput);
  }

  _handleDateDropdownChange() {
    this.calculatePrice();
  }

  _handleDateDropdownInput() {
    this.calculatePrice();
  }
}

export default BookingForm;
