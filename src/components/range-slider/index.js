import $ from 'jquery'
import { rangeSlider } from './Range-slider'
import './../widget-title/'
import './range-slider.scss'

$('.js-range-slider').each((i, el )=> new rangeSlider(el))