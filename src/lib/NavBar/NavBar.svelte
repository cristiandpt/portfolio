<script lang="ts">
     import Menu from "svelte-material-icons/Menu.svelte";
    let isOpen = false;
    
    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container mx-auto flex-row justify-between items-center">
        <div class="block lg:hidden rounded-lg">
          <button type="button" 
                  on:click={toggleMenu} 
                  class="text-white cursor-pointer">
            <Menu/>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" class:hidden={!isOpen}>
          <div class="lg:flex-grow">
            <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Home</a>
            <a href="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Projects</a>
            <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">About</a>
            <a href="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-white">Contact</a>
          </div>
        </div>
      </div>
</nav>