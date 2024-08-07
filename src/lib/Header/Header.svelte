<script lang="ts">
    import NavBar from "$lib/NavBar/NavBar.svelte";
    import Github from "svelte-material-icons/Github.svelte";
    import { base } from '$app/paths';

    const logo =  `${base}/cd_logo_rect_p.svg`;
</script>

<div class="flex width-full dark:bg-gray-800 justify-between p-4">
    <a href="{base}/">
        <img src={logo} 
         alt="logo" 
         class="icon"
     />
    </a>
     <div class="flex items-center">
        <a href="https://github.com/cristiandpt">
            <Github class="fill-black dark:fill-white" size="2.0rem"/>
        </a>     
        <NavBar />
     </div>
</div>

<style lang="postcss">
    .icon {
        @apply w-16 h-auto;
    }
</style>