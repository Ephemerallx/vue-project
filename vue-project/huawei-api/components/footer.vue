<template>
    <div class="foot">
        <div  v-for="(n,index) in tabs" :key="index" class="part">
            <router-link :to="n.url"  @click="changeStyle(index) ">
                    <img :src="n.url=== $route.path ? n.activePic:n.normalPic">
                    <p  :class="c===index?'red':'black'">{{n.name}}</p>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "footerBottom",
        data(){
            return {
                tabs: [
                    {
                        name: "首页",
                        normalPic: './homePage/home.png',
                        activePic: './homePage/home_active.png',
                        url: "/homepage"
                    },
                    {
                        name: "分类",
                        normalPic: './homePage/category.png',
                        activePic: './homePage/category_active.d935077.png',
                        url: "/classify"
                    },
                    {
                        name: "发现",
                        normalPic: './homePage/find.png',
                        activePic: './homePage/find_active.9f755fd.png',
                        url: "/discovery"
                    },
                    {
                        name: "购物车",
                        normalPic: './homePage/cart.png',
                        activePic: './homePage/cart_active.png',
                        url: "/cart"
                    },
                    {
                        name: "我的",
                        normalPic: './homePage/personal.png',
                        activePic: './homePage/personal_active.png',
                        url: "/mine"
                    }

                ],
                c: 0
            }
        },
        methods:{
            changeStyle(index){
                this.c=index;
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
        padding: 0.05rem 0;
        font-size: 0;
        text-align: center;
    }
    .foot router-link-active{
        color: crimson;
    }
    .part{
        width:18%;
        font-size: 0;
        text-align: center;
    }
   .part img{
       width: 40%;
       display: block;
       position: relative;
       left: 50%;
       transform: translateX(-50%);
   }
    .foot p{
        font-size: 0.12rem;
        margin-top: 0.05rem;
        color: gray;
    }
    .red{
        color:red
    }
    .black{
        color:black;
    }
</style>