import $ from 'jquery';
import wNumb from 'wnumb';
import Slider from '../../../libs/Slider';

import constants from '../utils/constants';

const numFormate = wNumb({
  thousand: ' ',
});

class rangeSlider {
  constructor(nodeElem) {
    this.$rangeSlider = $(nodeElem);
    this.init();
  }

  init() {
    this.$start = this.$rangeSlider.find(constants.START);
    this.$end = this.$rangeSlider.find(constants.END);
    this.$value = this.$rangeSlider.find(constants.VALUE);

    this.slider = new Slider($(constants.SLIDER)[0], {
      start: [this.$start.attr('value'), this.$end.attr('value')],
      min: this.$start.attr('min'),
      max: this.$end.attr('max'),
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

    this.$value.text(
      `${numFormate.to(+values[0])}₽ - ${numFormate.to(+values[1])}₽`
    );
  }
}

export default rangeSlider;
