<script>
// @ts-nocheck

	import SoftwareDeveloper from "$lib/Profession/SoftwareDeveloper.svelte";
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import myInfo from '../data/myInfo.json'
  import { base } from '$app/paths';

  let writtenName = ""
  let professionWriter = ""
  let nameCharIndex = 0
  let professionCharIndex = 0
  let isTyping = false
  
  

  $: {
    if (nameCharIndex < myInfo.name.length) {
      typeWriter()  
    }
    else {
      setTimeout(() => {
        typeProfession()  
      }, 500) 
    }
  }

  $: isHiddeCursor = myInfo.name.length > writtenName.length 

  function typeWriter() {
    setTimeout(() => {
      isTyping = true
      writtenName += myInfo.name[nameCharIndex] 
      nameCharIndex += 1 
      setTimeout(() => {
        isTyping = false
      }, 1000)
    }, 100)
  }

  function typeProfession() {
  if (professionCharIndex < myInfo.profession.length) {
    setTimeout(() => {
      professionWriter += myInfo.profession[professionCharIndex] 
      professionCharIndex += 1 
      typeProfession() // Call itself to write the next character
    }, 100)
  }
}


  
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-col justify-start z-0 md:ps-8">
    <h2 class="text-3xl md:text-5xl font-bold order-1 ">
      {writtenName}
      <div>
        {#if true}
        <span class={ !isTyping ? 'input_cursor': ''}/>  
      {/if}
      </div>
      
    </h2>
  </div>
  <div class="order-3 md:order-2 md:ps-8">  
    <SoftwareDeveloper profession={professionWriter}/>
    <p>Visit my <a href="https://github.com/cristiandpt"><b>Github </b></a>repository for my awesome works</p>
  </div>
  <div class="flex justify-center z-1 relative order-2 md:order-3">
    <div class="md:absolute left-0 top-0 h-[50vh] md:-top-40  md:h-[95vh] md:translate-x-1/4 z-[100]">
      <!-- The Credits to the lottie for  George KE: https://lottiefiles.com/18mbdcpbic-->
      <DotLottieSvelte
        src="{base}/animation.json"
        loop
        autoplay
        autoResizeCanvas={false}
      />
    </div>
    
  </div>
</div>


<style lang="postcss">
    h2 {
        @apply font-sans;
        font-size: 4rem;
    }

   .input_cursor { 
      animation: blink .6s linear infinite alternate;
   }

   /* The blink effect on the cursor */
   @keyframes blink {
      0% {opacity: 1;}
      40% {opacity: 1;}
      60% {opacity: 0;}
      100% {opacity: 0;}
   }

</style>