// src/i18n.js
import { register } from 'svelte-i18n';

register('en', () => import('./en.json'));
//register('en-US', () => import('./en-US.json'));
register('es', () => import('./es.json'));

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
// starts loading 'en-US' and 'en'
