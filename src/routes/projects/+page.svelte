<script>
	import Card from '$lib/Card/Card.svelte';
    import { base } from '$app/paths';
	import Carousel from 'svelte-light-carousel';

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
          url: `${base}/eclinic.png`, 
          path: `${base}/projects/flutter`,
          title: `eClinic`,
          description: "Aplicación multiplataforma de telemedicina y monitoreo medico remoto. Se integra la conexión directa con dispositivos IoT.",
          technologies: [`${base}/flutter_logo.png`] 
        }, 
        /*  { 
            url: `${base}/ionic_logo.png`, 
            path: `${base}/projects/ionic`,
            title: `${base}/projects/android`,
            description: "",
            technologies: ["android_logo_1", "kotlin_logo"] 
        }, */
        ];

        let slides2 = [
            {
                url: `${base}/golang_logo.png`,
                path: `${base}/projects/domesticapp`,
                title: "DomesticApp",
                description: "Aplicación para solicitar servicios domesticos varios",
                technologies: []
            },
            {
                url: `${base}/nodejs_icon.png`,
                path: `${base}/projects/vidriossol`,
                title: "VidriosSol",
                description: "Backend de aplicación para venta de marqueteria a medida con visualizacion del diseño en 3D.",
                technologies: []
            },
            {
                url: `${base}/rust_logo.svg`,
                path: `${base}/projects/domesticapp`,
                title: "DomesticApp",
                description: "Servicio backend para api rest que emulaba un banco virtual para pagar los servicios domésticos",
                technologies: []
            },
            {
                url: `${base}/django_logo.png`,
                path: `${base}/projects/antstone`,
                title: "AntStone",
                description: "Backend de aplicación para la gestión de obras de construcción.",
                technologies: []
            },
            {
                url: `${base}/spring.png`,
                path: `${base}/projects/fone`,
                title: "AntStone",
                description: "Backend que consumia servicios api rest de la formula uno",
                technologies: []
            }
    ];

    let slides3 = [
            {
                url: `${base}/react_logo.png`,
                path: `${base}/projects/domesticapp`,
                title: "DomesticApp",
                description: "Aplicación para solicitar servicios domesticos varios",
                technologies: []
            },
            {
                url: `${base}/svelte_logo.png`,
                path: `${base}/projects/portfolio`,
                title: "Portfolio",
                description: "Backend de aplicación para venta de marqueteria a medida con visualizacion del diseño en 3D.",
                technologies: []
            },
            {
                url: `${base}/vue_logo.png`,
                path: `${base}/projects/eclinicespecialisties`,
                title: "eClinic Especialistas",
                description: "Servicio backend para api rest que emulaba un banco virtual para pagar los servicios domésticos",
                technologies: []
            },
            {
                url: `${base}/next_logo.png`,
                path: `${base}/projects/vidrossol`,
                title: "VidriosSol",
                description: "Servicio backend para api rest que emulaba un banco virtual para pagar los servicios domésticos",
                technologies: []
            },
        ]
    
</script>


<p class="text-2xl font-bold">Mobile Development</p>
<div class="flex width-full justify-center mt-8 mx-auto">
    <Carousel {slides} 
              autoPlay={4}
              layout={{
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }}
            id="cp_carl"
            key="title"
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
                                         alt="logo-tech"/>
                                {/each}
                            </div>
                        </div>
                        
                    </div> 
                    
                </Card>
            </a> 
        </div>   
    </Carousel>
</div>

<p class="text-2xl font-bold mt-16">Backend Development</p>
<div class="flex width-full justify-center">
    <Carousel slides={slides2}
              autoPlay={5}
              layout={{
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }}
            id="cp_arl"
            slideClass="cp_carousell"
              >
        <div  
            class="flex justify-center" 
            slot="slide" let:slide >
            <a href={slide.path}>
                <Card title="" subtitle=""> 
                    <div class="flex justify-start"> 
                        <img class="logo_icon w-16 h-16 object-contain" src={slide.url} alt="logo-backend"/>
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
        </div>    
    </Carousel>
</div>

<p class="text-2xl font-bold mt-16">Frontend Development</p>
<div class="flex width-full justify-center">
    <Carousel slides={slides3}
              autoPlay={5}
              layout={{
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }}
            id="cp_arl"
            slideClass="cp_carousell"
              >
        <div  
            class="flex justify-center" 
            slot="slide" let:slide >
            <a href={slide.path}>
                <Card title="" subtitle=""> 
                    <div class="flex justify-start"> 
                        <img class="logo_icon w-16 h-16 object-contain" src={slide.url} alt="logo-backend"/>
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
        </div>    
    </Carousel>
</div>

<style lang="postcss">
    .logo_icon {
        @apply w-20 h-auto;
    }
   
</style>
