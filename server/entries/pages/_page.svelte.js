import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: 'h1.svelte-18b1luj{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-size:4rem\n}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<h1>Cristian David Pacheco</h1>\\n<p>Visit <a href=\\"https://kit.svelte.dev\\">kit.svelte.dev</a> to read the documentation</p>\\n\\n<style lang=\\"postcss\\">\\n    h1 {\\n        font-family: ui-sans-serif, system-ui, sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\";\\n        font-size: 4rem\\n}\\n</style>"],"names":[],"mappings":"AAII,iBAAG,CACC,WAAW,CAAE,aAAa,CAAC,CAAC,SAAS,CAAC,CAAC,UAAU,CAAC,CAAC,mBAAmB,CAAC,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,CAAC,CAAC,kBAAkB,CAC/H,SAAS,CAAE,IAAI;AACvB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-18b1luj" data-svelte-h="svelte-lzedfe">Cristian David Pacheco</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
