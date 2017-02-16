<template>
  <div class="padding-content">
    <div class="title">toast("msg")</div>
    <button class="btn" @click="toastHandler">toast</button>

    <div class="title">alert("title" , "message")</div>
    <button class="btn" @click="alertHandler">alert</button>

    <div class="title">alert({title:"title" , confirmTxt:"confirm"})</div>
    <button class="btn" @click="alertHandler2">alert</button>

    <div class="title">confirm({"title":"title" , message:"message"})</div>
    <button class="btn"  @click="confirmHandler">confirm</button>

    <div class="title">callback</div>
    <button class="btn"  @click="confirmCallback">confirm</button>
  </div>
</template>


<script type="text/javascript">

  import dialog from '../packages/dialog';

  export default {
    methods:{
      toastHandler(){
        dialog.toast("message");
      },
      alertHandler(){
        dialog.alert("title","message");
      },
      alertHandler2(){
        dialog.alert({title:"title" , message:"message" , confirmTxt:"confirm"});
      },
      confirmHandler(){
        dialog.confirm({title:"title" , message:"message"});
      },
      confirmCallback(){
        dialog.confirm({
          title:"title" , 
          message:"message" , 
          confirmCallback : ()=>{alert("confirm")} ,
          cancleCallback : ()=>{alert("cancle")}
        });
      }
    }
  };
</script>

<style lang="scss">
  @import "../scss/_common";
  .padding-content{
    padding:torem(20px);
  }
</style>