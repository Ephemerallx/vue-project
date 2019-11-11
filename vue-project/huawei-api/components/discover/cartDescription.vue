<template>
    <div class="description" >
        <div class="part_one" v-for="(n,index) in message.information" :key="index">
            <a class="version">
                <img :src="n.img">
            </a>
            <p class="tips">
                <a>{{n.sign}}</a>
            </p>
            <p class="relative">
                <a>{{n.msg}}</a>
            </p>
            <p class="about">
                <a>{{n.time}}</a>
                <a>{{n.browse}}</a>
            </p>
        </div>
    </div>
</template>

<script>
    import message from '../../mocks/searchForMessage';
    export default {
        name: "cartDescription",
        data(){
            return {
                message: {}
            }
        },
        methods: {
            _initPageData(){
                // messageOfThirdApi.getMessage(data => {
                //     console.log(data);
                //     this.message = data;
                // })
                this.message=message.get();
                console.log(message);
            }
        },
        created() {
            this._initPageData();
        }
    }
</script>

<style scoped>
    .description{
        width: 100%;
        font-size: 0;
        margin-top: 0.1rem;
    }
    .part_one{
        width: 100%;
        font-size: 0;
    }
    .version{
        width: 100%;
        display: inline-block;
        background-color: rgb(249,249,249);
        font-size: 0;
    }
    .version img{
        width: 70%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display:block;
    }
    .tips{
        width: 95%;
        padding: 0.1rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.16rem;
        margin-left: 0.1rem;
        padding: 0.1rem 0;
    }
    .relative{
        width: 90%;
        font-size: 0.14rem;
        color: gray;
        margin-left: 0.1rem;
        padding: 0.05rem 0;
    }
    .about{
        width: 95%;
        padding: 0.05rem 0;
    }
    .about a:nth-child(1){
        width: 50%;
        position: relative;
        left: 0.1rem;
        color: gray;
        font-size: 0.12rem;
    }
    .about a:nth-child(2){
        width: 50%;
        position: relative;
        left: 2.3rem;
        font-size: 0.12rem;
        color: gray;
    }
</style>