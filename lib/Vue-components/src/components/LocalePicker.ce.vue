<script setup lang="ts">
const emit = defineEmits<{
  localeChange: [locale: string];
}>();

const handleLocaleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const locale = target.value;
  emit('localeChange', locale);
};
</script>

<template>
  <select class="select text-black p-1 rounded-sm" @change="handleLocaleChange">
    <option value="en">English</option>
    <option value="fr">French</option>
  </select>
</template>

<style scoped>
.select {
  @apply text-black p-1 rounded-sm;
}
</style>
