<script setup lang="ts">
import { inject } from 'vue';

import type { CountState } from './type';

const { count } = inject<CountState>('countState') as CountState;

defineProps<{
  label: string;
}>();
</script>

<template>
  <div
    class="display flex w-full h-52 bg-slate-100 text-black justify-center place-items-center text-3xl font-extrabold"
  >
    {{ label }}: <span>{{ count }}</span>
  </div>
</template>

<style>
.display {
  @apply flex w-full h-52 bg-slate-100 text-black justify-center place-items-center text-3xl font-extrabold;
}
</style>
