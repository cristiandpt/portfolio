<script lang="ts">
    import NavBar from "$lib/NavBar/NavBar.svelte";
    import { base } from '$app/paths';

    const logo =  `${base}/cd_logo_rect_p.svg`;
</script>

<div class="flex width-full dark:bg-gray-800 justify-between p-8 pb-0">
    <a href="{base}/">
        <img src={logo} 
         alt="logo" 
         class="icon md:ms-4"
     />
    </a>
     <div class="flex items-center"> 
        <NavBar />
     </div>
</div>

<style lang="postcss">
    .icon {
        @apply w-16 h-auto;
    }
</style>
