import $ from 'jquery'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'


//js селекторы для работы с DOM элементами


class rangeSlider{
  constructor(nodeElem){
    this.$rangeSlider = $(nodeElem)
    this.init()
  }

  init(){
    this.$start = this.$rangeSlider.find('.range-slider__input-start')
    this.$end = this.$rangeSlider.find('.range-slider__input-end')
    this.$value = this.$rangeSlider.find('.range-slider__value')
   

    this.slider = noUiSlider.create(this.$rangeSlider.find('.range-slider__slider')[0], {
      start: [this.$start.attr('value'), this.$end.attr('value')],
      step: 5,
      range: {
          'min': [parseInt(this.$start.attr('min'))],
          'max': [parseInt(this.$end.attr('max'))]
      },
      connect: true,
    });

    this.bindEventListener()
  }

  bindEventListener(){
    this.changeHandler = this.changeHandler.bind(this)
    this.slider.on('update.one', this.changeHandler);
  }

  changeHandler(values){
     this.$start.val(values[0])
     this.$end.val(values[1])
     this.$value.text(`${Math.round(values[0])}₽ - ${Math.round(values[1])}₽`)
  }
}

export  { rangeSlider }