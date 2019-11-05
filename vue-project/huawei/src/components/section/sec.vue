<template>
    <div class="sec">
        <div class="sec_top">
            <img src="../../assets/homePage/little.png">
        </div>
        <div class="sec_center">
            <ul>
                <li :v-for="item in list">
                    <img :src=item.img>
                    <p>{{item.details}}</p>
                </li>
            </ul>
        </div>
        <div class="sec_bottom">

        </div>
    </div>
</template>

<script>
    export default {
        name: "sec",
        data(){
            return {
                list:[
                    {
                        img:"../../assets/homePage/J8X1var9kSXDzuOmqKv0.png",
                        details:"邀请有礼"
                    },
                    {
                        img:"../../assets/homePage/WFqViUp7VvkNphijTARW.png",
                        details:"会员领券"
                    },
                    {
                        img:"../../assets/homePage/CwjvV78aArOAQ5vzQFB9.png",
                        details:"华为5G"
                    },
                    {
                        img:"../../assets/homePage/Jn4u9WYLNgYsREZTAMdV.png",
                        details:"以旧换新"
                    },
                    {
                        img:"../../assets/homePage/oy1P6Nz5V3PmI2vtfJTs.png",
                        details:"众测"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .sec_top{
      width: 100%;
      font-size: 0;
  }
  .sec_top img{
      width: 100%;
  }
    .sec_center{
        width: 100%;
    }
  .sec_center ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
  }
  .sec_center li{
      width: 18%;
  }
  .sec_center img{
      width: 80%;
  }
  .sec_center p{
      font-size: 0.12rem;
      text-align: center;
  }
</style>