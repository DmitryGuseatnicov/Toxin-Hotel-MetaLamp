import $ from 'jquery'


const template = {
  getPrev(){
    return `<span class="pagination__action-prev material-icons">arrow_back</span>`
  },
  getNext(){
    return `<span class="pagination__action-next material-icons">arrow_forward</span>`
  },
  getDots(){
    return `<span class="pagination__dots">...</span>`
  },
  getPage(number){
    return `<span class="pagination__page-number">${number}</span>`
  },
  getCurrentPage(number){
    return `<span class="pagination__page-number pagination__current-page">${number}</span>`
  }
}


class Pagination{
  constructor(nodeElem){
    this.$pagination = $(nodeElem)
    this.itemsShowForPage = 12
    this.totalItems
    this.currentPage = 1
    this.init()
  }
  init(){
    try {
      this.$nav = this.$pagination.find('.js-pagination__nav-buttons')
      this.$description = this.$pagination.find('.js-pagination__description')
      this.renderPagination()
      this.showDescription()

    } catch (error) {
      console.log(error)
    }
  }

  update(options={}){
  
    let { totalItems, currentPage } = options
   
    if(totalItems) this.totalItems = totalItems
    if(currentPage) this.currentPage = currentPage
    this.renderPagination()
    this.showDescription()
  }

  renderPagination(){
    let fragment = ''
    let before = +this.currentPage - 1
    let after = +this.currentPage + 1

    if(this.totalPages > 1){

      if(this.currentPage > 1){
        fragment += template.getPrev()
      }

      if(this.currentPage > 2){
        fragment += template.getPage(1)
        if(this.currentPage > 3){
          fragment += template.getDots()
        }
      }

      if(this.currentPage === this.totalPages){
        before = before - 1
      }else if(this.currentPage === before - 1){
        before = before - 1
      }

      if(this.currentPage === 1){
        after = after + 1
      }else if(this.currentPage === before - 1){
        after = after + 2
      }

      for(let page = before; page <= after ; page ++){
        if(page > this.totalPages){
          continue
        }
        if(page === 0){
          page = page + 1
        }
        if(page === this.currentPage){
          fragment += template.getCurrentPage(this.currentPage)
        }else{
          fragment += template.getPage(page)
        }
      }

      if(this.currentPage < this.totalPages - 1){
        if(this.currentPage < this.totalPages - 2){
          fragment += template.getDots()
        }
        fragment += template.getPage(this.totalPages)
      }

      if(this.currentPage < this.totalPages){
        fragment += template.getNext()
      }
    }
    this.$nav.html(fragment)
  }

  showDescription(){
    let interval = `${this.currentPage * this.itemsShowForPage - this.itemsShowForPage + 1} - ${this.currentPage * this.itemsShowForPage}`
    let description = `${interval} из ${this.totalItems} выриантов аренды`
    this.$description.text(description)
  }

  get totalPages(){
    return Math.ceil(this.totalItems / this.itemsShowForPage)
  }

}

export { Pagination }

