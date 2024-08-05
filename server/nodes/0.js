import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DWsi6_Kz.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DWCX8Res.js"];
export const stylesheets = ["_app/immutable/assets/0.Wt__JWY6.css"];
export const fonts = [];
