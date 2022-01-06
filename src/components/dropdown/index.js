import $ from 'jquery'
import { Dropdown, GuestsDropdown } from './Dropdown'
import './dropdown.scss'

$('.js-dropdown').each((i, el)=> new GuestsDropdown(el))
