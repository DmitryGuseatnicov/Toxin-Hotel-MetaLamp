import $ from 'jquery'
import './dropdown.scss'

class Dropdown{
  constructor(nodeElem){
      this.$dropdown = $(nodeElem)
      this.dropItems = []
      this.init()
  }

  init(){
    try {
      this.$input = this.$dropdown.find('.js-dropdown__input input')
      this.$dropdown.find('.js-dropdown__item').map((i , el) => {
        this.dropItems.push(new DropdownCalculator(el))
      })

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
    let itemsChecked = this.dropItems.filter(item => item.getValue().value > 0) 
    let calcResults = itemsChecked.map(el => el.getValue())
    return calcResults
  }

  get isOpen(){
    return this.$dropdown.hasClass('dropdown--open')
  }
}

class DropdownCalculator{
  constructor(nodeElem){
      this.$calculator = $(nodeElem)
      this.init()
  }

  init(){
    try {
      this.$value = this.$calculator.find('.js-dropdown__calculator-value')
      this.$btnMinus = this.$calculator.find('.js-dropdown__calculator-action-minus')
      this.name = this.$calculator.find('.js-dropdown__item-name').text()
      this.disabledButtonSwitcher()
      this.bindEventListener()

    } catch (error) {
      console.log(error)
    }
  }

  bindEventListener(){
    this.clickHandler = this.clickHandler.bind(this)
    this.$calculator.on('click', this.clickHandler)
  }

  clickHandler(e){
    if(e.target.closest('.js-dropdown__calculator-action-plus')) this.plus()
    if(e.target.closest('.js-dropdown__calculator-action-minus')) this.minus()
  }

  plus(){
    this.$value.text(+this.$value.text() + 1)
    this.disabledButtonSwitcher()
  }

  minus(){
    this.$value.text(+this.$value.text() - 1)
    this.disabledButtonSwitcher()
  }

  disabledButtonSwitcher(){
    if(this.isZeroValue){
      this.$btnMinus.attr('disabled', 'disabled') 
    }else{
      this.$btnMinus.removeAttr('disabled')
    }
  }

  get isZeroValue(){
    return this.$value.text() <= 0
  }

  getValue(){
    return{
      name: this.name,
      value: this.$value.text()
    }
  }

  clearValue(){
    this.$value.text('0')
    this.disabledButtonSwitcher()
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
    this.dropItems.forEach(el => el.clearValue())
    this.showValue()
  }

  showValue(){
    this.$input.val(this.convertValueToString())
  }

  convertValueToString(){
    let calcResults = this.getValue().reduce((prev, el )=>{
      return parseInt(prev) + parseInt(el.value)
    }, 0)
    
    return calcResults > 0 ? `${calcResults} гостя` : ''
  }

}

class ComfortsDropdown extends Dropdown{
  constructor(nodeElem){
    super(nodeElem)
  }

  close(){
    super.close()
    this.showValue()
  }

  showValue(){
    this.$input.val(this.convertValueToString())
  }

  convertValueToString(){
    calcResults = getValue().map(item =>{
      let { name, value } = item.getValue()
      return `${value} ${name}`
    })
    return calcResults
  }
}


export { Dropdown , ComfortsDropdown, GuestsDropdown}