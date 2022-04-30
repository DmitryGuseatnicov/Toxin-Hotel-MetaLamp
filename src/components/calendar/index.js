import $ from 'jquery';

import Calendar from '../../libs/Calendar';
import './calendar.scss';

$('.js-ui-kit__calendar').each(() => {
  new Calendar('.js-ui-kit__calendar');
});
