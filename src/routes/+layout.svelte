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

  <Header />
  <main class={` max-w-screen-xl  ms-0  xl:mx-auto  p-4 ${$theme === 'dark' ? 'dark' : ''} `}>
    <slot />
  </main>
  <Footer />
