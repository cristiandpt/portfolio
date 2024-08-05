

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hello/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B0CQO-pW.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DWCX8Res.js"];
export const stylesheets = [];
export const fonts = [];
