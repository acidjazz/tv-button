<template>
  <span class="inline-flex shadow-sm rounded">
    <slot></slot>
  </span>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'button-group',
})
</script>
