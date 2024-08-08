<script>
	import Card from '$lib/Card/Card.svelte';
    import Carousel from 'svelte-light-carousel';
    import { base } from '$app/paths';
	import { deserialize } from '$app/forms';

    const slides = [
        { 
          url: `${base}/email_from_kiosk_crop.png`, 
          path: `${base}/projects/kiosk`, 
          title: `Kiosko de la salud`,
          description: "Cabina de atención médica en la cual se toman mediciones corporales de una persona a través de dispositivos IoT.",
          technologies: [`${base}/android_logo_1.png`, `${base}/kotlin_logo.png`]
        },

        { 
          url: `${base}/eHealth.jpg`, 
          path: `${base}/projects/android`,
          title:"Aplicación eHealth",
          description: "Aplicación para agendamientos de citas médicas, telemedicina, consultas, mdicamentos y seguimiento de historias clínicas.",
          technologies: [`${base}/java_logo_1.png`, `${base}/android_logo_1.png`, `${base}/kotlin_logo.png`]
        },
         { 
            url: `${base}/flutter_logo.png`, 
            path: `${base}/projects/flutter`,
            title: `${base}/projects/android`,
            description: "",
            technologies: ["android_logo_1", "kotlin_logo"] 
        }, 
         { 
            url: `${base}/ionic_logo.png`, 
            path: `${base}/projects/ionic`,
            title: `${base}/projects/android`,
            description: "",
            technologies: ["android_logo_1", "kotlin_logo"] 
        },
        ]

    const slidesBackend = [
        { 
          url: `${base}/android_logo.png`, 
          path: `${base}/projects/android`, 
        }, 
        { 
          url: `${base}/ios_logo.png`, 
          path: `${base}/projects/io`, 
        },
         { 
            url: `${base}/flutter_logo.png`, 
            path: `${base}/projects/flutter`, 
         },
         { 
            url: `${base}/ionic_logo.png`, 
            path: `${base}/projects/ioni`
        },
        ]
    
</script>

<p class="text-2xl font-bold">Mobile Development</p>
<div class="flex width-full justify-center mt-8">
    <Carousel {slides} 
              autoPlay={2}
              layout={{
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }}
            slideClass="cp_carousel"
              >
        <div  class="flex justify-center" slot="slide" let:slide >
            <a href={slide.path}>
                <Card title="" subtitle=""> 
                    <div class="flex justify-start"> 
                        <img class="logo_icon w-16 h-16 object-contain" src={slide.url} alt="logo"/>
                        <div>
                            <h3 class="ps-4 text-lg font-medium mb-2 text-gray-600">{slide.title}</h3>
                            <p class="ps-4 text-xs text-justify text-gray-800">{slide.description}</p>
                            <div class="flex justify-end mb-4 mt-1">
                                {#each slide.technologies as technology}
                                    <img class="w-8 h-8 object-contain pe-2" 
                                         src={technology}
                                         alt="logo"/>
                                {/each}
                            </div>
                        </div>
                        
                    </div> 
                    
                </Card>
            </a>    
    </Carousel>
</div>

<p class="text-2xl font-bold mt-16">Backend Development</p>
<div class="flex width-full justify-center">
    <Carousel {slidesBackend} 
              autoPlay={2}
              layout={{
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }}
            slideClass="cp_carousel"
              >
        <div  class="flex justify-center" slot="slide" let:slide >
            <a href={slide.path}>
                <Card title="dcsfs" subtitle="dsfs"> 
                    <img class="logo_icon self self-end" src={slide.url} alt="logo"/>
                </Card>
            </a>    
    </Carousel>
</div>

<style lang="postcss">
    .logo_icon {
        @apply w-20 h-auto;
    }
   
</style>
