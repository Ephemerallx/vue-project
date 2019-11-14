<template>
    <div class="left">
        <div class="classify_left">
            <ul>
                <li v-for="(n,index) in data.list" :key="index" @click="changePages(index)"  :class="m===index?'red':'black'">
                    <span>{{n.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import details from '../../mocks/classify_list'
    export default {
        name: "classLeft",
        data(){
            return {
                m:0
            }
        },
        props:["data"],
        methods: {
            _initPageData(){
                this.details=details.getMessage();
            },
            changePages(index){
                this.$eventBus.$emit("change",index);
                this.m=index;
            }
        },
        created() {
            this._initPageData();
        }
    }
</script>

<style scoped>
    .classify_left{
        width: 26%;
        position: fixed;
        left: 0;
        margin-top:0.3rem ;
    }
    .classify_left ul{
        width: 100%;
        text-align: center;
        box-sizing: border-box;
    }
    .classify_left li{
        display: block;
        margin: 0.2rem 0;
        font-size: 0.14rem;
        font-weight: 500;
        box-sizing: border-box;
    }
    .red{
        color: crimson;
        border-right: 0.02rem solid crimson;
    }
    .black{
        color: black;
    }
</style>