<template>
  <div class="picker">
      <div class="picker-scroller" @touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove" @touchend.stop.prevent="touchend">
        <div class="picker-mask-top"></div>
        <div class="picker-mask-bottom"></div>
        <ul :class="[{isTransition:isTransition}]" ref="picker">
          <li class="picker-item" v-for="item in dataArr">{{item}}</li>
        </ul>
      </div>
  </div>
</template>



<script type="text/javascript">

import './picker.scss'

export default {
  name: 'picker',
  data(){
    return {
      isTransition:true,
      startY:null,
      startTime:null,
      currentY:0,
      //滚动后的index值 
      index:0,
      //选中的值
      selected:0,
    }
  },
  props:{
    nowIndex:{
      type : Number,
      default : 0
    },
    dataArr:{
      type : Array,
      default(){
        return ["picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker","picker"]
      }
    }
  },
  watch: {
    dataArr(){
      this.isTransition = false;
      this.index = 0;
      this.currentY = 3*this.itemH;
      this.selected = 0;
      
      var offset = 3*this.itemH;
      this.picker.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
    }
  },
  mounted(){
    this.picker = this.$refs.picker;
    this.itemH = this.$refs.picker.querySelector("li").offsetHeight;
    this.init();
  },
  methods:{
    touchstart(e){
      e = e.changedTouches[0];
      this.isTransition = false;
      this.startY = e.pageY;
      this.startTime = new Date().getTime();
    },
    touchmove(e){
      var el = e.currentTarget.querySelector('ul');

      var e = e.changedTouches[0];

      var offset = this.currentY + e.pageY - this.startY;
      el.style.webkitTransform = +`translate3d(0, ${offset}px, 0)`;
    },
    touchend(e){
      //获取元素
      var el = e.currentTarget.querySelector('ul');

      //获取li的个数
      var length = el.querySelectorAll('li').length;
      
      var e = e.changedTouches[0];
    
      // slow
      this.isTransition = true;
      var time = (new Date().getTime()-this.startTime);
          time = time>200?10000:time;

      var distant =  e.pageY-this.startY;

      var offset = this.currentY + distant + 260*(distant/time);

      offset = Math.round(offset/this.itemH)*this.itemH;

      if (offset>this.itemH*3) {
        offset = this.itemH*3;
      }

      if (offset < -this.itemH*(length-4)) {
        offset = -this.itemH*(length-4);
      }

      this.currentY=offset;

      el.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;

      // change index after rolling
      var index = offset/this.itemH-3;

      this.index = Math.abs(index);
      setTimeout(()=>{this.$emit('change',this.index)},500)
      
    },
    init(){
      this.isTransition = false;
      this.index = this.nowIndex;
      this.currentY = -(this.nowIndex-3)*this.itemH;
      var offset = -(this.nowIndex-3)*this.itemH;
      this.picker.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;

    }
  }
}
</script>
