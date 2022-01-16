import $ from 'jquery'

//js классы для работы с DOM элементами
const BURGER = '.js-header__burger-button'
const CLOSE = '.js-header__close-button'
const MENU = '.js-header__panel'

class Header{
  constructor(nodeElem){
    this.$header = $(nodeElem)
    this.init()
  }

  init(){
    this.$burgerButton = this.$header.find(BURGER)
    this.$closeButton = this.$header.find(CLOSE)
    this.$menu = this.$header.find(MENU)
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