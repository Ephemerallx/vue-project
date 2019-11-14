<template>
    <div class="mine">
        <mine-roof></mine-roof>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import roof from "../mine/roof";
    import footer from "../footer";
    export default {
        name: "mine",
        components:{
            "mine-roof":roof,
            "footer-bottom":footer
        }
    }
</script>

<style scoped>
    .mine{
        font-size: 0.14rem;
    }
</style>