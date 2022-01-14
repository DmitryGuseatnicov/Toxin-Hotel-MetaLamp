import $ from 'jquery'
import {  DateDropdownFactory } from './Date-dropdown'
import './../input'
import './../button'
import './../calendar'
import './date-dropdown.scss'


$('.date-dropdown').each((i, el)=> new DateDropdownFactory(el))


