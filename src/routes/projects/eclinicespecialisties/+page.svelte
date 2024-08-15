
<script>
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import { base } from '$app/paths';
</script>

<div class="mt-4 w-[320px] h-[320px] mx-auto">
  <DotLottieSvelte
  src="{base}/building.json"
  loop
  autoplay
  autoResizeCanvas={false}
/>
<div class="mt-4 w-[320px] h-[320px] mx-auto font-bold text-center">
I'm building this site rigth now. Be patient.
</div>
</div>