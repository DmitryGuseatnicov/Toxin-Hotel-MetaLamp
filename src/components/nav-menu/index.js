import $ from 'jquery';

import NavMenu from './Classes/NavMenu';
import './nav-menu.scss';

$('.js-nav').each((i, el) => new NavMenu($(el)));
