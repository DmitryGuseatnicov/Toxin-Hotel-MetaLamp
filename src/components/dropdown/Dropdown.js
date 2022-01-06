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
      this.$input = this.$dropdown.find('.input__text-field')
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

  get isOpen(){
    return this.$dropdown.hasClass('dropdown--open')
  }
}

class GuestsDropdown extends Dropdown{
  constructor(nodeElem){
    super(nodeElem)
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

  convertValueToString(){
    let calcResults = this.dropItems.filter(item => item.getValue().value > 0)
    calcResults = calcResults.map(item =>{
      let { name, value } = item.getValue()
      return `${value} ${name}`
    })

    return calcResults.join(',')
  }

  showValue(){
    this.$input.val(this.convertValueToString())
  }

}

class DropdownCalculator{
  constructor(nodeElem){
      this.$calculator = $(nodeElem)
      this.init()
  }

  init(){
    try {
      this.$value = this.$calculator.find('.dropdown__calculator-value')
      this.$btnMinus = this.$calculator.find('.dropdown__calculator-action-minus')
      this.name = this.$calculator.find('.dropdown__item-name').text()

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
    if($(e.target).hasClass('dropdown__calculator-action-plus')) this.plus()
    if($(e.target).hasClass('dropdown__calculator-action-minus')) this.minus()
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
    console.log(this.isZeroValue)
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

export { Dropdown , ComfortsDropdown, GuestsDropdown}