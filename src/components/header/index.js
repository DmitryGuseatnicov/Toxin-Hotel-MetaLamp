import $ from 'jquery'
import { Header } from './Header'
import './../logo'
import './../button'
import './../nav-menu'
import './header.scss'

$('.header').each((i, el) =>{
  new Header(el)
})