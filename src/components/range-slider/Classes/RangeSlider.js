import $ from 'jquery';
import noUiSlider from 'nouislider';

import constants from '../utils/constants';
import 'nouislider/dist/nouislider.css';

class rangeSlider {
  constructor(nodeElem) {
    this.$rangeSlider = $(nodeElem);
    this.init();
  }

  init() {
    this.$start = this.$rangeSlider.find(constants.START);
    this.$end = this.$rangeSlider.find(constants.END);
    this.$value = this.$rangeSlider.find(constants.VALUE);
    this.slider = noUiSlider.create(this.$rangeSlider.find(constants.SLIDER)[0], {
      start: [this.$start.attr('value'), this.$end.attr('value')],
      step: 5,
      range: {
        min: [parseInt(this.$start.attr('min'), 10)],
        max: [parseInt(this.$end.attr('max'), 10)],
      },
      connect: true,
    });

    this.bindEventListener();
  }

  bindEventListener() {
    this.changeHandler = this.changeHandler.bind(this);
    this.slider.on('update.one', this.changeHandler);
  }

  changeHandler(values) {
    this.$start.val(values[0]);
    this.$end.val(values[1]);
    this.$value.text(`${Math.round(values[0])}₽ - ${Math.round(values[1])}₽`);
  }
}

export default rangeSlider;
