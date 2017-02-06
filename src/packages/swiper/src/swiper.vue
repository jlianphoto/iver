<template>
  <div class="vi-swiper" ref="swiper">
    <div @touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove"  @touchend.stop.prevent="touchend" :class="[{isTransition:isTransition} , 'vi-swiper-wrapper']">
      <a href="">
        <img src="" alt="">
      </a>
       <a href="">
        <img src="" alt="">
      </a>
      <a href="">
        <img src="" alt="">
      </a>
    </div>
    <ul class="vi-swiper-dot">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>



<script type="text/javascript">
  import './swiper.scss';

  export default {
    data(){
      return {
        isTransition:true,
        currentX:0,
        startX:0,
        width:0
      }
    },
    props:{
      imgs:{
        type:Array,
        default(){
          return [1,1,1];
        }
      },
      index:{
        type:Number,
        default:0
      }
    },
    mounted(){
      console.log(this.imgs.length)
      this.width = this.$refs.swiper.offsetWidth;
      console.log(this.index);
    },
    methods:{
      touchstart(e){
        var el = e.currentTarget;

        e = e.changedTouches[0];
        this.isTransition = false;
        this.startX = e.pageX;
      },
      touchmove(e){
        var el = e.currentTarget;

        e = e.changedTouches[0];

        var distant = e.pageX - this.startX
        this.currentX = distant;

        
        var offset = this.currentX;

        el.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
      },
      touchend(e){
        var el = e.currentTarget;


        e = e.changedTouches[0];
        var distant = e.pageX - this.startX

        if (distant < this.width/3) {
            ++this.index;
            this.index = (this.index > this.imgs.length-1)?(this.imgs.length-1):this.index;
        }else if(distant> -this.width/3){
            --this.index;
            this.index = (this.index < 0)?0:this.index;
        }

        var offset = -this.index*this.width;

        el.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;


        this.isTransition = true;
        this.startX = 0;
      }
    }
  };
</script>