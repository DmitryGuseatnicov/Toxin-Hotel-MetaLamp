import $ from 'jquery';

import '../../components/room-search-form';
import '../../components/register-account-form';
import '../../components/booking-form';
import '../../components/login-form';
import '../../components/room-card';
import './ui-kit-cards.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
