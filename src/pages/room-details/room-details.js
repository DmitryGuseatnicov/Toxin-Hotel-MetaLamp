import $ from 'jquery';

import '../../page-layout/page-template';
import '../../components/booking-form';
import '../../components/bullet-list';
import '../../components/benefits';
import '../../components/comment';
import '../../components/diagram';
import './room-details.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
