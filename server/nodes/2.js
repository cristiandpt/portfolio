

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9gjKnL92.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DWCX8Res.js"];
export const stylesheets = ["_app/immutable/assets/2.BiqOqrqC.css"];
export const fonts = [];
