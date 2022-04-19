import $ from 'jquery';

import '../../page-layout/page-template';
import '../../components/sidebar';
import '../../components/room-card';
import '../../components/widget-title';
import '../../components/pagination';
import './search-room.scss';

function stopSubmit(e) {
  e.preventDefault();
}

$('form').on('submit', stopSubmit);
