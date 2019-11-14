<template>
    <div class="carting">
        <cart-top></cart-top>
        <cart-body></cart-body>
        <settlement></settlement>
        <foot-bottom></foot-bottom>
    </div>
</template>

<script>
    import cartTop from "../cart/cartTop";
    import cartBody from "../cart/cartBody";
    import settlement from "../cart/settlement";
    import footer from "../footer";
    export default {
        name: "cart",
        components:{
            "cart-top":cartTop,
            "cart-body":cartBody,
            "settlement": settlement,
            "foot-bottom":footer
        },
        // filters: {
        //     shopCountFilter (cart) {
        //         let total = 0
        //         cart.forEach((product, pid) => {
        //             if (product.checked) {
        //                 total += product.price * product.num
        //             }
        //         })
        //         return total
        //     }
        // }
    }
</script>

<style scoped>
    .carting{
        background-color: rgb(249,249,249);
        font-size: 0.14rem;
        overflow: hidden;
    }

</style>