import PushButton from './PushButton.vue'
import ButtonGroup from './ButtonGroup.vue'

const ComponentList = {
  PushButton: PushButton,
  ButtonGroup: ButtonGroup
}

export default {
  install (Vue, options = {}) {
    for (const key in ComponentList) {
      Vue.component(key, ComponentList[key])
    }
  }
}

export {
  PushButton,
  ButtonGroup
}
