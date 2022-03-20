/* eslint-disable no-unused-vars */
import $ from 'jquery';
import slick from 'slick-carousel';

import '../rate-button';
import './room-card.scss';

$('.js-room-card__images').slick({
  nextArrow: `<button type="button" class="slick-next">
                <span class="material-icons">expand_more</span>
              </button>`,
  prevArrow: `<button type="button" class="slick-prev">
                <span class="material-icons">expand_more</span>
              </button>`,
  dots: true,
});
