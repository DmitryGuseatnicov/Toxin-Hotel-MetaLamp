import $ from 'jquery';

import '../../page-layout/page-template';
import '../../components/room-search-form';
import './landing-page.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
