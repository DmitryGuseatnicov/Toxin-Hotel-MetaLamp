import '../../components/input'
import './../../components/dropdown'
import './../../components/button'
import './../../components/date-dropdown'
import './../../components/range-slider'
import './../../components/checkbox'
import './../../components/radio'
import 'material-icons'
import './ui-kit-form-elements.scss';


class LightOnCommand{
  constructor(Light){
    this.light = new Light()
  }
  execute(){
    this.light.on()
  }
}

class SimpleRemoteControl { 
  constructor(Command){
    this.slot = new Command()
  }
}



