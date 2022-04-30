import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import './index.scss';

class Slider {
  constructor(selector, options) {
    return this.init(selector, options);
  }

  init(selector, options) {
    const { start, min, max } = options;
    this.slider = noUiSlider.create(selector, {
      start,
      step: 5,
      range: {
        min: [parseInt(min, 10)],
        max: [parseInt(max, 10)],
      },
      connect: true,
    });

    return this.slider;
  }
}

export default Slider;
