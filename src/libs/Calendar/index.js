import AirDatepicker from 'air-datepicker';

import options from './options';
import './index.scss';

class Calendar {
  constructor(nodeElem) {
    this.init(nodeElem);
    return this.calendar;
  }

  init(nodeElem) {
    this._createCalender(nodeElem);
  }

  _createCalender(nodeElem) {
    this.calendar = new AirDatepicker(nodeElem, options);
  }
}

export default Calendar;
