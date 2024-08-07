<script>
  import '../app.css';
  import Footer from "$lib/Footer/footer.svelte";
	import Header from "$lib/Header/Header.svelte";
	import { theme, setupTheme } from '../js/theme-store';
  import { onMount } from 'svelte';
  
  onMount(() => {
    setupTheme();
  });

  function changeTheme() {
    if ($theme === 'dark') {
      $theme = 'light';
    } else {
      $theme = 'dark';
    }
  }

</script>  

<style lang="postcss">
 
  :global(html) {
    @apply bg-[#f5f5f5];
  }
</style>

<Header />
<main class={`p-4 ${$theme === 'dark' ? 'dark' : ''} `}>
    <slot />
</main>
<Footer />