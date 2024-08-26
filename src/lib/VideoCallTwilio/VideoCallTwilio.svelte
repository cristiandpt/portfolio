<script lang="ts">
    import { base } from '$app/paths';
    import '@aarsteinmedia/dotlottie-player';  
</script>    

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