<script lang="ts">
    export let title;
    export let subtitle;
</script>

<style>
    .card {
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        margin: 8px;
        width: 320px;
        height: 160px;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.3);
        

  animation: ripple 0.6s linear;
    }
</style>

<div class="card p-4 flex justify-start">
    <slot></slot>
</div>