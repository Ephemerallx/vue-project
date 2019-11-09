<template>
    <div class="sort">
        <class-top></class-top>
        <class-left></class-left>
        <class-right></class-right>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import Vue from 'vue'
    import classTop from "../src/components/classify/classTop";
    import classLeft from "../src/components/classify/classLeft";
    import classRight from "../src/components/classify/classRight";
    import footer from "../src/components/footer";

    export default {
        name: "classify",
        components:{
            "class-top":classTop,
            "class-left":classLeft,
            "class-right":classRight,
            "footer-bottom":footer
        }
    }
    //事件总线: 用来注册公共的事件监听的对象叫做事件总线
    //创建一个vue实例，只用来监听事件，
    let eventBus = new Vue();
    //扩展vue类的实例对象
    Vue.prototype.$eventBus = eventBus;
</script>

<style scoped>
    .sort{
        font-size: 0.16rem;
    }
</style>