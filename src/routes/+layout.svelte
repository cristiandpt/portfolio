<script lang="ts">
  export const prerender = true;
</script>

<style lang="postcss">
  @import '../app.css';
  :global(html) {
    @apply bg-[#f5f5f5];
  }
</style>

<slot />