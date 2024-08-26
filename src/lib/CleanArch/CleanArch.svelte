<script lang="ts">
    import { base } from '$app/paths';
	import '@aarsteinmedia/dotlottie-player';  
</script>

<div class="flex gap-16 mt-28">
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Arquitectura Clean</h2>
      <p class="h-auto py-4 w-[400px]">Las diferentes responsabilidades se se designaron a los modulos de data, core, view, iot y networking. La comunicación entre ellos se implementó con interfaces para el desacolado del código y la facilidad para la Implementación de pruebas, en aras de ajustarse a los principos <b>SOLID</b></p>
    </div>
    <img class="modules_clean w-[480px] h-auto" src={`${base}/clean_arch.png`} alt="logo" />
  </div>