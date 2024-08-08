<script>
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
    import { base } from '$app/paths';
</script>

<h1 class="text-3xl text-gray-800 font-bold text-center mb-12">Contact Me</h1>
<p class="text-lg text-gray-600 text-center w-1/2 mx-auto ">Write me at <a class="text-gray-800 font-bold" href="mailto:cristiandpt@hotmail.com">cristiandpt@gmail.com</a></p>
<p class="text-lg text-gray-600 text-center w-1/2 mx-auto">Find me at Linkedin: <a class="text-gray-800 font-bold" href="https://www.linkedin.com/in/cristian-david-pacheco-torres-0859ba110/">Cristian David Pacheco</a></p>
<div class="mt-4 w-[320px] h-[320px] mx-auto">
    <DotLottieSvelte
    src="{base}/contact.json"
    loop
    autoplay
    autoResizeCanvas={false}
  />
</div>