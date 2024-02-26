<script setup lang="ts">
import {
  LocalePicker,
  AppCounter,
  AppFunctionality,
  ControlPane,
  MetricsDisplay,
} from '@vue-workspace/Vue-components';

import { useTranslation } from 'i18next-vue';

const { i18next, t} = useTranslation();

const handleLocaleChange = (locale: string) => {
  i18next.changeLanguage(locale);
};
</script>

<template>
  <div class="flex flex-col h-full">
    <header class="w-full h-10 place-items-center flex justify-end px-5">
      <LocalePicker @localeChange="handleLocaleChange" />
    </header>
    <main class="h-5/6 place-items-center flex justify-center">
      <AppFunctionality>
        <template #metrics-display>
          <MetricsDisplay :label="t('counter')"> </MetricsDisplay>
        </template>
        <template #app-counter>
          <AppCounter :minuslabel="t('minus')" :pluslabel="t('plus')">
          </AppCounter>
        </template>
        <template #control-pane>
          <ControlPane :label="t('reset')"> </ControlPane>
        </template>
      </AppFunctionality>
    </main>
  </div>
</template>
