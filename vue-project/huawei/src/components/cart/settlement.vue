<template>
    <div class="settlement">
        <label class="checkbox"><span class="circle"></span>全选</label>
        <span class="total">总计：<span>￥8676</span></span>
        <button class="balance">结算<span @click="flag == true">(<span class="num">2</span>)</span></button>
    </div>
</template>

<script>
    export default {
        name: "settlement",
        msg:{
            flag:false
        },
        props:[],
        computed:{
            // totalPrice(){
            //
            // }
        },

    }
</script>

<style scoped>
    .settlement{
        width: 100%;
        background-color: white;
        position: fixed;
        bottom: 0.6rem;
    }
    .checkbox{
        font-size: 0.14rem;
        margin-left: 0.1rem;
    }
    .circle{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../assets/carts/click.png") no-repeat 0 -0.16rem;
        background-size: 90% 170%;
        position: relative;
        top: 0.05rem;
        margin: 0 0.05rem;
    }
    .total{
        font-size: 0.14rem;
        margin-left: 1rem;
    }
    .total span{
        font-weight: 600;
        color: #ca141d;
    }
    .balance{
        background-color: rgb(222,53,42);
        color: white;
        font-weight: 400;
        font-size: 0.14rem;
        width: 0.94rem;
        height: 0.39rem;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 0.3rem 0.3rem;
        margin-left: 0.1rem;
    }
</style>