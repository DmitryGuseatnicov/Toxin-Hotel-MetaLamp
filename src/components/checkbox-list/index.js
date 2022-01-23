import $ from 'jquery';
import CheckboxList from './CheckboxList';
import '../widget-title';

import './checkbox-list.scss';

$('.js-checkbox-list').each((i, el) => new CheckboxList(el));
