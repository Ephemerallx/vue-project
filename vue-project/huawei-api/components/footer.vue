<template>
    <div class="foot">
        <div class="sign">
            <router-link :to="'/homepage/'">
                <img src="../assets/homePage/home_active.png" alt="">
            </router-link>
        </div>
        <div class="usual">
            <router-link :to="'/classify'">
                <img src="../assets/homePage/category.png" alt="">
                <p>分类</p>
            </router-link>
        </div>
        <div class="usual">
            <router-link :to="'/discovery'">
                <img src="../assets/homePage/cart.png" alt="">
                <p>发现</p>
            </router-link>
        </div>
        <div class="usual">
            <router-link :to="'/cart'">
                <img src="../assets/homePage/find.png" alt="">
                <p>购物车</p>
            </router-link>
        </div>
        <div class="usual">
            <router-link :to="'/mine'">
                <img src="../assets/homePage/personal.png" alt="">
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footerBottom",
        data(){
            return{
                datalist:[

                ]
            }
        }
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
        text-align: center;
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
        color: gray;
    }
</style>