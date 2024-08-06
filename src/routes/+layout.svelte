<script>
  import '../app.css';
  import Footer from "$lib/Footer/footer.svelte";
	import Header from "$lib/Header/Header.svelte";
</script>  

<style lang="postcss">
 
  :global(html) {
    @apply bg-[#f5f5f5];
  }
</style>

<Header />
<main class="p-4">
    <slot />
</main>
<Footer />