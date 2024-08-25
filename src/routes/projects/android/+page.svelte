<script>

  import { base } from '$app/paths';
	import { Images } from "$lib/svelte-images";
  import '@aarsteinmedia/dotlottie-player';  

    const images = [
      {
        src: `${base}/main_dr_help_blured.png`
      },
      {
        src: `${base}/main_dr_help_main_blured.png`
      },
      {
        src: `${base}/scheduling.png`
      },
      {
        src: `${base}/comments_appointment_blur.png`
      },
      {
        src: `${base}/main_dr_help_covenios_blur.png`
      },
      {
        src: `${base}/payment_dr_help_blur.png`
      },
      {
        src: `${base}/videocall_dr_blur.png`
    },
    {
        src: `${base}/lsita_medicos_dr_help_blured.png`
    },
    {
        src: `${base}/exams_android.png`
    },
    {
        src: `${base}/report_android.png`
    },
    {
        src: `${base}/recommends_dr.png`
    },
    {
        src: `${base}/edit_profile.png`
    },
    {
        src: `${base}/main_new.png`
    }
    ];
  </script>
  
  <style>
    .gallery-container {
      height: 75vh;
    }
  </style>
  <div class="mx-auto max-w-[1020px]">
  <div class="flex gap-16">
    <img class="modules_clean w-[480px] h-auto" src={`${base}/modules.svg`} alt="logo" />
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Arquitectura Modular</h2>
      <p class="h-auto py-4 w-[400px]">Las diferentes funciones principales de la aplicación móvil se disgregaron en modulos para permitir el enfoque del desarrollo y la reutilización. Para mannejar las dependencias e desacoplar el código se usó ls biblioteca <b>Dagger</b> como injector de dependencias.</p>
    </div>
  </div>
  <div class="flex gap-16 mt-28">
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Arquitectura Clean</h2>
      <p class="h-auto py-4 w-[400px]">Las diferentes funciones principales de la aplicación móvil se disgregaron en modulos para permitir el enfoque del desarrollo y la reutilización, en aras de ajustarse a los principos SOLID</p>
    </div>
    <img class="modules_clean w-[480px] h-auto" src={`${base}/clean_arch.png`} alt="logo" />
  </div>

  <div class="flex gap-16 mt-0">
    <dotlottie-player
      class=""
      autoplay=""
      subframe=""
      src="{base}/videocall_anim.json"
      style="width: 420px; height: 580px; margin-block-end: 12px;"
    > 
   </dotlottie-player> 
   <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Videollamadas y <br/>notificaciones push</h2>
      <p class="h-auto py-4 w-[400px]">Implementación del servicio de videoconsulta a través de los servicios ofrecidos por el SDK de Twilio.</p>
    </div>
  </div>

  <div class="flex gap-16 mt-0">
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Patrón Store y<br/> modo offline</h2>
      <p class="h-auto py-4 w-[400px]">Modelo Store con tiempo de vida de los datos y sincronización con la nube para la actualización de los mismos, automatica o manualmente.</p>
    </div>
    <dotlottie-player
      class=""
      autoplay=""
      subframe=""
      loop=""
      src="{base}/cached_anim.json"
      style="width: 3800px; height: 380px; margin-block-end: 12px;"
    > 
   </dotlottie-player> 
  </div>
  
  <div class="p-4 gallery-container mb-16 ">
    <h2 class="text-2xl font-bold mt-16 mb-8">Gallery</h2>
    <Images {images} numCols={5} />
  </div>
</div>