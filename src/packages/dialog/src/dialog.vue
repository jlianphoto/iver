<template>
  <div>
    <div class="iv-toast" v-if='type=="toast"'>{{message}}</div>
    <transition name="iv-dialog-scale-out">
    <div class="iv-dialog" v-if='type=="dialogBox" && showDialog'>
      <h4 class="iv-dialog-header">{{title}}</h4>
      <div class="iv-dialog-content">
        <p v-html="message"></p>
      </div>
      <div class="iv-dialog-footer">
        <button class="confirm" @click="confirmEvent">{{confirmTxt}}</button>
        <button class="cancle" v-show="isShow" @click="cancleEvent">{{cancleTxt}}</button>
      </div>
    </div>
    </transition>
    <div class="v-cover" v-if='type=="dialogBox"'></div>
  </div>
</template>



<script type="text/javascript">

import './dialog.scss';

export default {
  name: 'dialog',
  props:{
    message:String,
    confirmTxt:String,
    cancleTxt:String,
    type:String,
    title:String,
    isShow:Boolean,
    animate:Boolean,
    showDialog:false,
    callback:null,
    cancleCallback:null
  },
  methods:{
    confirmEvent(){
      this.confirmCallback();
      document.body.removeChild(this.$el);
      this.showDialog = false;
    },
    cancleEvent(){
      this.cancleCallback();
      document.body.removeChild(this.$el);
      this.showDialog = false;
    }
  }
}
</script>
