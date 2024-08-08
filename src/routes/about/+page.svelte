<script>
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
    import { base } from '$app/paths';
</script>

<h1 class="text-3xl text-gray-800 font-bold text-center mb-12">About Me</h1>
<p class="text-lg text-gray-600 text-center w-1/2 mx-auto ">I'm an Cristian David Pacheco, an autodidact with a passion for technology and a curiosity that drives me to experiment with new things. I love diving into the latest tech trends and figuring out how they work. My hobbies include savoring delicious food, traveling to new places, and immersing myself in books, especially those that delve into philosophy. Exploring different philosophies helps me broaden my perspective and understand the world in unique ways.</p>
<div class="mt-4 w-[240px] h-[240px] mx-auto">
    <DotLottieSvelte
    src="{base}/think.json"
    loop
    autoplay
    autoResizeCanvas={false}
  />
</div>
