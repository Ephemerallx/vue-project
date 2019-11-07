<template>
    <div class="m_product">
        <div class="m_top">
            <div class="mt_left">
                <img src="../../assets/homePage/Mj3wN4ZVAEkkXLQvfuTC .png" alt="">
            </div>
            <div class="mt_right">
                <img src="../../assets/homePage/aUrvf3uFDhvTNeN71YJF.jpg" alt="">
                <img src="../../assets/homePage/iPXAZfeXpmrwk74asgGD.jpg" alt="">
            </div>
        </div>
        <div class="m_bottom">
            <img src="../../assets/homePage/ztlXWmaxj5xpgOD4Kz6V.png" alt="">
            <img src="../../assets/homePage/7lddEVCG3Q2nleaEGHXU.jpg" alt="">
            <img src="../../assets/homePage/OZSIoKJ2nL6wb7DSk25N.png" alt="">
            <img src="../../assets/homePage/e0QIha0Wnb1UgxxdTHUf.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "mainCart"
    }
</script>

<style scoped>
    .m_product{
        width: 100%;
        padding:0.1rem 0  0.7rem 0;
        /*background-color:rgb(249,249,249);*/
    }
    .m_top{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .mt_left{
        width: 49%;
    }
  .mt_right{
      width: 49%;
  }
    .m_top img{
        width: 100%;
        display: block;
        margin: 0.01rem 0;
    }
    .m_bottom{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .m_bottom img{
        width: 49%;
        /*display: block;*/
        margin: 0.01rem 0;
    }
</style>