<script setup lang="ts">
import { provide, ref, computed } from 'vue';
import type { CountState } from './type';

const _count = ref(0);
const increment = (() => _count.value++) as CountState['increment'];
const decrement = (() => _count.value--) as CountState['decrement'];
const reset = (() => (_count.value = 0)) as CountState['reset'];

const count = computed(() => _count.value);

provide('countState', { count, increment, decrement, reset });
</script>

<template>
  <div class="container w-full h-fit">
    <div>
      <slot name="metrics-display"></slot>
    </div>
    <div class="counter flex place-items-center gap-5 justify-center">
      <div>
        <slot name="app-counter"></slot>
      </div>
      <slot name="control-pane"></slot>
    </div>
  </div>
</template>

<style scoped>
  .container {
    @apply w-full h-fit
  }

  .counter {
    @apply flex place-items-center gap-5 justify-center
  }
</style>