import AirDatepicker from 'air-datepicker'
import $ from 'jquery'
import  options  from './../calendar/calendar'


class DateDropdownFactory{
  constructor(nodeElem){
    this.createDateDropdown(nodeElem, nodeElem.dataset.type)
  }

  createDateDropdown(nodeElem, type){
    switch(type){
      case 'double':
        return new DoubleDateDropdown(nodeElem)

      case 'filter':
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
      this.$rootInput = this.$dateDropdown.find('.js-calendar input')
      this.id = `#${this.$rootInput.attr('id')}`
      this.$inputs = this.$dateDropdown.find('.js-date-dropdown__input input')
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
    if(e.target.closest('.date-dropdown__input-icon')) this.toggle()
    if(e.target.closest('.js-button-action-apply')) this.addValue()
    if(e.target.closest('.js-button-action-clear')) this.clearValue()
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
    console.log(values)
    this.$inputs[0].value = values[0] ?? '' 
    this.$inputs[1].value = values[1] ?? '' 
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
    if(e.target.closest('.js-date-dropdown__input')) this.toggle()
    if(e.target.closest('.js-button-action-apply')) this.addValue()
    if(e.target.closest('.js-button-action-clear')) this.clearValue()
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
  }

  clearValue(){
    this.calendar.clear()
    this.$inputs.val('')
  }
}

export { DateDropdownFactory }