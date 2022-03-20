import $ from 'jquery';

import '../../components/header';
import '../../components/footer';
import '../../components/register-account-form';
import './registration-page.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
