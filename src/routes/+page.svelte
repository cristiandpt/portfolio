<script>
// @ts-nocheck

	import SoftwareDeveloper from "$lib/Profession/SoftwareDeveloper.svelte";
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-col justify-start z-0">
    <h1 class="text-5xl font-bold">Cristian David Pacheco</h1>
    <div>
      <SoftwareDeveloper/>
    </div>
    <p>Visit my <a href="https://github.com/cristiandpt"><b>Github </b></a>repository for my awesome works</p>
  </div>
  <div class="flex justify-center z-1 relative">

      <div class="absolute -top-40 left-0  h-[95vh] translate-x-1/4 z-[1000]">
        <DotLottieSvelte
        src="/animation.json"
        loop
        autoplay
        autoResizeCanvas={false}
  />
    </div>
    
  </div>
</div>


<style lang="postcss">
    h1 {
        @apply font-sans;
        font-size: 4rem;
    }
</style>