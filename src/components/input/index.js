import $ from 'jquery';

import InputMaskCreator from './Classes/InputMaskCreator';
import '../widget-title';
import './input.scss';

$('[data-mask]').each((i, el) => new InputMaskCreator(el));
