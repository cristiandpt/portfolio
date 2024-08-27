<script>
  import { base } from '$app/paths';
	import { Images } from "$lib/svelte-images";

    const images = [
      {
        src: `${base}/eclinic/eclinic_1.png`
      },
      {
        src: `${base}/eclinic/eclinic_5.png`
      },
      {
        src: `${base}/eclinic/eclinic_6.png`
      },
      {
        src: `${base}/eclinic/eclinic_3.png`
      },
      {
        src: `${base}/eclinic/eclinic2.png`
      },
      {
        src: `${base}/eclinic/eclinic_7.png`
      },
      {
        src: `${base}/eclinic/eclinic_0.png`
      },
      {
        src: `${base}/eclinic/eclinic_8.png`
      },
      
    ];
  </script>

<div class="p-4 gallery-container pb-16">
  <h2 class="text-2xl font-bold mb-4">Gallery</h2>
  <div class="p-4 gallery-container mb-16 flex justify-center content-center" >
    <Images {images} numCols={2} />
  </div>
</div>