<script lang="ts">
    import { base } from '$app/paths';
	import '@aarsteinmedia/dotlottie-player';  
</script>

<div class="flex gap-16">
    <img class="modules_clean w-[480px] h-auto" src={`${base}/modules.svg`} alt="logo" />
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Arquitectura Modular</h2>
      <p class="h-auto py-4 w-[400px]">Las diferentes funciones principales de la aplicación móvil se disgregaron en modulos para permitir el enfoque del desarrollo y la reutilización. Para mannejar las dependencias e desacoplar el código se usó ls biblioteca <b>Dagger</b> como injector de dependencias.</p>
    </div>
  </div>