import i18next, { InitOptions } from 'i18next';

import * as en from './translations/en.json';
import * as fr from './translations/fr.json';

const defaultLocale = 'en';

export function setupI18n(
  options: InitOptions = {},
) {
  i18next.init({
    fallbackLng: defaultLocale,
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    ...options,
  });

  return i18next;
}

export const translations = {
  en,
  fr,
}