import $ from 'jquery'
import AirDatepicker from 'air-datepicker';
import options from './calendar';
import './calendar.scss';


/** 
 * Календать так подключается только тут для демостранции его на странице Cards 
 * В остыльных файлах его отдельный инстанс создает компонент
 * */

$('.ui-kit__calendar').each(() =>{
  new AirDatepicker('.ui-kit__calendar', options).setViewDate(new Date('2019-08'))
})
