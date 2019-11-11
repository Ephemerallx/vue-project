<template>
    <div class="my_top">
        <div class="settings">
            <a href="#/" class="sets"></a>
            <a href="#/" class="logins"></a>
        </div>
        <div class="my_center">
            <img src="../../assets/mine/defaultface_user_after.png" alt="">
            <div class="sign">
                <p>
                    <a href="#/login" class="type1">登录/注册</a>
                </p>
                <p>
                    <a href="#/login" class="type2"><span class="bag"></span>签到领积分</a>
                </p>
            </div>
        </div>
        <div class="my_bottom">
            <ul>
                <li v-for="(n,index) in list" :key="index">
                    <a href="#/">
                        <strong>{{n.show}}</strong>
                        <p>{{n.explain}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mainly">
            <p>
                <a href="#/" class="every">我的订单</a>
                <a href="#/" class="all">全部订单<span></span></a>
            </p>
            <ul>
                <li>
                    <img src="../../assets/mine/pain.png" alt="">
                    <p>待付款</p>
                </li>
                <li>
                    <img src="../../assets/mine/receive.png" alt="">
                    <p>待收货</p>
                </li>
                <li>
                    <img src="../../assets/mine/judge.png" alt="">
                    <p>待评价</p>
                </li>
                <li>
                    <img src="../../assets/mine/exchange.c9fe25b.png" alt="">
                    <p>退货/退款</p>
                </li>
                <li>
                    <img src="../../assets/mine/recovery.png" alt="">
                    <p>回收单</p>
                </li>
            </ul>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide box" :key='index' v-for="(item,index) in banners">
                        <img :src='item.img'>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="vip">
            <p>
                <a href="#/" class="every">会员专享</a>
                <a href="#/" class="all">更多会员权益<span></span></a>
            </p>
            <ul>
                <li v-for="(n,index) in datas" :key="index">
                    <div class="left">
                        <p>
                            <span class="d_type">{{n.momory_type}}</span>
                            <span class="t_price">{{n.price}}</span>
                        </p>
                        <span class="introduce">{{n.intro}}</span>
                    </div>
                    <div class="right">
                        <span>{{n.but}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "roof",
        data(){
            return {
                list:[
                    {
                        show:"-",
                        explain:"积分"
                    },
                    {
                        show:"-",
                        explain:"优惠券"
                    },
                    {
                        show:"-",
                        explain:"代金券"
                    }
                ],
                banners:[
                    {img:'./mine/xshavuHQnqktfZDRHDTT.jpg'},
                    {img:'./mine/OHhfZ9yldn5RqFqO3oql.jpg'},
                    {img:'./mine/cbqXByLLJbbPPXOxncwZ.jpg'}
                ],
                datas:[
                    {
                        momory_type:'￥',
                        price:'200',
                        intro:'【会员】华为200元优惠券',
                        but:'领取'
                    },
                    {
                        momory_type:'￥',
                        price:'200',
                        intro:'【礼券 】荣耀手机 200元优惠券',
                        but:'领取'
                    },
                    {
                        momory_type:'￥',
                        price:'200',
                        intro:'【礼券】 荣耀10青春版 200元优惠券',
                        but:'领取'
                    },
                    {
                        momory_type:'￥',
                        price:'200',
                        intro:'【会员】华为nova 5z 200元优惠券',
                        but:'领取'
                    }
                ]
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
    .my_top{
        width: 100%;
        background-color: rgb(247,247,247);
    }
    .settings{
        width: 100%;
        background-color: rgb(230,57,49);
    }
    .sets{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        margin:0.05rem 0;
        background: url('../../assets/mine/icon_setting.3e822f4.png') no-repeat;
        background-size:75% 75%;
        position: relative;
        left: 3rem;
    }
    .logins{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        margin:0.05rem 0;
        background: url('../../assets/mine/login.png') no-repeat;
        background-size:75% 75%;
        position: relative;
        left: 3rem;
    }
    .my_center{
        width: 100%;
        font-size: 0;
        background-color: rgb(230,57,49);
        padding-bottom: 0.6rem;
        border-radius: 0 0 0.3rem 0.3rem;
    }
    .my_center img{
        width: 15%;
        margin-left: 0.2rem;
    }
    .sign{
        width: 70%;
        display: inline-block;
        position: relative;
        top: -0.08rem;
    }
    .type1{
        font-size: 0.2rem;
        color: white;
        /*font-weight: 500;*/
        display: block;
        margin-left: 0.1rem;
    }
    .type2{
        font-size: 0.12rem;
        color: white;
        display: inline-block;
        width: 0.95rem;
        height: 0.28rem;
        text-align: center;
        line-height: 0.28rem;
        margin:0.1rem 0 0 0.1rem;
        border-radius: 0.3rem 0.3rem;
        background-color: rgb(207,52,44);
    }
    .bag{
        display: inline-block;
        width: 0.2rem;
        height: 0.15rem;
        background: url("../../assets/mine/littl_sign.png") no-repeat 0 -0.19rem;
        background-size: 120% 250%;
        margin: 0 0.05rem 0 0;
    }
    .my_bottom{
        width: 95%;
        margin: 0 auto;
        padding: 0.2rem 0;
        border-radius: 0.1rem 0.1rem;
        background-color: white;
        box-shadow: 0.03rem 0.02rem 0.5rem -0.3rem;
        position: relative;
        top: -0.2rem;
    }
    .my_bottom a{
        color: black;
    }
    .mainly{
        width: 95%;
        margin: -0.1rem auto;
        background-color: white;
        border-radius: 0.1rem 0.1rem;
        padding: 0.1rem 0;
    }
    .mainly ul{
        margin-top: 0.2rem;
    }
    .every{
        font-size: 0.14rem;
        font-weight: 600;
        color: black;
        margin-left: 0.2rem;
    }
    .all{
        font-size: 0.12rem;
        color: black;
        margin-left: 1.8rem;
    }
    .all span{
        display: inline-block;
        width:0.15rem;
        height: 0.15rem;
        background: url("../../assets/mine/arrows.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        top: 0.04rem;
        left: 0.01rem;
    }
    .my_bottom ul{
        width: 100%;
    }
    .my_bottom li{
        width: 33%;
        display: inline-block;
        text-align: center;
    }
    .my_bottom li:nth-of-type(1){
        border-right: 0.01rem solid gainsboro;
    }
    .my_bottom li:nth-of-type(2){
        border-right: 0.01rem solid gainsboro;
    }
    .my_bottom p{
        font-size: 0.12rem;
    }
    .swiper-container{
        width: 3.4rem;
        height: 0.8rem;
        margin-top: 0.1rem;
        z-index: 0;
    }
    .swiper-wrapper{
        text-align: center;
    }
    .box{
        font-size: 0;
        width: 3.4rem;
        height: 0.8rem;
        position: relative;
        z-index: 1;
    }
    .box img{
        width: 100%;
        height: 100%;
        border-radius: 0.05rem 0.05rem;
    }
    .swiper-pagination{
        margin:2rem 0 0 1rem;
        color: white;
    }
    .mainly ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
    }
    .mainly li{
        width: 18%;
        display: inline-block;
        font-size: 0;
        text-align: center;
    }
    .mainly li img{
        width: 60%;
    }
    .mainly li p{
        font-size: 0.12rem;
        color: gray;
    }
    .vip{
        width:95%;
        margin: 0.2rem auto;
        border-radius: 0.05rem 0.05rem;
        padding: 0.2rem 0 0.5rem 0;
        background-color: white;
    }
    .vip ul{
        width: 100%;
        overflow: hidden;
    }
    .vip li{
        width: 49%;
        display: inline-block;
        font-size: 0;
        background: url("../../assets/mine/vip_1.455bad2.png") no-repeat;
        background-size:100% 100%;
        padding: 0.2rem 0;
    }
    .d_type{
        font-size: 0.16rem;
        color: crimson;
        font-weight: 600;
        margin-left: 0.1rem;
    }
    .t_price{
        font-size: 0.28rem;
        color: crimson;
        font-weight: 600;
    }
    .introduce{
        display: inline-block;
        font-size: 0.1rem;
        color: gray;
        width: 1rem;
        margin-left: 0.1rem;
    }
    .left{
        display: inline-block;
    }
    .right{
        display: inline-block;
        position: relative;
        top:-0.2rem;
        left: 0.28rem;
    }
    .right span{
        font-size: 0.12rem;
        color: white;
        font-width: 600;
    }
</style>