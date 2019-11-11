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
    import head from "../src/components/discover/head";
    import banners from "../src/components/discover/banners";
    import list from "../src/components/discover/list";
    import headline from "../src/components/discover/headline";
    import cartDescription from "../src/components/discover/cartDescription";
    import footer from "../src/components/footer";
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