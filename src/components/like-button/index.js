import $ from 'jquery'
import { LikeButton } from './like-button'
import './like-button.scss'


$('.js-like-button').each((i, el)=> new LikeButton(el))