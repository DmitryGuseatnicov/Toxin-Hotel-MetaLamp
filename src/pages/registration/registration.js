import $ from 'jquery';

import '../../page-layout/page-template';
import '../../components/register-account-form';
import './registration.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);