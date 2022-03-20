import $ from 'jquery';

import Header from './Classes/Header';
import '../logo';
import '../button';
import '../nav-menu';
import './header.scss';

$('.js-header').each((i, el) => new Header(el));
