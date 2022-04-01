import $ from 'jquery';

import BookingForm from './Classes/BookingForm';
import '../date-dropdown';
import '../dropdown';
import '../button';
import './booking-form.scss';

$('.js-booking-form').each((i, el) => new BookingForm(el));
