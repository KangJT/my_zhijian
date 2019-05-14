import Button from './button.vue'
// import './button.scss'
import './button.css'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}
export default Button
