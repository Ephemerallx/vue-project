<template>
    <div class="product">
        <main-message></main-message>
    </div>
</template>

<script>
    import mainMessage from "./product/mainMessage";
    export default {
        name: "cart_body",
        components:{
            "main-message":mainMessage,
        },
        props:[],
        // data(){
        //     return {
        //         detail: {},
        //         m:0
        //     }
        // },
        // methods: {
        //     _initPageData(){
        //         this.detail=cart_message.get();
        //     },
        //     changePage(index){
        //         this.m=index;
        //     }
        // },
        // created() {
        //     this._initPageData();
        // }
    }
</script>

<style scoped>
    .product{
        width:95%;
        margin: 0.5rem auto;
        background-color:rgb(249,249,249);
        border-radius: 0.05rem 0.05rem;
        overflow: hidden;
    }
</style>