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
    <div class="cover" v-if='type=="dialogBox"'></div>
  </div>
</template>

<style lang="scss">
@import "../../../scss/_common";
.toast{
  padding:torem(12px);
  font-size: torem(14px);
  color: #fff;
  background: rgba(0,0,0,.5);
  border-radius: 4px;
  text-align: center;
  position: fixed;
  top:50%;
  left:50%;
  @include transform(translateX(-50%) translateY(-50%));
  @include animation(fadeInOut 1.5s forwards);
}
@-webkit-keyframes fadeInOut{
  0% {opacity: 0}
  20% {opacity: 1}
  70% {opacity: 1}
  100%{opacity: 0}
}
@-moz-keyframes fadeInOut{
  0% {opacity: 0}
  20% {opacity: 1}
  70% {opacity: 1}
  100%{opacity: 0}
}
@-ms-keyframes fadeInOut{
  0% {opacity: 0}
  20% {opacity: 1}
  70% {opacity: 1}
  100%{opacity: 0}
}
@-o-keyframes fadeInOut{
  0% {opacity: 0}
  20% {opacity: 1}
  70% {opacity: 1}
  100%{opacity: 0}
}

.dialog{
  position: fixed;
  width: 82%;
  top: 50%;
  left: 50%;
  z-index: 9999;
  @include transform(translateX(-50%) translateY(-50%));
  background-color: #FAFAFC;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
}
.dialog-header{
  padding: torem(10px);
  font-size: torem(20px);
}
.dialog-content{
  font-size: torem(16px);
  color: #666;
  text-align: center;
  padding: torem(5px) torem(10px) torem(10px) torem(10px);
}
.dialog-footer{
    position: relative;
    line-height: torem(40px);
    margin-top: torem(10px);
    border-top: 1px solid #f0f0f0;
    @include flexbox();
}
.dialog-footer button{
  width: 100%;
  height: torem(40px);
  font-size: torem(16px);
  background: #fff;
  @include flex(1);
}
.dialog-footer button.confirm{
  color:#f60;
}
.dialog-footer button.cancle{
  color:#9c9c9c;
  border-left: 1px solid #f0f0f0;
}
</style>

<script type="text/javascript">

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
