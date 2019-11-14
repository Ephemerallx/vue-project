<template>
    <div class="right">
        <div class="outer" v-for="(n,i) in data.list"  :key="i" v-show="i==f">
            <div class="minute" v-for="(s,index) in n.item"  :key="index">
                <div class="part_one">
                    <a><img :src="s.v_one"></a>
                    <a><img :src="s.v_two"></a>
                    <ul class="lists">
                        <li v-for="(t,i) in s.slide"  :key="i">
                            <img :src="t.part">
                        </li>
                    </ul>
                </div>
                <div class="part_two">
                    <p class="title">{{s.text}}</p>
                    <ul>
                        <li v-for="(a,i) in s.intro" :key="i">
                            <img :src="a.img">
                            <p>{{a.msgs}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classRight",
        props:["data","f"],
        created() {
            console.log(this.data);
        }
    }
</script>

<style scoped>
    .right{
        width: 70%;
        font-size: 0;
        z-index:0;
    }
    .outer{
        width: 70% ;
        position: absolute;
        left: 1rem;
        top: 0.5rem;
    }
    .minute{
        width: 100%;
    }
    .part_one{
        width: 100%;
        text-align: center;
    }
    .lists{
        width: 95%;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 0.05rem;
    }
    .lists li{
        width: 30%;
        display: inline-block;
        margin: 0 0.05rem;
    }
    .part_one img{
        width: 95%;
        margin-top: 0.1rem;
    }
    /*.part_one a{*/
    /*    margin-top: 0.1rem;*/
    /*}*/
    .part_two{
        width: 100%;
        text-align: center;
    }
    .title{
        font-size: 0.14rem;
        margin: 0.1rem;
    }
    .part_two ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .part_two li{
        display: inline-block;
        width: 30%;
        font-size: 0.12rem;
        color: gray;
        margin: 0.1rem 0;
        text-align: center;
    }
    .part_two li p{
        margin-top: 0.2rem;
    }
    .part_two img{
        width: 60%;
        /*display: block;*/
    }
</style>