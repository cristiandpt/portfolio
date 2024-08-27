
<script>
    import { base } from '$app/paths';
	  import { Images } from "$lib/svelte-images";
	
    const images = [
      {
        src: `${base}/elsol/landing_page_sun_blur.png`
      },
      {
        src: `${base}/elsol/sun_in_blur.png`
      },
      {
        src: `${base}/elsol/sun_frames_custom_blur.png`
      }, 
      {
        src: `${base}/elsol/checkout_blur.png`
      },
       {
        src: `${base}/elsol/frame_landscape_blur.png`
      },
      {
        src: `${base}/elsol/paspartu_blur.png`
      },
      {
        src: `${base}/elsol/landscape.png`
      },
      {
        src: `${base}/elsol/mirror_frame_blur.png`
      },
      {
        src: `${base}/elsol/customoize_frame_blur.png`
      }, 
      {
        src: `${base}/elsol/articles.png`
      },
     
      
    ];

</script>

<style>
  .gallery-container {
    height: 75vh;
  }
</style>
<div class="mx-auto max-w-[1020px]">
  <div class="p-4 gallery-container pb-32 mb-16 flex-col justify-center content-center">
    <h2 class="text-2xl font-bold mb-4">Gallery</h2>
    <p class="h-auto py-4 mb-4">A continuación, se presenta screenshots de las diferentes sesiones y flujos dentro de la app:</p>
    <Images {images} numCols={2} />
  </div>
</div>