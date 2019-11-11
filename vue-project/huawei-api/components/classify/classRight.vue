<template>
    <div class="right">
        <div class="minute"  v-for="(n,index) in message.item"  :key="index" >
            <div class="part_one">
                <a><img :src="n.item.v_one"></a>
                <a><img :src="n.item.v_two"></a>
                <ul>
                    <li><img :src="n.item.slide"></li>
                </ul>
            </div>
            <div class="part_two">
                <p class="title">{{n.item.text}}</p>
                <ul>
                    <li>
                        <img :src="n.img">
                        <p>{{n.msgs}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import msg from '../../mocks/classify_list'
    export default {
        name: "classRight",
        data(){
            return {
                message: [],
                m:0
            }
        },
        methods: {
            _initPageData(){
                this.message=msg.getMessage();
            }
        },
        created() {
            this._initPageData();
        },
       beforeMount() {
           this.$eventBus.$on("change",(a)=>{
               console.log(a);
               this.message=a;
           })
       }
    }
</script>

<style scoped>
    .right{
        width: 70%;
        font-size: 0;
        position: fixed;
        right: 0;
    }
    .minute{
        width: 100%;
    }
    .part_one{
        width: 100%;
        text-align: center;
    }
    .part_one ul{
        width: 95%;
        overflow: hidden;
        white-space: nowrap;
    }
    .part_one li{
        width: 30%;
        display: inline-block;
        margin: 0 0.05rem;
    }
    .part_one img{
        width: 95%;
    }
    .part_two{
        width: 100%;
        text-align: center;
    }
    .title{
        font-size: 0.16rem;
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
    }
    .part_two li p{
        margin-top: 0.2rem;
    }
    .part_two img{
        width: 60%;
        display: block;
    }
</style>