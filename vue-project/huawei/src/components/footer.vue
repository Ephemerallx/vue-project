<template>
    <div class="foot">
        <div class="sign">
            <a  href="./" target="_self">
                <img src="../assets/homePage/home_active.png" alt="">
            </a>
        </div>
        <div class="usual" >
            <a target="_blank">
                <img src="../assets/homePage/category.png" alt="">
                <p>分类</p>
            </a>
        </div>
        <div class="usual">
            <a target="_blank">
                <img src="../assets/homePage/cart.png" alt="">
                <p>发现</p>
            </a>
        </div>
        <div class="usual">
            <a target="_blank">
                <img src="../assets/homePage/find.png" alt="">
                <p>购物车</p>
            </a>
        </div>
        <div class="usual">
            <a href="" target="_blank">
                <img src="../assets/homePage/personal.png" alt="">
                <p>我的</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footerBottom"
    }
</script>

<style scoped>
    .foot{
        width:100%;
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        background-color: white;
        padding-top: 0.05rem;
    }
    .foot div{
        width: 18%;
        font-size: 0;
    }
    .sign img{
        width: 80%;
    }
   .usual img{
       width: 40%;
   }
    .foot div p{
        font-size: 0.12rem;
        text-align: center;
        margin-top: 0.05rem;
    }
</style>