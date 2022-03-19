import $ from 'jquery';

import LikeButton from './Classes/Like-button';
import './like-button.scss';

$('.js-like-button').each((i, el) => new LikeButton(el));
