<script>
 import Heart from "svelte-material-icons/Heart.svelte";
</script>

<footer id="footer" class="flex md:flex-row flex-col md:justify-between dark:bg-gray-800 p-2">
    <div class="flex ps-4 pt-4 justify-center md:justify-start">
        <p class="text-xs md:text-sm font-bold pe-1">Built with Svelte</p>
        <Heart class="inline-block" size="1.5rem" color="red" />
    </div>  
    <div class="mx-0 px-8 ">
        <p class="text-xs text-center md:text-end text-black font-bold dark:text-white">
            © {new Date().getFullYear()} Cristian David Pacheco
        </p>
        <p class="text-xs md:text-sm text-center md:text-end text-black font-bold dark:text-white">
            All rights reserved
        </p>  
    </div>
</footer>