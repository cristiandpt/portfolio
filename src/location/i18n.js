// src/i18n.js
import { register, init, locale } from 'svelte-i18n';

register('en', () => import('./en.json'));
//register('en-US', () => import('./en-US.json'));
register('es', () => import('./es.json'));

let defaultLocale = 'en';

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});
// starts loading 'en-US' and 'en'
export { locale };