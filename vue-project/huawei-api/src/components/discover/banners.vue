<template>
    <div class="swiper-container" id="swiper6">
        <div class="swiper-wrapper">
            <div class="swiper-slide box6" :key='index' v-for="(item,index) in list">
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
                    {img:'./discovery/qd5NNj8jd3Gj6ALcco7l.jpg'},
                    {img:'./discovery/pPIyf3hlRUdD3Tg15P1x.jpg'}
                ]
            }
        },
        mounted() {
            this._initSwiper();
        },
        methods: {
            _initSwiper() {
                new Swiper("#swiper6",{
                    effect: "slide",
                    loop:true,
                    autoplay:true,
                    delay:3000,
                    spaceBetween:0,
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
        margin-top: 0.5rem;
        z-index: 0;
    }
    .swiper-wrapper{
        text-align: center;
    }
    .box6{
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
    .swiper-pagination{
        color: white;
        margin-left: 1.4rem;
    }
</style>