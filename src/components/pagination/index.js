import $ from 'jquery';

import Pagination from './Classes/Pagination';
import constants from './utils/constants';
import './pagination.scss';

const $pagination = $(constants.PAGINATION);

const [pagination] = $pagination.map((i, el) => new Pagination(el));
pagination.update({ currentPage: 1, totalItems: 180 });

function changePage(e) {
  if (e.target.closest(constants.NEXT)) {
    pagination.update({ currentPage: pagination.currentPage + 1 });
  }
  if (e.target.closest(constants.PREV)) {
    pagination.update({ currentPage: pagination.currentPage - 1 });
  }
  if (e.target.closest(constants.PAGE_NUMBER)) {
    pagination.update({ currentPage: +e.target.textContent });
  }
}

function changePageWithTab(e) {
  if (e.keyCode === 32) {
    e.preventDefault();
    changePage(e);
  }
}


$pagination.on('click', changePage);
$pagination.on('keydown', changePageWithTab);
