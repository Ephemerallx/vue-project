<template>
    <div class="sort">
        <class-top></class-top>
        <class-left v-if="message" :data="message" ></class-left>
        <class-right v-if="message" :data="message" :f="m"></class-right>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import classTop from "../classify/classTop";
    import classLeft from "../classify/classLeft";
    import classRight from "../classify/classRight";
    import footer from "../footer";
    import msg from '../../apis/classify_list'
    export default {
        name: "classify",
        components:{
            "class-top":classTop,
            "class-left":classLeft,
            "class-right":classRight,
            "footer-bottom":footer
        },
        data(){
            return {
                message: [],
                m:0
            }
        },
        methods: {
            _initPageData(){
                this.message= msg.getClass();
                }
        },
        created(){
            this._initPageData();
        },
        mounted() {
            this.$eventBus.$on("change",(index)=>{
                this.m=index;
                console.log(index);
            })
        }
    }

</script>

<style scoped>
    .sort{
        font-size: 0.16rem;
    }
</style>