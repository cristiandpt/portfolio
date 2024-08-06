<script>
    export let title;
    export let subtitle;
</script>

<style>
    .card {
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        margin: 8px;
        width: 160px;
        height: 160px;
        cursor: pointer;
    }

    h2 {
        margin: 0;
    }

    p {
        color: #666;
    }
</style>

<div class="card p-8 flex justify-center align-end">
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <slot></slot>
</div>