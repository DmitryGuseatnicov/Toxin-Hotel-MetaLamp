/* eslint-disable no-unused-vars */
import $ from 'jquery';
import slick from 'slick-carousel';
import options from './options';
import './index.scss';

class Carousel {
  init(selector) {
    this.selector = selector;
    this.createSliders();
  }

  createSliders() {
    $(this.selector).slick(options);
  }
}

export default Carousel;
