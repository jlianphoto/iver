<template>
  <div>
    <div class="demo-address-title">default</div>
    <swiper :imgs="imgs"></swiper>

    <div class="demo-address-title">defaultIndex : 2</div>
    <swiper :imgs="imgs" :defaultIndex="1"></swiper>

    <div class="demo-address-title">auto play</div>
    <swiper :auto="true" :imgs="imgs"></swiper>
  </div>
</template>


<script type="text/javascript">

  import swiper from '../packages/swiper';

  export default {
    data() {
      return {
          imgs : [
            {
              imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3660092960,2510943983&fm=15&gp=0.jpg' 
            },
            {
              imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=52317448,4275287853&fm=15&gp=0.jpg' , 
              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
            },
            {
              imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=524793706,3113878690&fm=23&gp=0.jpg' , 
              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
            }
          ]
        }
    },
    components:{
      swiper : swiper
    }
  };
</script>

<style type="text/css">
  .demo-address-title{
    background: #fff;
  }
</style>