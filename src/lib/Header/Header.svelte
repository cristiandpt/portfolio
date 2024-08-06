<script lang="ts">
    import NavBar from "$lib/NavBar/NavBar.svelte";
    import Github from "svelte-material-icons/Github.svelte";

    const logo = '/cd_logo_rect_p.svg'
</script>

<div class="flex width-full dark:bg-gray-800 justify-between p-4">
    <img src={logo} 
         alt="logo" 
         class="icon"
     />
     <div class="flex items-center">
        <Github color="white" size="2.0rem"/>
        <NavBar />
     </div>
</div>

<style lang="postcss">
    .icon {
        @apply w-20 h-auto;
    }
</style>