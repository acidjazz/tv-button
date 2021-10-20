<template>
  <button
    type="button"
    class="relative inline-flex items-center"
    :class="[sizes[size], current_theme.primary, cursor, is_active ? current_theme.active : current_theme.disabled ]"
    @click="click"
  >
      <slot />
    <span v-if="ping" class="absolute top-0 right-0 -mr-1 -mt-1 z-10">
      <span class="flex w-3 h-3 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="ping"></span>
        <span class="relative inline-flex rounded-full h-3 w-3" :class="ping"></span>
      </span>
    </span>
  </button>
</template>


<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  PushButtonCustomTheme,
  PushButtonCustomThemes,
  PushButtonSize,
  PushButtonState,
  PushButtonTheme
} from '../types/PushButton'
export default Vue.extend({
  name: 'PushButton',
  props: {
    customTheme: Object as PropType<PushButtonCustomTheme>,
    theme: String as PropType<PushButtonTheme>,
    state: {
      type: String as PropType<PushButtonState>,
      default: 'active',
    },
    size: {
      type: String as PropType<PushButtonSize>,
      default: 'm',
    },
    ping: {
      type: String,
    }
  },
  data () {
    return {
      themes: [
        {
          name: 'white',
          primary: 'border border-gray-300 shadow-sm font-medium rounded text-gray-700 bg-white',
          active: 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          disabled: '',
        },
        {
          name: 'whiteLeft',
          primary: 'border border-gray-300 shadow-sm font-medium rounded-l-md text-gray-700 bg-white',
          active: 'hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500',
          disabled: '',
        },
        {
          name: 'whiteMid',
          primary: '-ml-px relative inline-flex items-center border border-gray-300 shadow-sm font-medium text-gray-700 bg-white',
          active: 'hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500',
          disabled: '',
        },
        {
          name: 'whiteRight',
          primary: '-ml-px border border-gray-300 shadow-sm font-medium rounded-r-md text-gray-700 bg-white',
          active: 'hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500',
          disabled: '',
        },
        {
          name: 'text',
          primary: 'text-gray-700',
          active: 'hover:text-gray-500 hover:bg-gray-100 focus:outline-none active:text-gray-800 active:bg-gray-50',
        },
        {
          name: 'dark',
          primary: 'border border-gray-600 text-gray-300 bg-gray-700',
          active: 'hover:bg-gray-600 hover:text-gray-400 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:text-gray-200 active:bg-gray-500',
          disabled: '',
        },
        {
          name: 'indigo',
          primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600',
          active: 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          disabled: '',
        },
        {
          name: 'indigo-light',
          primary: 'text-indigo-700 bg-indigo-100',
          active: 'hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200',
          disabled: '',
        },
        {
          name: 'indigo-dark',
          primary: 'text-indigo-200 bg-indigo-900',
          active: 'hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:shadow-outline-indigo active:bg-indigo-800',
          disabled: '',
        },
        {
          name: 'red',
          primary: 'text-white bg-red-600',
          active: 'hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700',
          disabled: '',
        },
        {
          name: 'yellow',
          primary: 'text-white bg-yellow-600',
          active: 'hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700',
          disabled: '',
        },
        {
          name: 'green',
          primary: 'text-white bg-green-600',
          active: 'hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700',
          disabled: '',
        },
        {
          name: 'blue',
          primary: 'text-white bg-blue-600',
          active: 'hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700',
          disabled: '',
        },
        {
          name: 'purple',
          primary: 'text-white bg-purple-600',
          active: 'hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700',
          disabled: '',
        },
       {
          name: 'pink',
          primary: 'text-white bg-pink-600',
          active: 'hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700',
          disabled: '',
        },
      ] as PushButtonCustomThemes,
      sizes: {
        xs: 'px-2.5 py-1.5 text-xs leading-4',
        s: 'px-3 py-2 text-sm leading-4',
        m: 'px-4 py-2 text-sm leading-5',
        l: 'px-4 py-2 text-base leading-6',
        xl: 'px-6 py-3 text-base leading-6',
      },
    }
  },
  computed: {
    is_active (): boolean {
      return this.state === 'active'
    },
    is_disabled (): boolean {
      return this.state === 'disabled'
    },
    cursor (): string {
      return this.is_active ? 'cursor-pointer' : this.is_disabled ? 'cursor-not-allowed' :  'cursor-wait'
    },
    current_theme (): PushButtonCustomTheme|undefined {
      if (this.customTheme) return this.customTheme
      if (!this.theme) return this.themes.find(t => t.name === 'white')
      return this.themes.find(t => t.name === this.theme)
    }
  },
  methods: {
    click (): void {
      if (this.is_active) this.$emit('click')
    },
  },
})
</script>
