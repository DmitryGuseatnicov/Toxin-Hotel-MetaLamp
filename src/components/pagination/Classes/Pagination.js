import $ from 'jquery';

const BUTTONS = '.js-pagination__nav-buttons';
const DESCRIPTION = '.js-pagination__description';

const template = {
  getPrev() {
    return '<span class="pagination__item pagination__action-prev js-pagination__action-prev material-icons" tabindex="0">arrow_back</span>';
  },
  getNext() {
    return '<span class="pagination__item pagination__action-next js-pagination__action-next material-icons" tabindex="0">arrow_forward</span>';
  },
  getDots() {
    return '<span class="pagination__item pagination__dots">...</span>';
  },
  getPage(number) {
    return `<span class="pagination__item pagination__page-number js-pagination__page-number" tabindex="0">${number}</span>`;
  },
  getCurrentPage(number) {
    return `<span class="pagination__item pagination__page-number pagination__current-page" tabindex="0">${number}</span>`;
  },
};

class Pagination {
  constructor(nodeElem) {
    this.$pagination = $(nodeElem);
    this.itemsShowForPage = 12;
    this.currentPage = 1;
    this.totalItems = 0;
    this.init();
  }

  init() {
    this.$nav = this.$pagination.find(BUTTONS);
    this.$description = this.$pagination.find(DESCRIPTION);
    this.renderPagination();
    this.showDescription();
  }

  update(options = {}) {
    const { totalItems, currentPage } = options;

    if (totalItems) this.totalItems = totalItems;
    if (currentPage) this.currentPage = currentPage;
    this.renderPagination();
    this.showDescription();
  }

  renderPagination() {
    let fragment = '';
    let before = +this.currentPage - 1;
    let after = +this.currentPage + 1;

    if (this.totalPages > 1) {
      if (this.currentPage > 1) {
        fragment += template.getPrev();
      }

      if (this.currentPage > 2) {
        fragment += template.getPage(1);
        if (this.currentPage > 3) {
          fragment += template.getDots();
        }
      }

      if (this.currentPage === this.totalPages) {
        before -= 1;
      } else if (this.currentPage === before - 1) {
        before -= 1;
      }

      if (this.currentPage === 1) {
        after += 1;
      } else if (this.currentPage === before - 1) {
        after += 2;
      }

      for (let page = before; page <= after; page += 1) {
        if (page > this.totalPages) {
          break;
        }
        if (page === 0) {
          page += 1;
        }
        if (page === this.currentPage) {
          fragment += template.getCurrentPage(this.currentPage);
        } else {
          fragment += template.getPage(page);
        }
      }

      if (this.currentPage < this.totalPages - 1) {
        if (this.currentPage < this.totalPages - 2) {
          fragment += template.getDots();
        }
        fragment += template.getPage(this.totalPages);
      }

      if (this.currentPage < this.totalPages) {
        fragment += template.getNext();
      }
    }
    this.$nav.html(fragment);
  }

  getCountOfItems() {
    if (this.totalItems > 100) {
      return ` ${Math.floor(this.totalItems / 100) * 100}+ `;
    }
    return this.totalItems;
  }

  showDescription() {
    const interval = `${this.currentPage * this.itemsShowForPage - this.itemsShowForPage + 1} – ${this.currentPage * this.itemsShowForPage}`;
    const description = `${interval} из ${this.getCountOfItems()} вариантов аренды`;
    this.$description.text(description);
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsShowForPage);
  }
}

export default Pagination;
