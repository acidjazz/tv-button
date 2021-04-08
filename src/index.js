import PushButton from './PushButton.vue'
import ButtonGroup from './ButtonGroup.vue'
const components = {
  PushButton: PushButton,
  ButtonGroup: ButtonGroup
}

export default {
  install (Vue, options = {}) {
    for (const key in components) {
      Vue.component(key, components[key])
    }
  }
}

export { PushButton, ButtonGroup }
