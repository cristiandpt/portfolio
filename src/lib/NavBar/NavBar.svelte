<script lang="ts">
     import Menu from "svelte-material-icons/Menu.svelte";
     import { base } from '$app/paths';
    let isOpen = false;
    
    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container mx-auto flex-row justify-between items-center">
        <div class="block lg:hidden rounded-lg">
          <button type="button" 
                  on:click={toggleMenu} 
                  class="text-white cursor-pointer">
            <Menu class="text-black dark:text-white" size="1.5rem"/>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" class:hidden={!isOpen}>
          <div class="lg:flex-grow">
            <a href="{base}/" class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-black dark:text-white hover:font-bold">Home</a>
            <a href="{base}/projects" class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-black dark:text-white hover:font-bold">Projects</a>
            <a href="{base}/about" class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-black dark:text-white hover:font-bold">About</a>
            <a href="{base}/contact" class="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white hover:font-bold">Contact</a>
          </div>
        </div>
      </div>
</nav>