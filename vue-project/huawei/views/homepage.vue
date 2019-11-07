<template>
    <div id="app">
        <header-top></header-top>
        <banners></banners>
        <hw-section></hw-section>
        <hw-time-shop></hw-time-shop>
        <main-cart></main-cart>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import header from '../src/components/header'
    import footer from '../src/components/footer'
    import banner from '../src/components/home/banner'
    import sec from '../src/components/home/sec'
    import timely from "../src/components/home/timely";
    import mainCart from "../src/components/home/mainCart";
    export default {
        name: 'homePage',
        components: {
            "headerTop":header,
            "footerBottom":footer,
            "banners":banner,
            "hwSection":sec,
            "hwTimeShop":timely,
            "mainCart":mainCart
        }
    }
</script>

<style>

</style>
