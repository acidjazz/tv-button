import PushButton from './PushButton.vue'
const components = [ PushButton ]

export default {
  install (Vue, options = {}) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export {
  PushButton,
}
