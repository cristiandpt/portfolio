

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4kmtlleN.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DWCX8Res.js","_app/immutable/chunks/entry.Dicul6aY.js"];
export const stylesheets = [];
export const fonts = [];
