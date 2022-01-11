import $ from 'jquery'

const VALUE = '.js-dropdown__calculator-value'
const NAME = '.js-dropdown__item-name'
const MINUS = '.js-dropdown__calculator-action-minus'
const PLUS = '.js-dropdown__calculator-action-plus'
const CALC_ITEMS = '.js-dropdown__item'

class DropdownCalculator{
  constructor(nodeElem){
    this.$calculator = $(nodeElem)
    this.init()
  }

  init(){
    try {
      this.$calcItems =  this.$calculator.find(CALC_ITEMS)
      this.$calcItems.each((i, el) =>{
        this.disabledButtonSwitcher(el)
      })
      this.bindEventListener()
     
    } catch (error) {
      console.log(error)
    }
  }

  bindEventListener(){
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.$calcItems.on('click', this.clickHandler)
    this.$calcItems.on('DOMSubtreeModified', this.changeHandler)
  }

  clickHandler(e){
    if(e.target.closest(PLUS)) this.plus(e.currentTarget)
    if(e.target.closest(MINUS)) this.minus(e.currentTarget)
  }

  changeHandler(e){
    this.disabledButtonSwitcher(e.currentTarget)
  }

  plus(target){
    let $value = $(target).find(VALUE)
    $value.text(+ $value.text() +1)
  }

  minus(target){
    let $value = $(target).find(VALUE)
    $value.text(+ $value.text() - 1)
  }

  disabledButtonSwitcher(target){
    if(this.getIsZeroValue(target)){
      $(target).find(MINUS).attr('disabled', 'disabled') 
      return
    }
    $(target).find(MINUS).removeAttr('disabled')
  }

  getIsZeroValue(target){
    return $(target).find(VALUE).text() <= 0
  }

  getValue(){
    let result = []

    this.$calcItems.each((i, el) =>{
      if($(el).find(VALUE).text() > 0){
        result.push({
          name: $(el).find(NAME).text(), 
          value: $(el).find(VALUE).text()
        })
      }
    })
    return result
  }

  clearValue(){
    this.$calculator.find(VALUE).text(0)
  }
}

export { DropdownCalculator }
