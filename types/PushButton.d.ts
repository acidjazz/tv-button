import Vue from 'vue'
export type PushButtonSize = 'xs'|'s'|'m'|'l'|'xl'
export type PushButtonState =  'active'|'loading'|'loading-quiet'|'disabled'
export type PushButtonGroup = 'single'|'left'|'right'|'middle'
export type PushButtonTheme = 'white'|'dark'|'red'|'yellow'|'blue'|'green'|'indigo'|'purple'|'indigo-light'|'indigo-dark'

export interface PushButtonCustomTheme {
  name: string
  primary: string
  dark: string
  active: string
  disabled: string
}

export type PushButtonCustomThemes = PushButtonCustomTheme[]

export declare class PushButton extends Vue {
  size?: PushButtonSize
  theme?: PushButtonTheme
  state?: PushButtonState
  group?: PushButtonGroup
}
