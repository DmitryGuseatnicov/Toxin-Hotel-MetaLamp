import $ from 'jquery'

class Header{
  constructor(nodeElem){
    this.$header = $(nodeElem)
    this.init()
  }

  init(){
    this.$burgerButton = this.$header.find('.js-header__burger-button')
    this.$closeButton = this.$header.find('.js-header__close-button')
    this.$menu = this.$header.find('.js-header__panel')
    this.bindEventListener()
  }

  bindEventListener(){
    this.toggle = this.toggle.bind(this)
    this.$burgerButton.on('click', this.toggle)
    this.$closeButton.on('click', this.toggle)
  }

  toggle(){
    this.$menu.toggleClass('header__panel-visible')
  }

}

export { Header }