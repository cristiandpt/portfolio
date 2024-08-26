
<script>
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
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

<h2 class="mb-8">Gallery</h2>
<div class="p-4 gallery-container mb-16 flex justify-center content-center" >
  <Images {images} numCols={2} />
</div>