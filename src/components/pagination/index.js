import $ from 'jquery';

import Pagination from './Classes/Pagination';
import './pagination.scss';

const $pagination = $('.js-pagination');

const [pagination] = $pagination.map((i, el) => new Pagination(el));
pagination.update({ currentPage: 1, totalItems: 180 });

function changePage(e) {
  if (e.target.closest('.pagination__action-next')) {
    pagination.update({ currentPage: pagination.currentPage + 1 });
  }
  if (e.target.closest('.pagination__action-prev')) {
    pagination.update({ currentPage: pagination.currentPage - 1 });
  }
  if (e.target.closest('.pagination__page-number')) {
    pagination.update({ currentPage: +e.target.textContent });
  }
}

$pagination.on('click', changePage);
