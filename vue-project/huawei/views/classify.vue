<template>
    <div class="sort">
        <class-top></class-top>
        <class-left></class-left>
        <class-right></class-right>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
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
</script>

<style scoped>
    .sort{
        font-size: 0.16rem;
    }
</style>