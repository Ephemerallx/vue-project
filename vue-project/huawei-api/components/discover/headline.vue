<template>
    <div class="top_line">
        <h2>商城头条</h2>
        <p >声明<span>i</span></p>
        <van-dialog
                v-model="show"
                title="标题"
                show-cancel-button
        >
            <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
        </van-dialog>
<!--        <div class="hiden"></div>-->
        <ul>
            <li class="item" v-for="(n,index) in datalist" :key="index">
                <a>
                    <img :src="n.img">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "headline",
        msg:{
            flag:false
        },

        data(){
            return {
                datalist:[
                    {img:'./discovery/92ME2SypV9gvDJPOsPH8.png'},
                    {img:'./discovery/YVZoCF8B6yp7t0AckfrY.png'},
                    {img:'./discovery/gVFhFTMl1zhmAoCiXX69.png'},
                    {img:'./discovery/0JkZba0fXbu73EJDCKps.png'},
                    {img:'./discovery/RXRlTtaCvzSJPq46bp46.png'}
                ]
            }
        },
        components: {
            "van-dialog":Dialog
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
        padding: 0.1rem 0;
    }
    .top_line p{
        font-size: 0.12rem;
        position: absolute;
        color: gray;
        top: 2.9rem;
        left: 3.2rem;
    }
    /*.hiden{*/
    /*    width: 80%;*/
    /*    margin: 0 auto;*/
    /*    height: 3.12rem;*/
    /*    font-size: 0.12rem;*/
    /*    text-align: left;*/
    /*}*/
    .top_line span{
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
    .top_line ul{
        width: 100%;
        white-space: nowrap;
        font-size: 0;
        overflow: hidden;
    }
    .item{
        width: 24%;
        display: inline-block;
        margin:0 0.05rem;
        font-size: 0;
    }
    .item a{
        font-size: 0;
        display: inline-block;
        width:100% ;
    }
    .item img{
        width: 100%;
    }
</style>