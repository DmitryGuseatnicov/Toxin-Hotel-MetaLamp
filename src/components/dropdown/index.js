import $ from 'jquery'
import { ComfortsDropdown, Dropdown, GuestsDropdown } from './Dropdown'
import './dropdown.scss'

$('.js-dropdown').each((i, el)=> new GuestsDropdown(el))
