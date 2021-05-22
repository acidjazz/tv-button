declare module 'tv-button' {
  import Vue, { VueConstructor } from 'vue'

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
    > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
    > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
    >

  export type PushButtonSize = 'xs'|'s'|'m'|'l'|'xl'
  export type PushButtonTheme = 'white'|'red'|'yellow'|'blue'|'green'|'indigo'|'purple'|'indigo-light'|'indigo-dark'
  export type PushButtonState =  'active'|'loading'|'loading-quiet'|'disabled'
  export type PushButtonGroup = 'single'|'left'|'right'|'middle'

  const PushButton: ExtendedVue<
    Vue,
    {},
    {},
    {},
    {
      size: PushButtonSize
      theme: PushButtonTheme
      state: PushButtonState
      group: PushButtonGroup
    }
    >

  export default PushButton
}
