<template>
    <div class="time">
        <div class="time_to_buy">
            <span class="b_first">限时购</span>
            <span class="b_second"></span>
            <span class="b_third">
                <em>03:</em>
                <em>18:</em>
                <em>37</em>
            </span>
            <span class="b_fourth">后结束</span>
        </div>
        <div class="slide_product">
            <ul>
                <li v-for="(n,index) in datalist" :key='index'>
                    <div class="cart_details">
                        <img :src='n.img'>
                        <p>{{n.description}}</p>
                    </div>
                    <p class="sign">{{n.reffer}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "timely",
        data(){
            return {
                datalist:[
                    {
                        img:'./homepage/142_142_1554944726684mp.png',
                        description:'华为手表 GT',
                        reffer:'下单优惠200元'
                    },
                    {
                        img:'./homepage/142_142_1545877216682mp.png',
                        description:'荣耀note 10',
                        reffer:'低至1799元'
                    },
                    {
                        img:'./homepage/9Np9Bsy0ziCQCPSe3WFe.png',
                        description:'FreeBuds 3',
                        reffer:'预订优惠60'
                    },
                    {
                        img:'./homepage/142_142_0487E040C660EAA567DE8490112CC938862A01BE09FD95D8mp.png',
                        description:'荣耀智慧屏系列',
                        reffer:'最高优惠800元'
                    },
                    {
                        img:'./homepage/142_142_C2BABF10B4BBBBDFBC08749DE4255D5732F9FCC068A4599Dmp.png',
                        description:'华为平板 M6',
                        reffer:'最高优惠150'
                    },
                    {
                        img:'./homepage/142_142_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png',
                        description:'荣耀Note10',
                        reffer:'最高省500免息'
                    },
                    {
                        img:'./homepage/142_142_1540524481878mp.png',
                        description:'FlyPods Pro耳机',
                        reffer:'799元'
                    },
                    {
                        img:'./homepage/142_142_1545268730575mp.png',
                        description:'FlyPods青春版',
                        reffer:'低至1790元'
                    },
                    {
                        img:'./homepage/142_142_1542266481382mp.png',
                        description:'儿童手表 3 Pro',
                        reffer:'限时直降150'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .time{
        width: 100%;
        background-color:rgb(249,249,249);
    }
    .time_to_buy{
        width:100%;
        font-size: 0;
        text-align: center;
    }
    .b_first{
        font-size: 0.16rem;
        padding: 0 0.01rem;
    }
    .b_second{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../assets/homePage/seckill_title.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        top: 0.06rem;
    }
    .b_third{
        font-size: 0.16rem;
    }
    .b_fourth{
        font-size: 0.12rem;
        color: gray;
    }
    .slide_product{
        width: 100%;
        font-size: 0;
        margin-top: 0.1rem;
        text-align: center;
    }
    .slide_product ul{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }
    .slide_product li{
        width: 21%;
        /*height: 0.9rem;*/
        display: inline-block;
        background-color: white;
        font-size: 0;
        margin: 0 0.05rem;
    }
    .cart_details{
        width: 100%;
        padding-bottom: 0.1rem;
    }
    .cart_details img{
        width: 60%
    }
    .cart_details p{
        margin-top: 0.1rem;
        font-size: 0.1rem;
        color: gray;
    }
    .sign{
        color: firebrick;
        font-size: 0.12rem;
        text-align: center;
    }
</style>