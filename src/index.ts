import PushButton from './PushButton.vue'
import ButtonGroup from './ButtonGroup.vue'
import _Vue from 'vue'

const TvButton = {
  install (Vue: typeof _Vue, options = {}) {
    Vue.component('PushButton', PushButton)
    Vue.component('ButtonGroup', ButtonGroup)
  }
}

export default TvButton
export {
  PushButton,
  ButtonGroup
}
