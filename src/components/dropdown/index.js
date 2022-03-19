import $ from 'jquery';

import GuestsDropdown from './Classes/GuestsDropdown';
import ComfortsDropdown from './Classes/ComfortsDropdown';
import constants from './utils/constants';
import '../input';
import '../button';
import './dropdown.scss';

const dropdownCreator = (nodeElem) => {
  switch ($(nodeElem).data().type) {
    case constants.GUESTS:
      return new GuestsDropdown(nodeElem);

    case constants.COMFORTS:
      return new ComfortsDropdown(nodeElem);

    default:
      return null;
  }
};

$('.js-dropdown').each((i, el) => dropdownCreator(el));
