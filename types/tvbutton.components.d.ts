import { PushButton } from './PushButton'

declare module 'vue/types/vue' {
  interface Vue {
    PushButton: typeof PushButton
  }
}
