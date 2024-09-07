<script>
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
    import { base } from '$app/paths';
    import { t } from 'svelte-i18n';
</script>

<h1 class="text-3xl text-gray-800 font-bold text-center mb-12">{$t('contact.contact_me', { default: 'Contact' })}</h1>
<p class="text-lg text-gray-600 text-center w-1/2 mx-auto ">{$t('contact.write_at', { default: 'Description' })}<a class="text-gray-800 font-bold" href="mailto:cristiandpt@hotmail.com">cristiandpt@hotmail.com</a></p>
<p class="text-lg text-gray-600 text-center w-1/2 mx-auto">{$t('contact.find_me_linkedin', { default: 'Description' })} <a class="text-gray-800 font-bold" href="https://www.linkedin.com/in/cristian-david-pacheco-torres-0859ba110/">Cristian David Pacheco</a></p>
<div class="mt-4 w-[320px] h-[320px] mx-auto">
    <DotLottieSvelte
    src="{base}/contact.json"
    loop
    autoplay
    autoResizeCanvas={false}
  />
</div>
