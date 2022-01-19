import $ from 'jquery'
import { DropdownCalculator } from './DropdownCalculator'
import { textHelper } from './utils/textHelper'
import './dropdown.scss'



// js селекторы для работы с DOM элементами 
const INPUT = '.js-dropdown__input input'
const CALCULATOR = '.js-dropdown__drop-items'
const CLEAR = '.js-dropdown__button-clear'
const APPLY = '.js-dropdown__button-apply'

// типы Dropdown
const GUESTS = 'guests'
const COMFORTS = 'comforts'


class DropdownFactory{
  constructor(nodeElem){
    this.init(nodeElem)
  }
  init(nodeElem){
    switch($(nodeElem).data().type){
      case GUESTS:
        return new GuestsDropdown(nodeElem)
        
      case COMFORTS:
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
      this.$input = this.$dropdown.find(INPUT)
      this.calculator = this.$dropdown.find(CALCULATOR).map((i, el)=>{
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
      this.$clearBtn = this.$dropdown.find(CLEAR)
      this.$applyBtn = this.$dropdown.find(APPLY)
      super.init()
      this.hiddenButtonSwitcher()
      this.showValue()

    } catch (error) {
      console.log(error)
    }
  }

  clickHandler(e){
    super.clickHandler(e)
    if(e.target.closest(CLEAR)) this.clearValue()
    if(e.target.closest(APPLY)) this.showValue(), this.close()
    this.hiddenButtonSwitcher()
  }

  clearValue(){
    this.calculator.clearValue()
    this.showValue()
  }

  hiddenButtonSwitcher(){
    if(this.isZeroTotalCount){
      this.$clearBtn.addClass('dropdown__button-clear--hidden')
      return
    } 
    this.$clearBtn.removeClass('dropdown__button-clear--hidden')
  }

  showValue(){
    let guests = 0
    let baby = 0

    this.getValue().forEach(el => (el.name !== 'младенцы') ? guests += +el.value : baby += +el.value)

    let value = `${guests > 0 
      ? `${guests} ${textHelper('гости', guests)},`
      : ''}${baby > 0 ? ` ${baby} ${textHelper('младенцы', baby)} ` : ''}`

    this.$input.val(value.replace(/.$/, ''))

  }

  get isZeroTotalCount(){
    let totalCount = 0
    this.getValue().forEach(el =>{
      totalCount += +el.value
    })
    return totalCount === 0
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
      value += ` ${el.value} ${textHelper(el.name, el.value)},`
    })
    this.$input.val(value.slice(1, -1))
  }
}



export { DropdownFactory}