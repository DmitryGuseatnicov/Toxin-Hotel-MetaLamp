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
    this._bindEventListener();
  }

  _bindEventListener() {
    this._clickHandler = this._clickHandler.bind(this);
    this.calendar.$datepicker.addEventListener('click', this._clickHandler);
  }

  // eslint-disable-next-line class-methods-use-this
  _clickHandler(e) {
    const isClickedOnlyFrom =
      e.target.closest(
        '.air-datepicker-cell',
        '.-day-',
        '.-selected-',
        '.-range-from-'
      ) && this.calendar.selectedDates.length <= 1;

    if (isClickedOnlyFrom) e.target.classList.add('-range-to-');
  }

  _createCalender(nodeElem) {
    this.calendar = new AirDatepicker(nodeElem, options);
  }
}

export default Calendar;
