<script>
  import Footer from "$lib/Footer/footer.svelte";
	import Header from "$lib/Header/Header.svelte";
</script>  

<style lang="postcss">
  @import '../app.css';
  :global(html) {
    @apply bg-[#f5f5f5];
  }
</style>

<Header />
<main class="">
    <slot />
</main>
<Footer />