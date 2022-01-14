import $ from 'jquery' 
import { InputMaskCreator } from './InputMaskCreator' 
import './../widget-title'
import './input.scss'

$('[data-mask]').each((i, el) => new InputMaskCreator(el))