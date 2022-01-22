import $ from 'jquery'

class NavMenu{
  constructor($navMenu){
    this.$navMenu = $navMenu
    this.init()
  }

  init(){
    this.$navItems = this.$navMenu.find('.js-nav__item')
    this.bindEventListener()
  }

  bindEventListener(){
    this.clickHandler = this.clickHandler.bind(this)
    this.$navItems.on('click', this.clickHandler)
  }

  bindWindowEventListener(){
    this.windowClickHandler = this.windowClickHandler.bind(this)
    $(window).on('click', this.windowClickHandler)
  }

  windowClickHandler(e){
    if(!e.target.closest('.nav__item--hav-childrens')){
      this.$navItems.removeClass('nav__item--open')
      $(window).off('click', this.windowClickHandler)
    }
  }

  clickHandler(e){
    if(e.target.closest('.nav__item--hav-childrens')){
      if(e.target.closest('.nav__item-link')){
        this.toggle(e.currentTarget)
      }
    }
  }

  toggle(target){
    this.bindWindowEventListener()
    $(target).toggleClass('nav__item--open')
  }
}

export { NavMenu }