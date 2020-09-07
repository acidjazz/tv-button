import PushButton from './PushButton.vue'
import ButtonGroup from './ButtonGroup.vue'
const components = [ PushButton, ButtonGroup ]

export default {
  install (Vue, options = {}) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
export { PushButton, ButtonGroup }
