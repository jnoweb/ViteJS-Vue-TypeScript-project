import { createApp } from 'vue';
import I18NextVue from 'i18next-vue';
import { setupI18n } from '@vue-workspace/translations';

import App from './app/App.vue';
import "./styles.css";

const app = createApp(App);

app.use(I18NextVue, {
  i18next: setupI18n(),
  rerenderOn: ['languageChanged', 'loaded'],
});
app.mount('#root');
