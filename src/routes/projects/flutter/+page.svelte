<script>
    import { base } from '$app/paths';
	import CleanArch from '$lib/CleanArch/CleanArch.svelte';
	import ModulingArch from '$lib/ModulingArch/ModulingArch.svelte';
	import PaymentFeature from '$lib/PaymentFeature/PaymentFeature.svelte';
	import { Images } from "$lib/svelte-images";
    

    const images = [
      {
        src: `${base}/main_flutter_blured.png`
      },
      {
        src: `${base}/Result_measurement_flutter.png`
      },
      {
        src: `${base}/eclinic_presentation.png`
      },
      {
        src: `${base}/kiosk_f.png`
      },
      {
        src: `${base}/flutter_cali.png`
      },
      {
        src: `${base}/accountt.png`
      },
      {
        src: `${base}/specialitites.png`
    },
    {
        src: `${base}/report_android.png`}
    ];
  </script>
  
  <style>
    .gallery-container {
      height: 75vh;
    }
  </style>

<div class="mx-auto max-w-[1020px]">
  <CleanArch />
  <ModulingArch />
  <PaymentFeature />
</div>

  <div class="p-4 gallery-container mb-16 flex justify-center content-center" >
    <Images {images} numCols={5} />
  </div>
