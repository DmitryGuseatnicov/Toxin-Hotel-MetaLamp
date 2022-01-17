import $ from 'jquery'
import AirDatepicker from 'air-datepicker'
import  options  from '../calendar/calendar'


// js селекторы для работы с DOM элементами
const ROOT__INPUT = '.js-calendar input'
const INPUTS = '.js-date-dropdown__input input'
const INPUT = '.js-date-dropdown__input'
const ICON = '.js-date-dropdown__input-icon'
const APPLY = '.js-button-action-apply'
const CLEAR = '.js-button-action-clear'

//Типы Dropdown
const DOUBLE = 'double'
const FILTER = 'filter'

class DateDropdownFactory{
  constructor(nodeElem){
    this.createDateDropdown(nodeElem, nodeElem.dataset.type)
  }

  createDateDropdown(nodeElem, type){
    switch(type){
      case DOUBLE:
        return new DoubleDateDropdown(nodeElem)

      case FILTER:
        return new FilterDateDropdown(nodeElem)

      default:
        return
    }
  }
}

class DateDropdown{
  constructor(nodeElem){
    this.$dateDropdown = $(nodeElem)
    this.init()
  }

  init(){
    try {
      this.$rootInput = this.$dateDropdown.find(ROOT__INPUT)
      this.id = `#${this.$rootInput.attr('id')}`
      this.$inputs = this.$dateDropdown.find(INPUTS)
      this.calendar = new AirDatepicker(this.id, options)
      this.bindEventListener()

    } catch (error) {
      console.log(error)
    }
  }

  bindEventListener(){
    this.clickHandler = this.clickHandler.bind(this)
    this.$dateDropdown.on('click', this.clickHandler)
  }

  clickHandler(e){
    if(e.target.closest(ICON)) this.toggle()
    if(e.target.closest(APPLY)) this.addValue()
    if(e.target.closest(CLEAR)) this.clearValue()
  }

  toggle(){
    this.isOpen ? this.close() : this.open()
  }

  open(){
    this.$dateDropdown.addClass('date-dropdown--open')
  }

  close(){
    this.$dateDropdown.removeClass('date-dropdown--open')
  }

  get isOpen(){
    return this.$dateDropdown.hasClass('date-dropdown--open')
  }

  getValue(){
    return this.$rootInput.val()
  }

  addValue(){
    this.$inputs.val(this.getValue())
  }

  clearValue(){
    this.calendar.clear()
  }

}

class DoubleDateDropdown extends DateDropdown{
  constructor(nodeElem){
    super(nodeElem)
  }

  addValue(){
    const values = this.getValue().split(',')
    this.$inputs[0].value = values[0] ?? '' 
    this.$inputs[1].value = values[1] ?? '' 
    this.close()
  }

  clearValue(){
    this.calendar.clear()
    this.$inputs[0].value = ''
    this.$inputs[1].value = ''
  }
}

class FilterDateDropdown extends DateDropdown{
  constructor(nodeElem){
    super(nodeElem)
  }

  clickHandler(e){
    if(e.target.closest(INPUT)) this.toggle()
    if(e.target.closest(APPLY)) this.addValue()
    if(e.target.closest(CLEAR)) this.clearValue()
  }

  addValue(){
    const values = this.getValue().split(',')
    let firstDate = ''
    let secondDate = ''
    if(values[0]){
      firstDate = new Date(values[0]
        .split('.')
        .reverse()
        .join('.'))
        .toLocaleString('ru-RU', { day: 'numeric', month: 'short'})
        .replace('.', '') 
    } 
    if(values[1]){
      secondDate = new Date(values[1]
        .split('.')
        .reverse()
        .join('.'))
        .toLocaleString('ru-RU', { day: 'numeric', month: 'short'}) 
        .replace('.', '') 
      }
    this.$inputs.val(`${firstDate} ${secondDate ? `- ${secondDate}` : ''}`)

    this.close()
  }

  clearValue(){
    this.calendar.clear()
    this.$inputs.val('')
  }
}

export { DateDropdownFactory }