<script>
    import Carousel from 'svelte-light-carousel';
    const slides = Array.from({ length: 10 }, (_, i) => ({ title: `${i + 1}` }));
</script>

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
              >
        <div slot="slide" let:slide >{slide.title}</div>
    </Carousel>
</div>    
