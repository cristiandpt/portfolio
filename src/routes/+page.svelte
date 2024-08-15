<script>
// @ts-nocheck

	import SoftwareDeveloper from "$lib/Profession/SoftwareDeveloper.svelte";
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import myInfo from '../data/myInfo.json'
  import { base } from '$app/paths';
  import { fade, scale } from 'svelte/transition';

  let writtenName = ""
  let professionWriter = ""
  let nameCharIndex = 0
  let professionCharIndex = 0
  let isTyping = false
  let displayElementsCounter = 0; 
  

  $: {
    if (nameCharIndex < myInfo.name.length) {
      isTyping = true
      setTimeout(() => {
        writtenName += myInfo.name[nameCharIndex] // Get each caracter of the name array
        nameCharIndex += 1
        const isFinishedTyping = nameCharIndex + 1 > myInfo.name.length // If is ended, activate the cursor blinking effect.
        if ( isFinishedTyping ) {
          setTimeout(() => {
            isTyping = false
          }, 0)
        } 
    }, 100)
    }
    else {
      if (displayElementsCounter === 0) { setTimeout(()=>{
        displayElementsCounter += 1
      }, 2000)
    }
    else {
      if (professionCharIndex < myInfo.profession.length) {
        setTimeout(() => {
          professionWriter += myInfo.profession[professionCharIndex] 
          professionCharIndex += 1 
      }, 100)
    }
    else {
      if(displayElementsCounter === 1) {
        setTimeout(() => {
          displayElementsCounter += 1
      }, 500)
      } else {
        isTyping = false
        if ( displayElementsCounter === 2) {
          setTimeout(() => {
          displayElementsCounter += 1 
        }, 800);
        }
      }
    }
    }
  }
  }  
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-col justify-start z-0 md:ps-8">
    <h2 class="text-3xl md:text-5xl font-bold order-1 me-0">
      {writtenName}{#if (0 === displayElementsCounter)}
        <span class={ !isTyping ? 'input_cursor': '' + "m-0 p-0" }>|</span>  
      {/if}
    </h2>
  </div>
  <div class=" order-3 md:order-2 md:ps-8 md:h-16">  
    <div class="flex flex-row">
      <SoftwareDeveloper profession={professionWriter}/>{#if (1 === displayElementsCounter || 2 === displayElementsCounter) }
      <span class={ (!isTyping ? 'input_cursor': '') + 'text-[1.5rem] md:text-3xl font-bold' }>|</span>  
    {/if} 
    </div>
    {#if (displayElementsCounter === 3)}
      <p transition:fade|local|scale={{duration: 500,  start: 0.25}}>Visit my <a href="https://github.com/cristiandpt"><b>Github </b></a>repository for my awesome works</p>
    {/if}
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