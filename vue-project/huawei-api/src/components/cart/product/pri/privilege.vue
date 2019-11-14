<template>
    <div class="sc">
        <p>优惠搭配</p>
        <div class='swiper-container diyPackageList swiper-container-initialized swiper-container-horizontal swiper-container-ios'>
            <div class="swiper-wrapper" >
                <div class="swiper-slide swiper-slide-active" v-for="(n,index) in detail.extra" :key="index">
                    <img :src="n.imgs">
                    <span class="dis">{{n.dis}}</span>
                    <div class="symbol">
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    // import Swiper from 'swiper';
    import cart_message from '../../../../mocks/cart_message';
    export default {
        name: "privilege",
        data(){
            return {
                detail: {},
                m:0
            }
        },
        methods: {
            _initPageData(){
                this.detail=cart_message.get();
                // console.log(this.details);
            },
            // _initSwiper() {
            //     new Swiper(".swiper-container",{
            //         effect: "slide",
            //         loop:true,
            //         autoplay:true,
            //         delay:3000,
            //         spaceBetween:0,
            //         autoplayDisableOnInteraction: false,
            //         pagination: {
            //             el:'.swiper-pagination',
            //             clickable: true
            //         }
            //     })
            // },
            changePage(index){
                this.m=index;
            }
        },
        created() {
            this._initPageData();
        },
        // mounted() {
        //     this._initSwiper();
        // }
    }
</script>

<style scoped>
    .sc{
        width: 100%;
        background-color: white;
    }
    .sc p{
        text-align: center;
        font-size: 0.18rem;
        font-weight: 400;
    }
    .dis{
        display: inline-block;
        width: 0.5rem;
        height: 0.15rem;
        font-size: 0.12rem;
        background-color: gainsboro;
        color: black;
        margin-top: -0.3rem;
    }
    .symbol{
        display: inline-block;
        position: relative;
        top: -0.4rem;
        left: 0.05rem;
    }
    .symbol span{
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        font-size: 0.18rem;
        color: gray;
        text-align: center;
    }
    .swiper-container {
        width: 100%;
        margin-top: 0.1rem;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
    .swiper-container.diyPackageList {
        /*margin: 0 0 .6rem .6rem;*/
    }
    .swiper-wrapper {
        /*position: relative;*/
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-duration: 0ms;
        transform: translate3d(0px, 0px, 0px);
    }
    .swiper-slide {
        flex-shrink: 0;
        width: 25%;
        /*position: relative;*/
        display: inline-block;
        text-align: center;
    }
    .swiper-slide img{
        width: 50%;
    }
</style>