import $ from 'jquery';

import DoubleDateDropdown from './Classes/DoubleDateDropdown';
import FilterDateDropdown from './Classes/FilterDateDropdown';
import constants from './utils/constants';
import '../input';
import '../button';
import '../calendar';
import './date-dropdown.scss';

const dateDropdownCreator = (nodeElem) => {
  switch (nodeElem.dataset.type) {
    case constants.DOUBLE:
      return new DoubleDateDropdown(nodeElem);

    case constants.FILTER:
      return new FilterDateDropdown(nodeElem);

    default:
      return null;
  }
};

$('.date-dropdown').each((i, el) => dateDropdownCreator(el));
