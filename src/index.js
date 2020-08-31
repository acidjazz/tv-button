import PushButton from './PushButton.vue'
const components = [ PushButton ]

export default {
  install (Vue, options = {}) {
    components.forEach(component => {
      console.log(component.name)
      Vue.component(component.name, component)
    })
  }
}

export { PushButton }
