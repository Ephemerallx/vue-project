<template>
    <div class="sec">
        <div class="sec_top">
            <img src="../../../public/homePage/little.png">
        </div>
        <div class="sec_center">
            <ul>
                <li  :key='index' v-for='(item,index) in list'>
                    <img :src='item.img'>
                    <p>{{item.details}}</p>
                </li>
            </ul>
        </div>
        <div class="sec_bottom">
            <div class="littleLogo">
                <img src="../../assets/homePage/logo_wapHeadNews.png" alt="">
            </div>
            <div class="verticalList">
                <ul class="swip">
                    <li class="text_line" v-for='(t,index) in textList' :key='index'>
                        <p>{{t.text}}</p>
                    </li>
                </ul>
                <span class="more">更多</span>
            </div>
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
                        img:'./homePage/J8X1var9kSXDzuOmqKv0.png',
                        details:"邀请有礼"
                    },
                    {
                        img:'./homePage/WFqViUp7VvkNphijTARW.png',
                        details:"会员领券"
                    },
                    {
                        img:'./homePage/CwjvV78aArOAQ5vzQFB9.png',
                        details:"华为5G"
                    },
                    {
                        img:'./homePage/Jn4u9WYLNgYsREZTAMdV.png',
                        details:"以旧换新"
                    },
                    {
                        img:'./homePage/oy1P6Nz5V3PmI2vtfJTs.png',
                        details:"众测"
                    }
                ],
                textList:[
                    {text:'【花粉评测】荣耀20青春版硬核出击，花粉体验分享'},
                    {text:'11.11种草日报丨每日福利好物全掌握'},
                    {text:'双11最全服务权益，暖心福利快来了解'},
                    {text:'5G套餐正式发布！HUAWEI Mate30系列也即将正式开售!'},
                    {text:'华为FreeBuds 3开箱丨全球首款半开放式主动降噪耳机惊喜超多！'},
                    {text:'【花粉评测】荣耀20青春版硬核出击，花粉体验分享'},
                    {text:'11.11种草日报丨每日福利好物全掌握'}
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
      height: 0.28rem;
  }
    .sec_center{
        width: 100%;
        height: 0.46rem;
        margin-top: 0.1rem;
        padding-bottom: 0.1rem;
    }
  .sec_center ul{
      width: 100%;
      display: flex;
      overflow: hidden;
      justify-content: space-around;
  }
  .sec_center li{
      width: 18%;
      font-size: 0;
      text-align: center;
      display: inline-block;
  }
  .sec_center img{
      width: 50%;
  }
  .sec_center p{
      font-size: 0.12rem;
      /*text-align: center;*/
  }
  .sec_bottom{
      width: 100%;
      font-size: 0;
      border-top:0.01rem solid ghostwhite;
      padding:0.2rem 0;
  }
  .littleLogo{
      width: 15%;
      display: inline-block;
      font-size: 0;
      position: relative;
      top: -0.02rem;
      left: 0.1rem;
  }
  .littleLogo img{
      width: 100%;
  }
  .verticalList{
      width:75%;
      font-size: 0.12rem;
      display: inline-block;
      margin-left:0.2rem
  }
  .swip{
      overflow: hidden;
      width:90%;
      height:0.18rem;
      display: inline-block;
  }
  .text_line{
      width: 100%;
      display: block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
  }
  .text_line p{
    font-size: 0.12rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .more{
      display: inline-block;
      font-size: 0.12rem;
      width: 10%;
      position: relative;
      top: -0.05rem;
      text-align: right;
  }
</style>