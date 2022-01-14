import $ from 'jquery'
import { DropdownFactory } from './Dropdown'
import './../input'
import './../button'
import './dropdown.scss'

$('.js-dropdown').each((i, el)=> new DropdownFactory(el))
