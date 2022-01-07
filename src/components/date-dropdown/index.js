import $ from 'jquery'
import { DateDropdown } from './Date-dropdown'
import './../calendar/index'
import './date-dropdown.scss'

$('.date-dropdown').each((i, el)=> new DateDropdown(el))


