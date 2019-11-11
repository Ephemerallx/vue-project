<template>
    <div class="top_line">
        <h2>商城头条</h2>
        <p class="tip">声明<span>i</span></p>
        <van-cell is-link @click="appear">声明</van-cell>
        <van-popup v-model="show"></van-popup>
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
    import { Popup,Cell } from 'vant';
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
            "van-cell": Popup,
            "van-popup":Cell
        },
        methods: {
            appear(){
               this.show=true;
            }
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
    .tip{
        font-size: 0.12rem;
        position: absolute;
        color: gray;
        top: 2.9rem;
        left: 3.2rem;
    }
    .tip span{
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