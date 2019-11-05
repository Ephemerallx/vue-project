<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box">
                <img src="../../assets/homePage/tz09myAWKphvCz6uiZ1P.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/a3cSX4J9WCo47G3yaOsO.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/EKRovBkFNmOva7OU88kG.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/9YJAzkp267ItUbthUM9c.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/7qAtkltxTYoxTLi4cxs7.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/d03uOTBEl1ALxDT8jPM3.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/YeI2AR07Wb9D6RZWryes.jpg" alt="">
            </div>
            <div class="swiper-slide box">
                <img src="../../assets/homePage/A7ZqRw9Jjl4jK3VGRSc4.jpg" alt="">
            </div>
        </div>
        <div class="swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "banners",
        data() {
            return {
                swiper:null
            }
        },
        mounted() {
            this._initSwiper();
        },
        methods: {
            _initSwiper() {
                new Swiper(".swiper-container",{
                    effect: "slide",
                    loop:true,
                    autoplay:true,
                    delay:3000,
                    autoplayDisableOnInteraction: false,
                    pagination: {
                        el:'.swiper-pagination'
                    }
                })
            }
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/css/swiper.css";
    .swiper-container{
        width: 3.75rem;
        height: 1.5rem;
        margin-top: 0.9rem;
    }
  .box{
      font-size: 0;
      width: 3.75rem;
      height: 1.5rem;
      position: relative;
      z-index: 1;
  }
    .swiper-slide img{
        width: 96%;
        height: 100%;
        border-radius: 0.1rem 0.1rem;
    }
    .swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets{
        text-align: right;
        transition: 1000ms opacity;
        /*transform: translate3d(0, 0, 0);*/
        position: absolute;
        left: 1.6rem;
        top: 1.3rem;
        color: white;
    }
</style>