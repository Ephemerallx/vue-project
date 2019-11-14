<template>
    <div class="list">
        <ul>
            <li  :key='index' v-for='(item,index) in lists'>
                <img :src='item.img'>
                <p>{{item.details}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return {
                lists:[
                    {
                        img:'./discovery/icon_headline.png',
                        details:"商城公告"
                    },
                    {
                        img:'./discovery/tiHS593NPXbqgwfT47xk.png',
                        details:"企业购"
                    },
                    {
                        img:'./discovery/icon_fans.png',
                        details:"粉丝互动"
                    },
                    {
                        img:'./discovery/nwylDYIPCm4pn2hNwA46.png',
                        details:"视频专区"
                    },
                    {
                        img:'./discovery/icon_public_surver.png',
                        details:"华为众测"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .list{
        width: 100%;
        height: 0.46rem;
        margin-top: 0.2rem;
        padding-bottom: 0.1rem;
    }
    .list ul{
        width: 90%;
        margin: 0 auto;
        display: flex;
        overflow: hidden;
        justify-content: space-around;
    }
    .list li{
        width: 19%;
        font-size: 0;
        text-align: center;
        display: inline-block;
    }
    .list img{
        width: 60%;
    }
    .list p{
        font-size: 0.12rem;
        /*text-align: center;*/
    }
</style>