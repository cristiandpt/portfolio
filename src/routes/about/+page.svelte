<script>
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
    import { base } from '$app/paths';
    import { t } from 'svelte-i18n';
</script>

<h1 class="text-3xl text-gray-800 font-bold text-center mb-12">{$t('about_me.title', { default: 'About' })}</h1>
<p class="text-lg text-gray-600 text-center w-1/2 mx-auto ">{$t('about_me.description', { default: 'Descripcion' })}</p>
<div class="mt-4 w-[240px] h-[240px] mx-auto">
    <DotLottieSvelte
    src="{base}/think.json"
    loop
    autoplay
    autoResizeCanvas={false}
  />
</div>
