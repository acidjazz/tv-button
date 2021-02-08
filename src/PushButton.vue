<template>
  <n-link
    v-if="to !== false"
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
    v-else-if="href !== false"
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

  <span v-else-if="to === false" :class="['inline-flex relative', outerGroup[group], {'shadow-sm': theme !== 'text'}]" @click="click">

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
        v-if="progress !== false"
        :style="`width: ${progress}%`"
        :class="loading[theme]"
        class="absolute inset-0 w-full h-full cursor-wait"
      />
      <span
        v-if="progress !== false"
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

<script>
export default {
  props: {
    to: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    href: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    size: {
      type: String,
      default: 'm',
      validate: size => ['xs', 's', 'm', 'l', 'xl'].includes(size),
    },
    theme: {
      type: String,
      default: 'white',
      validate: theme => ['white', 'indigo', 'indigo-light', 'indigo-dark'].includes(theme),
    },
    state: {
      type: String,
      default: 'active',
      validate: state => ['active', 'loading', 'loading-quiet', 'disabled'].includes(state),
    },
    progress: {
      type: [Boolean, Number],
      default: false,
    },
    group: {
      type: String,
      required: false,
      default: 'single',
      validate: group => ['single', 'left', 'right', 'middle'].includes(group)
    },
    innerClass: {
      type: String,
      required: false,
      default: '',
    },
    ping: {
      type: Boolean,
      required: false,
      default: false,
    },
    pingColor: {
      type: String,
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
        green: 'text-white bg-green-600',
      },
      active: {
        text: 'hover:text-gray-500 hover:bg-gray-100 focus:outline-none active:text-gray-800 active:bg-gray-50',
        white: 'hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50',
        indigo: 'hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700',
        'indigo-light': 'hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200',
        'indigo-dark': 'hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:shadow-outline-indigo active:bg-indigo-800',
        red: 'hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700',
        green: 'hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700',
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
        middle: '-ml-px',
        right: 'rounded-r-md',
      },
      innerGroup: {
        single: 'rounded-md',
        left: 'rounded-l-md border-r-0 focus:z-10',
        middle: 'focus:z-10',
        right: 'rounded-r-md border-l-0 focus:z-10',
      },
      loading: {
        white: 'bg-gray-200',
        indigo: 'bg-white bg-indigo-400',
        'indigo-light': 'bg-indigo-300',
        'indigo-dark': 'bg-indigo-700',
        red: 'bg-red-400',
        green: 'bg-green-400',
      },
    }
  },
  computed: {
    is_active () {
      return this.state === 'active' && this.progress === false
    },
    is_disabled () {
      return this.state === 'disabled'
    },
    cursor () {
      return this.is_active ? 'cursor-pointer' : this.is_disabled ? 'cursor-not-allowed' :  'cursor-wait'
    },
  },
  methods: {
    state_theme (theme) {
      if (this.is_active)
        return [this.themes[theme], this.active[theme]]
      return this.themes[theme]
    },
    click () {
      if (this.is_active) this.$emit('click')
    },
  },
}
</script>
