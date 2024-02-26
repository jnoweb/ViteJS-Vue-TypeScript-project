<script setup lang="ts">
import { inject } from 'vue'

import type { CountState } from './type'

const { reset } = inject<CountState>('countState') as CountState

defineProps<{
  label: string
}>()
</script>

<template>
  <button class="button bg-red-500 text-white border-red-500 vue-button" @click="reset">
    {{ label }}
  </button>
</template>

<style scoped>
  .button {
    @apply  bg-red-500 text-white border-red-500 vue-button;
  }
</style>
