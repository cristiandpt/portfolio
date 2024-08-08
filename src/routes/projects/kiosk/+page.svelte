<script>

    import { base } from '$app/paths';
	import { Images } from "$lib/svelte-images";
    

    const images = [
      {
        src: `${base}/main_kiosko_in_plae_blur.png`
      },
      {
        src: `${base}/heigth_measurement.png`
      },
      {
        src: `${base}/indication_device.png`
      },
      {
        src: `${base}/measure_body.png`
      },
      {
        src: `${base}/kiosk_result.png`
      },
      {
        src: `${base}/recommends_kiosk_blur.png`
      },
      {
        src: `${base}/email_from_kiosk_blur.png`
    },
    ];
  </script>
  
  <style>
    .gallery-container {
      height: 75vh;
    }
  </style>
  
  <div class="p-4 gallery-container mb-16 flex justify-center content-center" >
    <Images {images} numCols={3} />
  </div>
