<template>
    <div class="details">
        <a href="#/cart"><span class="return"></span></a>
        <div class="swiper-container" id="swiper5">
            <div class="swiper-wrapper">
                <div class="swiper-slide box5" v-for="(i,index) in list" :key='index'>
                    <img :src="i.pic">
                </div>
            </div>
        </div>
        <div class="sec">
            <p>￥3688</p>
            <span>HUAWEI&nbsp;P30&nbsp;麒麟980&nbsp;超感光徕卡三摄&nbsp;屏内指纹&nbsp;双景录像&nbsp;6GB+128GB&nbsp;全网通版（珠光贝母）</span>
            <a href="#/" class="desc">【华为11.11巅峰24小时】①赠华为充电器快充版(Max 40W）②整点赠10000mAh移动电源 ③享6期免息。赠品有限，赠完即止.订金支付尾款请点击>>></a>
            <p class="present">
                <span>赠品</span>
                <img src="../../../assets/detail/428_428_1553777061415mp.png" alt="">
                <span></span>
            </p>
        </div>
        <div class="foot">
            <ul>
                <li>
                    <img src="../../../assets/detail/icon-home-black.png" alt=""><br>
                    <span>首页</span>
                </li>
                <li>
                    <img src="../../../assets/detail/icon-service-black.png" alt=""><br>
                    <span>客服</span>
                </li>
                <li>
                    <img src="../../../assets/detail/icon-cart-black.png" alt=""><br>
                    <span>购物车</span>
                </li>
            </ul>
            <span class="tips_one">加入购物车</span><span class="tips_two">立即购买</span>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "detailTop",
        data() {
            return {
                list:[
                    {pic:'./detail/428_428_1561519356210.png'},
                    {pic:'./detail/428_428_1561519352671mp.png'},
                    {pic:'./detail/428_428_1561519356211.png'},
                    {pic:'./detail/428_428_1561519356209.png'},
                    {pic:'./detail/428_428_1561519356208.png'},
                    {pic:'./detail/428_428_1561519356210.png'},
                    {pic:'./detail/428_428_1561519356204.png'},
                    {pic:'./detail/428_428_1561519356207.png'},
                    {pic:'./detail/428_428_1561519356205.png'}
                ]
            }
        },
        mounted() {
            this._initSwiper();
        },
        methods: {
            _initSwiper() {
                new Swiper("#swiper5",{
                    effect: "slide",
                    loop:true,
                    autoplay:false,
                    spaceBetween:0,
                    autoplayDisableOnInteraction: false
                })
            }
        }
    }
</script>

<style scoped>
    @import "../../../../node_modules/swiper/css/swiper.css";
    .details{
        width: 100%;
    }
    .swiper-container{
        width: 98%;
        height: 3.5rem;
        z-index: 0;
        font-size: 0;
    }
    .swiper-wrapper{
        width: 100%;
        text-align: center;
    }
    .box5{
        font-size: 0;
        width: 100%;
        height: 3.5rem;
        position: relative;
        z-index: 1;
    }
    .box5 img{
        width: 100%;
        border-radius: 0.1rem 0.1rem;
    }
    .return{
        display: inline-block;
        width: 0.2rem;
        height:0.2rem;
        background: url("../../../assets/detail/icon_back_grey.png") no-repeat;
        background-size: 100% 100%;
        position: fixed;
        left: 0.1rem;
        top:0.1rem;
        z-index:10;
    }
    .sec{
        width: 100%;
        font-size: 0;
        padding-bottom: 0.5rem;
    }
    .sec p{
        font-size: 0.16rem;
        color: #ca141d;
        font-weight: 600;
        margin-top: 0.1rem;
    }
    .sec span{
        display: inline-block;
        width: 96%;
        font-size: 0.16rem;
        font-weight: 600;
        color: black;
        margin-top: 0.1rem;
        padding-bottom: 0.2rem;
    }
    .desc{
        display: inline-block;
        width:95%;
        color: #ca141d;
        font-size: 0.1rem;
        text-decoration: underline;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.1rem;
    }
    .present{
        width: 100%;
        border-top: 0.01rem solid gainsboro;
        border-bottom: 0.01rem solid gainsboro;
        padding:0.05rem 0 0.05rem 0.1rem;
        box-sizing: border-box;
    }
    .present img{
        width: 8%;
        margin-left: 0.1rem;
    }
    .present span:nth-of-type(1){
        display: inline-block;
        width: 0.3rem;
        position: relative;
        top:-0.1rem;
        left: 0.1rem;
        font-size: 0.12rem;
        color: gray;
    }
    .present span:nth-of-type(2){
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/detail/icon_header_nav.png") no-repeat;
        background-size: 80% 80%;
        margin-left: 2.5rem;
    }
    .foot{
        width: 100%;
        font-size: 0;
        position: fixed;
        bottom:0;
        box-shadow: 0.1rem 0.2rem 0.2rem -0.2rem;
    }
    .foot ul{
        width: 50%;
        display: inline-block;
        font-size: 0;
    }
    .foot li{
        display: inline-block;
        width: 33%;
        text-align: center;
        font-size: 0;
    }
    .foot li img{
        width: 40%;
    }
    .foot li span{
        font-size: 0.12rem;
    }
    .tips_one{
        display: inline-block;
        width: 0.8rem;
        height: 0.39rem;
        color: white;
        line-height: 0.39rem;
        font-size: 0.14rem;
        text-align: center;
        border-radius:0.3rem 0 0 0.3rem ;
        background-color: rgb(251,113,66);
        position: relative;
        top :-0.08rem;
    }
    .tips_two{
        display: inline-block;
        width: 0.8rem;
        height: 0.39rem;
        line-height: 0.39rem;
        text-align: center;
        font-size:0.14rem;
        border-radius: 0 0.3rem 0.3rem 0;
        background-color: rgb(223,53,42);
        color: white;
        position: relative;
        top :-0.08rem;
    }
</style>