<script setup lang="ts">
import { inject } from 'vue';

import type { CountState } from './type';

const { increment, decrement } =
  (inject<CountState>('countState') as CountState) || {};

  defineProps<{
  pluslabel: string;
  minuslabel: string;
}>();

</script>

<template>
  <div class="counter flex w-full h-20 justify-center place-items-center gap-5">
    <button
      class="plus-button vue-button bg-green-700 text-white border-green-700"
      @click="increment"
    >
      {{ pluslabel }}
    </button>
    <button
      class="minus-button vue-button text-green-700 border-green-70"
      @click="decrement"
    >
      {{ minuslabel }}
    </button>
  </div>
</template>

<style scoped>
.counter {
  @apply flex w-full h-20 justify-center place-items-center gap-5;
}
.plus-button {
  @apply vue-button bg-green-700 text-white border-green-700;
}

.minus-button {
  @apply vue-button text-green-700 border-green-700;
}
</style>
