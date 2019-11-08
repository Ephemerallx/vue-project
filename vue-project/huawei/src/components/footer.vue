<template>
    <div class="foot">
        <router-link :to="data.url" @click="changeStyle(index)" v-for="(data,index) in tabs" :key="index">
            <img :src="current===index?data.activePic:data.normalPic">
            <p :class="current===index?'red':'black'">{{data.name}}</p>
        </router-link>
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
                        normalPic: './homePage/home_active.png',
                        activePic: './homePage/h.png',
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
                current: 0
            }
        },
        methods:{
            changeStyle(index){
                this.current=index;
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
   .foot img{
       width: 60%;
   }
    .foot p{
        font-size: 0.12rem;
        text-align: center;
        margin-top: 0.05rem;
        color: gray;
    }
</style>