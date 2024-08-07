import { writable } from 'svelte/store';

export const theme = writable('light');

export function setupTheme() {
  const storedTheme = localStorage.getItem('theme') || 'light';
  theme.set(storedTheme);

  theme.subscribe(theme_variant => {
    localStorage.setItem('theme', theme_variant);
  });
}

