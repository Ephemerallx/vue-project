<template>
    <div class="head">
       <ul class="search">
           <li class="logo">
               <img src="../assets/homePage/logo_vmall.png" alt="">
           </li>
           <li class="swiper-container swiper-container-vertical">
               <span class="searching"></span>
               <span class="text">荣耀9X</span>
           </li>
           <li class="message">
               <img src="../assets/homePage/icon_message_black.png" alt="">
           </li>
           <li class="personally">
               <img src="../assets/homePage/personal.png" alt="">
           </li>
       </ul>
        <ul class="list">
            <li>推荐</li>
            <li>华为</li>
            <li>荣耀</li>
            <li>Mate30系列</li>
            <li>11.11狂欢节</li>
            <li>拼团</li>
            <li>数码惠</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homepageTop"
    }
</script>

<style scoped>
    .head{
        width: 100%;
        background-color:white;
        box-shadow: 0rem 0.06rem 0.2rem -0.15rem;
        position: fixed;
        top: 0;
    }
    .search{
        width: 100%;
        font-size: 0;
        padding-top:0.05rem ;
        display: flex;
        justify-content: space-between;
    }
    .search img{
        width: 70%;
    }
    .logo{
        width: 20%;
        font-size: 0;
    }
    .logo img{
        width: 90%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .swiper-container-vertical{
        width: 50%;
        border-radius: 0.3rem 0.3rem;
        background-color: rgb(245,245,245);
        font-size: 0;
    }
    .text{
        display: inline-block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.14rem;
    }
    .searching{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url('../assets/homePage/icon_search.png') no-repeat;
        background-size: 80% 80%;
        position:absolute;
        left: 0.05rem;
        top: 0.06rem;
    }
    .message{
        width: 10%;
        font-size: 0;
    }
    .personally{
        width: 10%;
        font-size: 0;
    }
    .list{
        width: 100%;
        font-size: 0;
        overflow: hidden;
        white-space: nowrap;
    }
    .list li{
        margin: 0.18rem;
        font-size: 0.14rem;
        color: gray;
    }
</style>