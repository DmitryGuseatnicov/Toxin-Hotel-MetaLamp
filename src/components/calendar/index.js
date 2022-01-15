import $ from 'jquery'
import AirDatepicker from 'air-datepicker';
import options from './calendar';
import './calendar.scss';

$('.ui-kit__calendar').each((i, el) =>{
  new AirDatepicker('.ui-kit__calendar', options).setViewDate(new Date('2019-08'))

})
