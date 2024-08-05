<script lang="ts">
    import NavBar from "$lib/NavBar/NavBar.svelte";

    const logo = '/cd_logo_rect_p.svg'
</script>

<div class="container">
    <img src={logo} 
         alt="logo" 
         class="icon"
     />
    <NavBar />
</div>

<style lang="postcss">
    .icon {
        @apply w-20 h-auto;
    }
</style>