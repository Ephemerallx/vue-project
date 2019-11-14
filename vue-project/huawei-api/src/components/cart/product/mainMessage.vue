<template>
    <div class="msgs">
        <div class="msg_right" v-for="(n,index) in detail.list" :key="index">
            <div class="checkbox" >
                <span class="vim"></span>
            </div>
            <div class="m_left">
                <img :src="n.img">
            </div>
            <div class="m_right">
                <a :href="'#/detail?id='+index">
                    <span class="desc">{{n.desc}}</span>
                    <p class="bottom">
                        <span class="price">{{n.price}}</span>
                        <span class="operate">
                            <span class="minus"></span>
                            <input type="text" class="number" value="1">
                            <span class="plus"></span>
                        </span>
                    </p>
                </a>
            </div>
        </div>
        <privilege></privilege>
    </div>
</template>

<script>
    import cartMessage from '../../../mocks/cart_message'
    import privilege from "./pri/privilege";
    export default {
        name: "main_message",
        msg:{
            flag:true
        },
        components:{
            privilege
        },
        data(){
            return {
                detail: {},
                m:true,
                // item:{}
            }
        },
        methods: {
            _initPageData(){
                this.detail=cartMessage.getCart();
            },
            // changeStyle(){
            //     this.m=false;
            // }
        },
        created() {
            this._initPageData();
            // this.item = this.list[this.$route.params.id];
        }
    }
</script>

<style scoped>
    .msgs{
        width: 100%;
        background-color:rgb(249,249,249);
        border-radius: 0.05rem 0.05rem;
    }
    .msg_right{
        width: 100%;
        float: left;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin: 0.05rem 0;
        padding: 0.1rem 0;
        border-radius:0.1rem 0.1rem ;
        background-color: white;
    }
    .checkbox{
        width: 10%;
        float: left;
    }
    /*.vam{*/
    /*    display: inline-block;*/
    /*    width: 0.2rem;*/
    /*    height: 0.2rem;*/
    /*    background: url("../../../assets/carts/click.png") no-repeat 0 0.06rem ;*/
    /*    background-size: 80% 150%;*/
    /*    position: relative;*/
    /*    top: 0.25rem;*/
    /*    left: 0.1rem;*/
    /*}*/
    .vim{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/carts/click.png") no-repeat 0 -0.18rem;
        background-size: 90% 180%;
        position: relative;
        top: 0.25rem;
        left: 0.1rem;
    }
    .m_left{
        width:25%
    }
    .m_left img{
        width: 100%;
    }
    .m_right{
        width: 65%;
    }
    .m_right a{
        color: black;
    }
    .desc{
        display: inline-block;
        width: 90%;
        height: 0.33rem;
        font-size: 0.12rem;
        margin: 0.1rem 0 0 0.1rem;
        word-break: break-all;
        word-wrap: break-word;
        /*white-space: nowrap;*/
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .bottom{
        width: 100%;
        margin-top: 0.1rem;
    }
    .price{
        color: #ca141d;
        font-size: 0.14rem;
        font-weight: 600;
    }
    .operate{
        margin-left: 0.9rem;
    }
    .minus{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background: url('../../../assets/carts/input_number_minus.png') no-repeat -0.22rem 0;
        background-size: 150% 80%;
        position: relative;
        top: 0.12rem;
    }
    .plus{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../../../assets/carts/input_number_add.png") no-repeat 0.075rem 0;
        background-size: 150% 80%;
        position: relative;
        top: 0.12rem;
    }
    .number{
        border: none;
        outline: none;
        width: 0.2rem;
        text-align: center;
    }
</style>