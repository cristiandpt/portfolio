<script>
  import { base } from '$app/paths';
	import { Images } from "$lib/svelte-images";

    const images = [
      {
        src: `${base}/specialitites/specialities.png`
      },
      {
        src: `${base}/specialitites/specialites_2.png`
      },
      {
        src: `${base}/specialitites/specialities_3.png`
      },
      {
        src: `${base}/specialitites/specialities_8.png`
      },
      {
        src: `${base}/specialitites/specialties_6.png`
      },
      {
        src: `${base}/specialitites/specialties_10.png`
      },
      {
        src: `${base}/specialitites/specilities_4.png`
      },
      {
        src: `${base}/specialitites/specilities_5.png`
    },
    {
        src: `${base}/specialitites/specilities_11.png`
    },
    {
        src: `${base}/specialitites/specilities_12.png`
    },
    ];
  </script>

<div class="p-4 gallery-container pb-16">
  <h2 class="text-2xl font-bold mb-4">Gallery</h2>
  <div class="p-4 gallery-container mb-16 flex justify-center content-center" >
    <Images {images} numCols={2} />
  </div>
</div>