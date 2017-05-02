<template>
  <div>
    <div class="toast" v-if='type=="toast"'>{{message}}</div>
    <div class="dialog" v-if='type=="dialogBox"'>
      <h4 class="dialog-header">{{title}}</h4>
      <div class="dialog-content">
        <p v-html="message"></p>
      </div>
      <div class="dialog-footer">
        <button class="confirm" @click="confirmEvent">{{confirmTxt}}</button>
        <button class="cancle" v-show="isShow" @click="cancleEvent">{{cancleTxt}}</button>
      </div>
    </div>
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
    callback:null,
    cancleCallback:null
  },
  methods:{
    confirmEvent(){
      this.confirmCallback();
      document.body.removeChild(this.$el);
    },
    cancleEvent(){
      this.cancleCallback();
      document.body.removeChild(this.$el);
    }
  }
}
</script>
