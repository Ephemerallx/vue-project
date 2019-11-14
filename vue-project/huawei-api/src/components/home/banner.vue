<template>
    <div class="swiper-container" id="swiper1">
        <div class="swiper-wrapper">
            <div class="swiper-slide box" :key='index' v-for="(item,index) in list">
                <img :src='item.img'>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "banners",
        data() {
            return {
                list:[
                    {img:'./homePage/tz09myAWKphvCz6uiZ1P.jpg'},
                    {img:'./homePage/a3cSX4J9WCo47G3yaOsO.jpg'},
                    {img:'./homePage/EKRovBkFNmOva7OU88kG.jpg'},
                    {img:'./homePage/9YJAzkp267ItUbthUM9c.jpg'},
                    {img:'./homePage/7qAtkltxTYoxTLi4cxs7.jpg'},
                    {img:'./homePage/d03uOTBEl1ALxDT8jPM3.jpg'},
                    {img:'./homePage/YeI2AR07Wb9D6RZWryes.jpg'},
                    {img:'./homePage/A7ZqRw9Jjl4jK3VGRSc4.jpg'}
                ]
            }
        },
        mounted() {
            this._initSwiper();
        },
        methods: {
            _initSwiper() {
                new Swiper("#swiper1",{
                    effect: "slide",
                    loop:true,
                    autoplay:true,
                    delay:3000,
                    spaceBetween:0,
                    autoplayDisableOnInteraction: false,
                    pagination: {
                        el:'.swiper-pagination',
                        clickable: true
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
        margin-top: 1.1rem;
        z-index: 0;
    }
    .swiper-wrapper{
        text-align: center;
    }
  .box{
      font-size: 0;
      width: 3.75rem;
      height: 1.5rem;
      position: relative;
      z-index: 1;
  }
    .box img{
        width: 96%;
        height: 100%;
        border-radius: 0.1rem 0.1rem;
    }
    .swiper-pagination{
        margin:2rem 0 0 1rem;
        color: white;

    }
</style>