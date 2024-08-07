<script>
// @ts-nocheck

	import SoftwareDeveloper from "$lib/Profession/SoftwareDeveloper.svelte";
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import { base } from '$app/paths';
  
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-col justify-start z-0">
    <h2 class="text-3xl md:text-5xl font-bold order-1">Cristian David Pacheco</h2>
  </div>
  <div class="order-3 md:order-2">  
    <SoftwareDeveloper/>
    <p>Visit my <a href="https://github.com/cristiandpt"><b>Github </b></a>repository for my awesome works</p>
  </div>
  <div class="flex justify-center z-1 relative order-2 md:order-3">
    <div class="md:absolute left-0 top-0 h-[50vh] md:-top-40  md:h-[95vh] md:translate-x-1/4 z-[100]">
      <!-- The Credits to the lottie for  George KE: https://lottiefiles.com/18mbdcpbic-->
      <DotLottieSvelte
        src="{base}/animation.json"
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