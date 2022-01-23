import $ from 'jquery';
import RangeSlider from './Classes/RangeSlider';
import '../widget-title';
import './range-slider.scss';

$('.js-range-slider').each((i, el) => new RangeSlider(el));
