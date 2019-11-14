<template>
    <div class="top">
        <h2>发现频道</h2>
    </div>
</template>

<script>
    export default {
        name: "headTop"
    }
</script>

<style scoped>
    .top{
        width: 100%;
        position: fixed;
        text-align: center;
        top: 0;
        z-index:10;
        background-color: white;
        box-shadow: 0rem 0.06rem 0.2rem -0.15rem;
        padding:0.1rem 0 ;
    }
    .top h2{
        font-size: 0.18rem;
        font-weight: 400;

    }
</style>