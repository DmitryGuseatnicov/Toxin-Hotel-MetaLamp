import $ from 'jquery'
import { rangeSlider } from './Range-slider'
import './../../components/widget-title/widget-title'
import './range-slider.scss'

$('.js-range-slider').each((i, el )=> new rangeSlider(el))