<script>
	import Card from '$lib/Card/Card.svelte';
    import Carousel from 'svelte-light-carousel';
    const slides = [
        { 
          url: "/android_logo.png", 
          path: "/projects/android", 
        }, 
        { 
          url: "/ios_logo.png", 
          path: "/projects/ios" 
        },
         { 
            url: "/flutter_logo.png", 
            path: "/projects/flutter" }, 
         { 
            url: "/ionic_logo.png", 
            path: "/projects/ionic" 
        },
        ]

    const slidesBackend = [
        { 
          url: "/android_logo.png", 
          path: "/projects/android", 
        }, 
        { 
          url: "/ios_logo.png", 
          path: "/projects/ios" 
        },
         { 
            url: "/flutter_logo.png", 
            path: "/projects/flutter" }, 
         { 
            url: "/ionic_logo.png", 
            path: "/projects/ionic" 
        },
        ]
    
</script>

<p class="text-2xl font-bold">Mobile Development</p>
<div class="flex width-full justify-center">
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
                    <img class="logo_icon self self-end" src={slide.url} alt="logo"/>
                </Card>
            </a>    
    </Carousel>
</div>

<p class="text-2xl font-bold">Backend Development</p>
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
                <Card title="" subtitle=""> 
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
