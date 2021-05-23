import Vue from 'vue'
export type PushButtonSize = 'xs'|'s'|'m'|'l'|'xl'
export type PushButtonTheme = 'white'|'red'|'yellow'|'blue'|'green'|'indigo'|'purple'|'indigo-light'|'indigo-dark'
export type PushButtonState =  'active'|'loading'|'loading-quiet'|'disabled'
export type PushButtonGroup = 'single'|'left'|'right'|'middle'

export declare class PushButton extends Vue {
  size?: PushButtonSize
  theme?: PushButtonTheme
  state?: PushButtonState
  group?: PushButtonGroup
}
