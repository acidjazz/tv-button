<template>
  <n-link
    v-if="to !== undefined"
    :to="to"
    :class="['inline-flex', outerGroup[group], {'shadow-sm': theme !== 'text'}]"
  >
    <button
      :class="[sizes[size], state_theme(theme), innerGroup[group], cursor, innerClass]"
      class="relative overflow-hidden inline-flex items-center leading-4 font-medium transition ease-in-out duration-150 w-full justify-center"
    >
      <slot />
    </button>
  </n-link>

  <a
    v-else-if="href !== undefined"
    :alt="`Visit ${href}`"
    :href="href"
    :class="['inline-flex', outerGroup[group], {'shadow-sm': theme !== 'text'}]"
  >
    <button
      :class="[sizes[size], state_theme(theme), innerGroup[group], cursor, innerClass]"
      class="relative overflow-hidden inline-flex items-center leading-4 font-medium transition ease-in-out duration-150 w-full justify-center"
    >
      <slot />
    </button>
  </a>

  <span v-else-if="to === undefined" :class="['inline-flex relative', outerGroup[group], {'shadow-sm': theme !== 'text'}]" @click="click">

    <button
      :disabled="!is_active"
      type="button"
      :class="[sizes[size], state_theme(theme), innerGroup[group], cursor, innerClass]"
      class="relative overflow-hidden inline-flex items-center leading-4 font-medium transition ease-in-out duration-150 w-full justify-center"
    >
      <slot />
      <span
        v-if="state === 'loading'"
        class="absolute left-0 right-0 bottom-0 h-2 w-1/2 animation-loading cursor-wait"
        :class="loading[theme]"
      />
      <span
        v-if="state === 'loading-quiet'"
        class="absolute inset-0 cursor-wait"
      />
      <span
        v-if="progress !== undefined"
        :style="`width: ${progress}%`"
        :class="loading[theme]"
        class="absolute inset-0 w-full h-full cursor-wait"
      />
      <span
        v-if="progress !== undefined"
        class="absolute inset-0 flex items-center justify-center"
      >
        <slot />
      </span>
    </button>
    <span v-if="ping" class="absolute top-0 right-0 -mr-1 -mt-1 z-10">
      <span class="flex w-3 h-3 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="`bg-${pingColor}-400`"></span>
        <span class="relative inline-flex rounded-full h-3 w-3" :class="`bg-${pingColor}-500`"></span>
      </span>
    </span>
  </span>
</template>

<style>
.animation-loading {
  animation: push-button-loading 1s linear 0s infinite;
}
@keyframes push-button-loading {
  from {
    transform: translate(-100%, 0px);
  }
  to {
    transform: translate(200%, 0px);
  }
}
</style>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PushButtonGroup, PushButtonSize, PushButtonState, PushButtonTheme } from 'tv-button'
export default Vue.extend({
  props: {
    to: String as PropType<string|undefined>,
    href: String as PropType<string|undefined>,
    size: {
      type: String as PropType<PushButtonSize>,
      default: 'm',
    },
    theme: {
      type: String as PropType<PushButtonTheme>,
      default: 'white',
    },
    state: {
      type: String as PropType<PushButtonState>,
      default: 'active',
    },
    progress: Number as PropType<number|undefined>,
    group: {
      type: String as PropType<PushButtonGroup>,
      default: 'single',
    },
    innerClass: String as PropType<string|undefined>,
    ping: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    pingColor: {
      type: String as PropType<string>,
      required: false,
      default: 'pink',
    },
  },
  data () {
    return {
      themes: {
        text: 'text-gray-700 bg-white',
        white: 'border border-gray-300 text-gray-700 bg-white',
        indigo: 'text-white bg-indigo-600',
        'indigo-light': 'text-indigo-700 bg-indigo-100',
        'indigo-dark': 'text-indigo-200 bg-indigo-900',
        red: 'text-white bg-red-600',
        yellow: 'text-white bg-yellow-600',
        green: 'text-white bg-green-600',
        blue: 'text-white bg-blue-600',
        purple: 'text-white bg-purple-600',
        pink: 'text-white bg-pink-600',
      },
      active: {
        text: 'hover:text-gray-500 hover:bg-gray-100 focus:outline-none active:text-gray-800 active:bg-gray-50',
        white: 'hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50',
        indigo: 'hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700',
        'indigo-light': 'hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200',
        'indigo-dark': 'hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:shadow-outline-indigo active:bg-indigo-800',
        red: 'hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700',
        yellow: 'hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700',
        green: 'hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700',
        blue: 'hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700',
        purple: 'hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700',
        pink: 'hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700',
      },
      sizes: {
        xs: 'px-2.5 py-1.5 text-xs leading-4',
        s: 'px-3 py-2 text-sm leading-4',
        m: 'px-4 py-2 text-sm leading-5',
        l: 'px-4 py-2 text-base leading-6',
        xl: 'px-6 py-3 text-base leading-6',
      },
      outerGroup: {
        single: 'rounded-md',
        left: 'rounded-l-md',
        leftNm: 'rounded-l-md',
        middle: '-ml-px',
        right: 'rounded-r-md',
        rightNm: 'rounded-r-md',
      },
      innerGroup: {
        single: 'rounded-md',
        left: 'rounded-l-md border-r-0 focus:z-10',
        leftNm: 'rounded-l-md focus:z-10',
        middle: 'focus:z-10',
        right: 'rounded-r-md border-l-0 focus:z-10',
        rightNm: 'rounded-r-md focus:z-10',
      },
      loading: {
        white: 'bg-gray-200',
        indigo: 'bg-white bg-indigo-400',
        'indigo-light': 'bg-indigo-300',
        'indigo-dark': 'bg-indigo-700',
        red: 'bg-red-400',
        yellow: 'bg-yellow-400',
        green: 'bg-green-400',
        blue: 'bg-blue-400',
        purple: 'bg-purple-400',
        pink: 'bg-pink-400',
      },
    }
  },
  computed: {
    is_active (): boolean {
      return this.state === 'active' && this.progress === undefined
    },
    is_disabled (): boolean {
      return this.state === 'disabled'
    },
    cursor (): string {
      return this.is_active ? 'cursor-pointer' : this.is_disabled ? 'cursor-not-allowed' :  'cursor-wait'
    },
  },
  methods: {
    state_theme (theme: PushButtonTheme): any {
      if (this.is_active)
        return [this.themes[theme], this.active[theme]]
      return this.themes[theme]
    },
    click (): void {
      if (this.is_active) this.$emit('click')
    },
  },
})
</script>
