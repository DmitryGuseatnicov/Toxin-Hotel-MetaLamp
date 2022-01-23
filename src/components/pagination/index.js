import $ from 'jquery';
import Pagination from './Classes/Pagination';
import './pagination.scss';

const pagination = $('.js-pagination').map((i, el) => new Pagination(el));

pagination[0].update({ currentPage: 1, totalItems: 180 });

$('.js-pagination').on('click', (e) => {
  if (e.target.closest('.pagination__action-next')) {
    pagination[0].update({ currentPage: pagination[0].currentPage + 1 });
  }
  if (e.target.closest('.pagination__action-prev')) {
    pagination[0].update({ currentPage: pagination[0].currentPage - 1 });
  }
  if (e.target.closest('.pagination__page-number')) {
    pagination[0].update({ currentPage: +e.target.textContent });
  }
});
