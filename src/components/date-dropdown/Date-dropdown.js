import $ from 'jquery'
import AirDatepicker from "air-datepicker";


class DateDropdown{
  constructor(nodeElem){
    this.$dateDropdown = $(nodeElem)
    this.template = {
      prev: `<span class="material-icons">arrow_back</span>`,
      next: `<span class="material-icons">arrow_forward</span>`,
      titles:{
        days: 'MMMM yyyy'
      }
    }
    this.init()
  }

  init(){
    try {
      this.calendar = new AirDatepicker('.date-dropdown__calendar',{
        prevHtml: this.template.prev,
        nextHtml: this.template.next,
        navTitles:this.template.titles,
        range:true,
        inline: true
      })
    } catch (error) {
      console.log('error')
      console.log(error)
    }
  }
}

export { DateDropdown }