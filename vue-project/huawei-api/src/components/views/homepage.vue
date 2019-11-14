<template>
    <div class="staple">
        <header-top></header-top>
        <banner></banner>
        <hw-section></hw-section>
        <hw-time-shop></hw-time-shop>
        <main-cart></main-cart>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import header from '../header'
    import footer from '../footer'
    import banner from '../home/banner'
    import sec from '../home/sec'
    import timely from "../home/timely";
    import mainCart from "../home/mainCart";
    export default {
        name: 'homePage',
        components: {
            "headerTop":header,
            "footerBottom":footer,
            "banner":banner,
            "hwSection":sec,
            "hwTimeShop":timely,
            "mainCart":mainCart
        }
    }
</script>

<style scoped>
    .staple{
        width: 100%;
    }
</style>
