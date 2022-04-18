import $ from 'jquery';

import '../../page-layout/page-template';
import '../../components/header';
import '../../components/footer';
import '../../components/room-search-form';
import './landing-page.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
