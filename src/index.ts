import PushButton from './PushButton.vue'
import ButtonGroup from './ButtonGroup.vue'
import _Vue from 'vue'

/*
const TvButton = {
  install (Vue: typeof _Vue, options = {}) {
    Vue.component('push-button', PushButton)
    Vue.component('button-group', ButtonGroup)
  }
}
*/

const TvButton = {
  components: {
    PushButton,
    ButtonGroup,
  }
}

export default TvButton
export {
  PushButton,
  ButtonGroup
}
