import $ from 'jquery';

import '../../components/header';
import '../../components/footer';
import '../../components/room-card';
import '../../components/widget-title';
import '../../components/date-dropdown';
import '../../components/dropdown';
import '../../components/range-slider';
import '../../components/checkbox';
import '../../components/checkbox-list';
import '../../components/pagination';
import './search-room-page.scss';

function stopSubmit(e) {
  e.preventDefault();
}
$('form').on('submit', stopSubmit);
