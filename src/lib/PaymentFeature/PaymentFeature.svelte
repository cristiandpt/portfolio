<script lang="ts">
    import { base } from '$app/paths';
	import '@aarsteinmedia/dotlottie-player';  
</script>

<div class="flex gap-16 mt-8">
    <dotlottie-player
      class=""
      autoplay=""
      subframe=""
      loop=""
      src="{base}/payment_anim.json"
      style="width: 480px; height: 380px; margin-block-end: 12px;"
    > 
    </dotlottie-player>
    <div class="flex flex-col align-center justify-center">
      <h2 class="text-3xl font-bold">Pasarela de pagos</h2>
      <p class="h-auto py-4 w-[400px]">Implementación del SDK de epayco y Payu para el pago electronico de los diferentes servicios ofrecidos por la app, además del recarga de la billetera virtual.</p>
    </div>
  </div>