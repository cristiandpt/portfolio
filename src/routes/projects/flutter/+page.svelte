<script>
  import { base } from '$app/paths';
	import CleanArch from '$lib/CleanArch/CleanArch.svelte';
	import FirebaseServices from '$lib/FirebaseServices/FirebaseServices.svelte';
	import ModulingArch from '$lib/ModulingArch/ModulingArch.svelte';
	import PaymentFeature from '$lib/PaymentFeature/PaymentFeature.svelte';
	import { Images } from "$lib/svelte-images";
	import VideoCallTwilio from '$lib/VideoCallTwilio/VideoCallTwilio.svelte';
    
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
  <VideoCallTwilio /> 
  <ModulingArch />
  <FirebaseServices />
  <PaymentFeature />
  
   <div class="p-4 gallery-container pb-32">
     <h2 class="text-2xl font-bold mt-16 mb-4">Gallery</h2>
     <p class="h-auto py-4 mb-4">A continuación, se presenta screenshots de las diferentes sesiones y flujos dentro de la app:</p>
     <Images {images} numCols={5} />
   </div>  
</div>  