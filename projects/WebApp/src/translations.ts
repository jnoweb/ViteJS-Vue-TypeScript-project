import { setupI18n } from '@vue-workspace/translations';

function setAttributes(I18n, group) {
  const MetricsDisplay = document.querySelector(`${group} .metrics-display`);
  const ControlPane = document.querySelector(`${group} .control-pane`);
  const AppCounter = document.querySelector(`${group} .app-counter`);

  MetricsDisplay.setAttribute('label', I18n.t('counter'));
  ControlPane.setAttribute('label', I18n.t('reset'));
  AppCounter.setAttribute('minuslabel', I18n.t('minus'));
  AppCounter.setAttribute('pluslabel', I18n.t('plus'));
}

function handleLocaleChange(I18n, setAttributes) {
  const LocalePickerGroup1 = document.querySelector('#group1 .locale-picker');
  const LocalePickerGroup2 = document.querySelector('#group2 .locale-picker');

  LocalePickerGroup1.addEventListener('localeChange', (locale: any) => {
    I18n.changeLanguage(...locale.detail);
 
    setAttributes(I18n, '#group1');
  });

  LocalePickerGroup2.addEventListener('localeChange', (locale: any) => {
    I18n.changeLanguage(...locale.detail);
 
    setAttributes(I18n, '#group2');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const I18n = setupI18n();

  setAttributes(I18n, '#group1');
  setAttributes(I18n, '#group2');
  handleLocaleChange(I18n, setAttributes);
});
