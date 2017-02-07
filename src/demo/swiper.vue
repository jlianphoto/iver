<template>
  <div>
    <swiper :imgs="imgs"></swiper>

    <swiper class="n2" :imgs="imgs" :defaultIndex="1"></swiper>

    <swiper class="n2" :auto="true" :imgs="imgs"></swiper>
  </div>
</template>


<script type="text/javascript">

  import swiper from '../packages/swiper';

  export default {
    data() {
      return {
          imgs : [
            {
              imgUrl:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg' , 
              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
            },
            {
              imgUrl:'http://imglf1.nosdn.127.net/img/Q2VpNDBtcGpPQmxuSVRmN1U4OFoxZHhyUmVZOTBBdGdiaHlBNkVsdmtOSkRQdG5SVHdJcGFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg' , 
              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
            },
            {
              imgUrl:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg' , 
              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
            }
          ]
        }
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      swiper : swiper
    }
  };
</script>

<style type="text/css">
  .n2{
    margin-top: 10px;
  }
</style>