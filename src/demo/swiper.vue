<template>
  <div>
    <div class="demo-address-title title">default</div>
    <swiper :imgs="imgs"></swiper>

    <div class="demo-address-title title">defaultIndex : 2</div>
    <swiper :imgs="imgs" :defaultIndex="1"></swiper>

    <div class="demo-address-title title">auto play</div>
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
                      imgUrl:'http://img3.imgtn.bdimg.com/it/u=1221034990,381247571&fm=26&gp=0.jpg' 
                  },
                  {
                      imgUrl:'http://img0.imgtn.bdimg.com/it/u=3971567922,1401928396&fm=26&gp=0.jpg' , 
                      href:'/demo/demo'
                  },
                  {
                      imgUrl:'http://img5.imgtn.bdimg.com/it/u=1942548951,3854844576&fm=26&gp=0.jpg' , 
                      href:'/demo/demo'
                  }
              ]
          };
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