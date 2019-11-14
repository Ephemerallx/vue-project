<template>
    <div class="ins">
        <head-top></head-top>
        <banners></banners>
        <list></list>
        <head-line></head-line>
        <cart-description></cart-description>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import head from "../discover/head";
    import banners from "../discover/banners";
    import list from "../discover/list";
    import headline from "../discover/headline";
    import cartDescription from "../discover/cartDescription";
    import footer from "../footer";
    export default {
        name: "discovery",
        components:{
            "headTop":head,
            "banners":banners,
            "list":list,
            "headLine":headline,
            "footerBottom":footer,
            "cartDescription":cartDescription
        }
    }
</script>

<style scoped>
    .ins{
       width: 100%;
    }

</style>