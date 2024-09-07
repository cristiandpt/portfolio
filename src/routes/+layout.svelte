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

  import { addMessages, init, getLocaleFromNavigator, isLoading } from 'svelte-i18n';

import en from '../location/en.json'
import fi from '../location/es.json'

addMessages('en', en);
addMessages('es', fi);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

</script>

{#if $isLoading}
  Please wait...
{:else}
<Header />
<div class="relative overflow-hidden grow">
  <main class={`content  max-w-screen-xl  ms-0  xl:mx-auto  p-4 ${$theme === 'dark' ? 'dark' : ''} `}>  
    <slot />
  </main>
</div>
<Footer />
{/if}
  

<style>
  .content {
      height: 100%; 
      overflow-y: scroll;
      scrollbar-width: none; /* For Firefox */
  }

  .content::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Edge */
  }
</style>
