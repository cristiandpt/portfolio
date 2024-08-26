<script>

  import { base } from '$app/paths';
	import CleanArch from '$lib/CleanArch/CleanArch.svelte';
	import PaymentFeature from '$lib/PaymentFeature/PaymentFeature.svelte';
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

  <div class="flex gap-16 mb-12">    
      <div class="flex flex-col align-center justify-center">
        <h1 class="text-5xl font-bold">eHealth</h1>
        <h2 class="text-3xl font-bold mt-8">Descripción</h2>
        <p class="h-auto py-4">Aplicación de telemedicina con servicios de videoconsultas médicas con diferentes especialidades, agendaminetos de citas presenciales, compra y gestión de examenes médicos, compra de medicamentos y convenios con entidades farmaceúticas y visualización, y seguimiento de medidas de signos de salud y condiciones vitales que se enviaban por telemetría. </p>
      </div>
    </div>    
  <div class="flex gap-16">
    <img class="modules_clean w-[480px] h-auto" src={`${base}/modules.svg`} alt="logo" />
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Arquitectura Modular</h2>
      <p class="h-auto py-4 w-[400px]">Las diferentes funciones principales de la aplicación móvil se disgregaron en modulos para permitir el enfoque del desarrollo y la reutilización. Para mannejar las dependencias e desacoplar el código se usó ls biblioteca <b>Dagger</b> como injector de dependencias.</p>
    </div>
  </div>
  
  <CleanArch />

  <div class="flex gap-16 mt-0">
    <dotlottie-player
      class=""
      autoplay=""
      subframe=""
      loop=""
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
      style="width: 520px; margin-block-end: 12px;"
    > 
   </dotlottie-player> 
  </div>
  
  <PaymentFeature />

    <div class="flex gap-16 mt-16">
      <div class="flex flex-col align-center justify-center">
        <h2 class="text-3xl font-bold">Programación reactiva</h2>
        <p class="h-auto py-4 w-[400px]">Implementación del patrón Observable-Observador mediante la librería RxJava, y luego Coroutines y Flow, para la subscrición a eventos de UI, la petición exterior de datos y el cambio de estado de la aplicación con respecto al almacenamiento local.</p>
      </div>
      <div class="flex flex-row align-center justify-center"> 
        <img src="{base}/rxjavacorountines_trans.png" class="w-24 h-16 self-end translate-x-[95px]" alt="logo" />
        <img src="{base}/reactive_model_trans.png" 
          class="w-[420px] h-auto"
          alt="logo" />
      </div>
    </div>

  <div class="flex gap-16 mt-32">
      <div class="flex flex-row align-center justify-center gap-4"> 
        <img src="{base}/mvvm_diagram.png" 
          class="w-[280px] h-[200px] translate-y-[-50px]" 
          alt="logo" />
        <img src="{base}/mvi_diagram.png" 
          class="w-[260px] translate-y-[75px]"
          alt="logo" />
      </div>
      <div class="flex flex-col align-center justify-center">
        <h2 class="text-3xl font-bold">Patrones de diseño MVI y MVVM</h2>
        <p class="h-auto py-4 w-[400px]">Separación de responsabilidades entre la vista; el controlador, que despacha eventos a capas profundas y expone data a subscribir en la vista; y el modelo, que ejecuta la lógica de negocio.</p>
      </div>
    </div>

    <div class="flex gap-16 mt-32">
      <div class="flex flex-col align-center justify-center">
        <h2 class="text-3xl font-bold">Autenticación a través <br/> servicios de Firebase</h2>
        <p class="h-auto py-4 w-[400px]">Implementación de la autenticación de Firebase para el registro y acceso de usuarios a la app mediante proveedores de autenticación como Google, Facebook y Twitter.</p>
      </div>
      <div class="flex flex-row align-center justify-center gap-4 ps-16"> 
        <img src="{base}/firebase_services.svg" 
          class="w-[480px]" 
          alt="logo" />
      </div>
    </div>

    <div class="flex gap-16 mt-4">
      <div class="flex flex-row align-center justify-center gap-4 ps-16"> 
        <img src="{base}/testing_app.svg" 
          class="w-[260px]" 
          alt="logo" />
      </div>
      <div class="flex flex-col align-center justify-center ps-24">
        <h2 class="text-3xl font-bold">Testing</h2>
        <p class="h-auto py-4 w-[400px]">Se sigue la pirámide de pruebas, donde mayores son las pruebas unitarias. Pruebas con JUnit, Mockito para pruebas de integración, Faker para generación de datos y espresso para la pruebas de interacción.</p>
      </div>
    </div>
  
  <div class="p-4 gallery-container pb-32">
    <h2 class="text-2xl font-bold mt-16 mb-4">Gallery</h2>
    <p class="h-auto py-4 mb-4">A continuación, se presenta screenshots de las diferentes sesiones y flujos dentro de la app:</p>
    <Images {images} numCols={5} />
  </div>
</div>