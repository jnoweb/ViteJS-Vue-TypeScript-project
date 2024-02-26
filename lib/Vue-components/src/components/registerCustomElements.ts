import { defineCustomElement } from 'vue';

import AppCounter from './AppCounter.ce.vue';
import AppFunctionality from './AppFunctionality.ce.vue';
import ControlPane from './ControlPane.ce.vue';
import LocalePicker from './LocalePicker.ce.vue';
import MetricsDisplay from './MetricsDisplay.ce.vue';

import "../assets/main.css";

// Register the custom elements

const WebAppCounter = defineCustomElement(AppCounter);
const WebAppFunctionality = defineCustomElement(AppFunctionality);
const WebMetricsDisplay = defineCustomElement(MetricsDisplay);
const WebLocalePicker = defineCustomElement(LocalePicker);
const WebControlPane = defineCustomElement(ControlPane);

export default function registerAsCustomElements() {
  window.customElements.define('vue-app-functionality', WebAppFunctionality);
  window.customElements.define('vue-app-counter', WebAppCounter);
  window.customElements.define('vue-metrics-display', WebMetricsDisplay);
  window.customElements.define('vue-locale-picker', WebLocalePicker);
  window.customElements.define('vue-control-pane', WebControlPane);
}
