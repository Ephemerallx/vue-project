<template>
    <div class="cart">
        <p>购物车</p>
        <span>编辑</span>
    </div>
</template>

<script>
    export default {
        name: "cart_top"
    }
</script>

<style scoped>
    .cart{
        width:100%;
        height: 0.42rem;
        background-color: white;
        position: fixed;
        top: 0;
        z-index:10;
    }
    .cart p{
        font-size: 0.18rem;
        font-weight: 400;
        line-height: 0.42rem;
        text-align: center;
    }
    .cart span{
        font-size: 0.14rem;
        color: gray;
        position: absolute;
        right: 0.25rem;
        top: 0.12rem;
    }
</style>