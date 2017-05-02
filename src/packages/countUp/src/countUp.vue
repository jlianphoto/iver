<template>
  <div ></div>
</template>


<script type="text/javascript">

import './countUp.scss'
import CountUp from 'countup.js'


export default {
  name: 'countUp',
  props:{
    startVal:{
      type : Number,
      default : 0
    },
    endVal:{
      type : Number,
      default : 1000
    },
    // 小数位
    decimals:{ 
      type : Number,
      default : 0
    },
    duration:{
      type : Number,
      default : 2
    },
    
    options : {
      type : Object,
      default(){
        return {}
      }
    }
  },
  mounted(){
    this._numAnim = new CountUp(this.$el , this.startVal , this.endVal , this.decimals , this.duration , this.options);


    var windowH = document.documentElement.clientHeight,
        scrollTop = document.body.scrollTop,
        offsetTop = this.$el.offsetTop;


    if (offsetTop <= windowH+scrollTop) {
      this._numAnim.start();
    }else{
      window.addEventListener('scroll', ()=>{
        var windowH = document.documentElement.clientHeight,
            scrollTop = document.body.scrollTop,
            offsetTop = this.$el.offsetTop;

        if (offsetTop <= windowH+scrollTop) {
          this._numAnim.start();
        }
      });
    }


    
  },
  methods:{
  
  }
}
</script>
