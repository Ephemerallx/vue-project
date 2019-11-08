<template>
    <div>
        <div class="classify_left">
            <ul>
                <li v-for="(n,index) in details.list" :key="index" @click="changePage(index)"  :class="m===index?'red':'black'">{{n.name}}</li>
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
                details: {},
                m:0
            }
        },
        methods: {
            _initPageData(){
                // messageOfThirdApi.getMessage(data => {
                //     console.log(data);
                //     this.message = data;
                // })
                this.details=details.getMessage();
                console.log(this.details);
            },
            changePage(index){
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
        width: 30%;
        position: fixed;
        left: 0;
    }
    .classify_left ul{
        width: 100%;
        text-align: center;
    }
    .classify_left li{
        display: block;
        padding: 0.2rem 0;
        font-size: 0.14rem;
        font-weight: 500;
    }
    .red{
        color: crimson;
    }
    .black{
        color: black;
    }
</style>