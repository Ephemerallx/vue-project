<template>
    <div class="top_line">
        <h2>商城头条</h2>
        <p class="popuping">
            <van-cell is-link @click="showPopup">声明<span>i</span></van-cell>
            <van-popup v-model="show">
                1. 本网站的转载内容中涉及的商品性能、参数和规格等均不代表官方信息，任何商品对应的参数和规格等信息仅以商品销售页面为准；<br>
                2. 本网站转载的内容归版权人所有，均已注明转载来源，如版权人对转载及内容有任何异议，请与我们联系，我们会立即更正或者删除有关内容；<br>
                3. 凡以任何行为实际使用本网站（包括但不限于注册、登录、使用、浏览等）视为您自愿接受本声明的约束。
            </van-popup>
        </p>

        <div class="swiper-container" id="swiper7">
            <ul class="swiper-wrapper">
                <li class="swiper-slide box7" v-for="(n,index) in datalist" :key="index">
                    <img :src="n.img">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { Popup,Cell } from 'vant';
    import Swiper from 'swiper';
    export default {
        name: "headline",
        data(){
            return {
                datalist:[
                    {img:'./discovery/92ME2SypV9gvDJPOsPH8.png'},
                    {img:'./discovery/YVZoCF8B6yp7t0AckfrY.png'},
                    {img:'./discovery/gVFhFTMl1zhmAoCiXX69.png'},
                    {img:'./discovery/0JkZba0fXbu73EJDCKps.png'},
                    {img:'./discovery/RXRlTtaCvzSJPq46bp46.png'}
                ],
                show: false
            }
        },
        components: {
            "van-cell": Cell,
            "van-popup":Popup
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            _initSwiper(){
                new Swiper('#swiper7',{
                    loop: false,
                    slidesPerView: 'auto',
                    loopedSlides: 5,
                })
            }
        },
        mounted() {
            this._initSwiper();
        }
    }
</script>

<style scoped>
    .top_line{
        width: 100%;
    }
    .top_line h2{
        font-size: 0.18rem;
        text-align: center;
        font-weight: 400;
        padding-top: 0.1rem;
    }
    .popuping{
        width:100%;
    }
    .van-cell span{
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        border: 0.01rem solid gray;
        text-align: center;
        line-height: 0.1rem;
        border-radius: 50%;
        margin: 0 0.02rem;
        font-size: 0.1rem;
    }
    .van-cell__right-icon{
        display: none;
    }
    .van-cell__value--alone{
        width: 100%;
        font-size: 0.12rem;
        color: gray;
    }
    .van-cell{
        text-align: right;
        box-sizing: border-box;
        padding-left: 3rem;
    }
    .van-popup--center{
        font-size: 0.14rem;
        background-color: white;
        color: black;
        line-height: 0.25rem;
    }
    .van-popup--center{
        width:80%;
        height: 40%;
        padding: 0.2rem 0.2rem;
        border-radius: 0.1rem 0.1rem;
    }
    #swiper7{
        width: 100%;
        overflow: hidden;
    }
    .swiper-wrapper{
        width: 100%;
        white-space: nowrap;
        font-size: 0;
    }
    .box7{
        width: 24%;
        display: inline-block;
        margin:0 0.05rem;
        font-size: 0;
    }
    .box7 img{
        width: 100%;
    }
</style>