import $ from 'jquery';

import '../../page-layout/page-template';
import '../../components/register-account-form';
import './registration-page.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
