import $ from 'jquery'
import { DropdownCalculator } from './DropdownCalculator'
import './dropdown.scss'


class DropdownFactory{
  constructor(nodeElem){
    this.init(nodeElem)
  }
  init(nodeElem){
    switch($(nodeElem).data().type){
      case 'guests':
        return new GuestsDropdown(nodeElem)
        
      case 'comforts':
        return new ComfortsDropdown(nodeElem)

      default:
        return
    }
  }
}


class Dropdown{
  constructor(nodeElem){
      this.$dropdown = $(nodeElem)
      this.init()
  }
  init(){
    try {
      this.$input = this.$dropdown.find('.js-dropdown__input input')
      this.calculator = this.$dropdown.find('.dropdown__drop-items').map((i, el)=>{
        return new DropdownCalculator(el)
      })[0]
      this.bindEventListener()

    } catch (error) {
      console.log(error)
    }
  }

  bindEventListener(){
    this.clickHandler = this.clickHandler.bind(this)
    this.$dropdown.on('click', this.clickHandler)
  }

  clickHandler(e){
    if(e.target.closest('.dropdown__header')) this.toggle()
  }

  toggle(){
    this.isOpen ? this.close() : this.open()
  }

  open(){
    this.$dropdown.addClass('dropdown--open')
  }

  close(){
    this.$dropdown.removeClass('dropdown--open')
  }

  getValue(){
    return this.calculator.getValue()
  }

  get isOpen(){
    return this.$dropdown.hasClass('dropdown--open')
  }
}


class GuestsDropdown extends Dropdown{
  constructor(nodeElem){
    super(nodeElem)
  }

  init(){
    try {
      super.init()
      this.$clearBtn = this.$dropdown.find('.js-dropdown__button-clear')
      this.$applyBtn = this.$dropdown.find('.js-dropdown__button-apply')
      this.showValue()
    } catch (error) {
      console.log(error)
    }
  }

  clickHandler(e){
    super.clickHandler(e)
    if(e.target.closest('.js-dropdown__button-clear')) this.clearValue()
    if(e.target.closest('.js-dropdown__button-apply')) this.showValue()
  }


  clearValue(){
    this.calculator.clearValue()
    this.showValue()
  }

  showValue(){
    let value = ''
    this.getValue().forEach(el =>{
      value +=`${el.value} ${el.name},`
    })
    this.$input.val(value.replace(/.$/, ''))
  }

}

class ComfortsDropdown extends Dropdown{
  constructor(nodeElem){
    super(nodeElem)
  }

  init(){
    super.init()
    this.showValue()
  }

  close(){
    super.close()
    this.showValue()
  }

  clearValue(){
    this.calculator.clearValue()
    this.showValue()
  }

  showValue(){
    let value = ''
    this.getValue().forEach(el =>{
      value +=`${el.value} ${el.name},`
    })
    this.$input.val(value.replace(/.$/, ''))
  }
}


export { Dropdown , ComfortsDropdown, GuestsDropdown, DropdownFactory}