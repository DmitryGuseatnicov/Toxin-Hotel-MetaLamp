import $ from 'jquery'
import './../widget-title/widget-title'
import { CheckboxList } from './Checkbox-list'
import './checkbox-list.scss'

$('.js-checkbox-list').each((i, el)=>{
  new CheckboxList(el)
})
