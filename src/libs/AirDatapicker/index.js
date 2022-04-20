import AirDatepicker from 'air-datepicker';

import options from './options';
import './index.scss';

class Calendar {
  constructor(nodeElem) {
    this.init(nodeElem);
  }

  init(nodeElem) {
    return this.createCalender(nodeElem);
  }

  createCalender(nodeElem) {
    this.calendar = new AirDatepicker(nodeElem, options);
  }
}

export default Calendar;
