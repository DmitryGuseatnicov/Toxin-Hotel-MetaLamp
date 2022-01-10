import $ from 'jquery'
import {  DateDropdownFactory } from './Date-dropdown'
import './../calendar/index'
import './date-dropdown.scss'

$('.date-dropdown').each((i, el)=> new DateDropdownFactory(el))


