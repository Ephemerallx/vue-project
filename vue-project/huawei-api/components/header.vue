<template>
    <div class="head">
       <ul class="search">
           <li class="logo">
               <img src="../assets/homePage/logo_vmall.png" alt="">
           </li>
           <li class="swiper-container swiper-container-vertical">
               <span class="searching"></span>
               <span class="text">荣耀9X</span>
           </li>
           <li class="message">
               <img src="../assets/homePage/icon_message_black.png" alt="">
           </li>
           <li class="personally">
               <img src="../assets/homePage/personal.png" alt="">
           </li>
       </ul>
        <div class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide box">推荐</li>
                <li class="swiper-slide box">华为</li>
                <li class="swiper-slide box">荣耀</li>
                <li class="swiper-slide box">Mate30系列</li>
                <li class="swiper-slide box">11.11狂欢节</li>
                <li class="swiper-slide box">拼团</li>
                <li class="swiper-slide box">数码惠</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "homepageTop",
        mounted() {
            this._initSwiper();
        },
        methods:{
            _initSwiper(){
                new Swiper('.swiper-container',{
                    loop: true,
                    slidesPerView: 'auto',
                    loopedSlides: 7,
                })
            }
        }
    }
</script>

<style scoped>
    @import "../../node_modules/swiper/css/swiper.css";
    .head{
        width: 100%;
        background-color:white;
        box-shadow: 0rem 0.06rem 0.2rem -0.15rem;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .search{
        width: 100%;
        font-size: 0;
        padding-top:0.05rem ;
        display: flex;
        justify-content: space-between;
    }
    .search img{
        width: 70%;
    }
    .search li{
        display: inline-block;
    }
    .logo{
        width: 20%;
        font-size: 0;
    }
    .logo img{
        width: 90%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .swiper-container-vertical{
        width: 50%;
        border-radius: 0.3rem 0.3rem;
        background-color: rgb(245,245,245);
        font-size: 0;
    }
    .text{
        display: inline-block;
        position: relative;
        top: 50%;
        left: 0.2rem;
        color:gray;
        transform: translateY(-50%);
        font-size: 0.12rem;
    }
    .searching{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url('../assets/homePage/icon_search.png') no-repeat;
        background-size: 80% 80%;
        position:absolute;
        left: 0.05rem;
        top: 0.06rem;
    }
    .message{
        width: 10%;
        font-size: 0;
    }
    .personally{
        width: 10%;
        font-size: 0;
    }
    .swiper-wrapper{
        width: 100%;
        font-size: 0;
        overflow: hidden;
        white-space: nowrap;
    }
    .box{
        display: inline-block;
        margin: 0.18rem;
        font-size: 0.14rem;
        color: gray;
    }
</style>