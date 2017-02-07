<template>
  <div class="vi-swiper" ref="swiper">
    <div @touchstart="touchstart" @touchmove="touchmove"  @touchend="touchend" :class="[{isTransition:isTransition} , 'vi-swiper-wrapper']">
      <a :href="img.href" v-for="img in imgs">
        <img :src="img.imgUrl">
      </a>
    </div>
    <ul class="vi-swiper-dot">
      <li v-for="(dot , index) in dots" :class="{active:dots[index]}"></li>
    </ul>
  </div>
</template>



<script type="text/javascript">
  import './swiper.scss';

  export default {
    data(){
      return {
        isTransition:false,
        currentX:0,
        startX:0,
        width:0,
        index:0,
        dots :[],
        timer:null //timer
      }
    },
    props:{
      imgs:{
        type:Array,
        default(){
          return [
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
          ];
        }
      },
      defaultIndex:{
        type:Number,
        default:0
      },
      auto:{
        type:Boolean,
        default:true
      }
    },
    computed:{
      itemLength(){
        return this.imgs.length
      }
    },
    mounted(){
      this.width = this.$refs.swiper.offsetWidth;
      this.el = this.$refs.swiper.querySelector('.vi-swiper-wrapper');

      this.index = this.defaultIndex;

      this.dots = this.imgs.map((item , index)=>{
        return index==this.index ? true : false;
      })

      this.setNowImg();

      this.auto && this.autoSwiper();

    },
    methods:{
      touchstart(e){

        this.auto && clearInterval(this.timer);

        e = e.changedTouches[0];
        this.isTransition = false;
        this.startX = e.pageX;
      },
      touchmove(e){

        e = e.changedTouches[0];

        var distant = e.pageX - this.startX,
            offset = this.currentX+distant;
        this.el.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
      },
      touchend(e){

        e = e.changedTouches[0];

        var distant = e.pageX - this.startX,
            distantABS = Math.abs(distant);

        //change img
        if (distantABS>this.width/6) {
          if (distant<0) {
            this.index++;
            this.index = (this.index > this.itemLength-1)?(this.itemLength-1):this.index;
          }else{
            this.index--;
            this.index = (this.index < 0)?0:this.index;
          }
        }
        this.setNowImg();

        //init
        this.isTransition = true;
        this.startX = 0;

        this.auto && this.autoSwiper();

      },
      dotHandler(){
        this.dots = this.dots.map((item , index)=>{
          return index==this.index ? true : false;
        })
      },
      setNowImg(){
        this.currentX = -this.index*this.width;
        var offset = this.currentX;
        this.el.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;

        this.dotHandler()
      },
      // auto swiper
      autoSwiper(){
        this.isTransition = true;
        this.timer = setInterval(()=>{
          this.index++;

          if (this.index > this.itemLength-1) {
            this.index = 0;
            this.isTransition = false;
          }else{
            this.isTransition = true;
          }
          this.setNowImg();
        },2000)
      }
    }
  };
</script>