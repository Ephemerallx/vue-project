<template>
    <div class="top">
        <ul class="search">
            <li class="inner">
                <span class="searching"></span>
                <span class="text">荣耀9X</span>
            </li>
            <li class="message">
                <img src="../../assets/class/header.png">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
    .search{
        width: 100%;
        font-size: 0;
        padding-top:0.05rem ;
        display: flex;
        justify-content: space-between;
    }
    .search li{
        display: inline-block;
    }
    .inner{
        width: 80%;
        border-radius: 0.3rem 0.3rem;
        background-color: rgb(245,245,245);
        font-size: 0;
        margin-left: 0.2rem;
    }
    .text{
        display: inline-block;
        position: relative;
        top: 50%;
        left: 0.2rem;
        color:gray;
        transform: translateY(-50%);
        font-size: 0.12rem;
    }
    .searching{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url('../../assets/homePage/icon_search.png') no-repeat;
        background-size: 100% 100%;
        position:absolute;
        left: 0.2rem;
        top: 0.1rem;
    }
    .message{
        width: 18%;
        font-size: 0;
        margin-left: 0.1rem;
    }
    .message img{
       width: 50%;
    }
</style>