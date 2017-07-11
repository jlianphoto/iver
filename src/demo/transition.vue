<template>
<div class="demo-transition">
  <p>fade :</p>
  <div class="row">
    <button class="btn" @click="showFade = !showFade">click fade</button>
     <div class="demo-wrapper">
      <transition name="iv-fade"><div v-show="showFade">fade</div></transition>
    </div>
  </div>

  <p>scaleOut :</p>
  <div class="row">
    <button class="btn" @click="scaleOut = !scaleOut">click scale-out</button>
     <div class="demo-wrapper">
      <transition name="iv-fade-scale-out"><div v-show="scaleOut">scale-out</div></transition>
    </div>
  </div>

  <p>scaleIn :</p>
  <div class="row">
    <button class="btn" @click="scaleIn = !scaleIn">click scale-in</button>
     <div class="demo-wrapper">
      <transition name="iv-fade-scale-in"><div v-show="scaleIn">scale-in</div></transition>
    </div>
  </div>

  <p>slideTop :</p>
  <div class="row">
    <button class="btn" @click="slideTop = !slideTop">click slide-top</button>
     <div class="demo-wrapper">
      <transition name="iv-fade-slide-top"><div v-show="slideTop">slide-top</div></transition>
    </div>
  </div>

  <p>slideBottom :</p>
  <div class="row">
    <button class="btn" @click="slideBottom = !slideBottom">click slide-bottom</button>
     <div class="demo-wrapper">
      <transition name="iv-fade-slide-bottom"><div v-show="slideBottom">slide-bottom</div></transition>
    </div>
  </div>

  <p>slideLeft :</p>
  <div class="row">
    <button class="btn" @click="slideLeft = !slideLeft">click slide-left</button>
     <div class="demo-wrapper">
      <transition name="iv-fade-slide-left"><div v-show="slideLeft">slide-left</div></transition>
    </div>
  </div>

  <p>slideRight :</p>
  <div class="row">
    <button class="btn" @click="slideRight = !slideRight">click slide-right</button>
     <div class="demo-wrapper">
      <transition name="iv-fade-slide-right"><div v-show="slideRight">slide-right</div></transition>
    </div>
  </div>

</div>
</template>

<style scoped lang="scss">
  @import "../scss/_common";
  .demo-transition p{
    padding-left:10px;
    line-height:24px;
    height:24px;
    color:#333;
  }
  .row{
    padding:10px;
  }
  .demo-wrapper{
    margin-top:torem(10);
    height:torem(150);
    line-height:torem(150);
  }

  .demo-wrapper div{
    width: 100%;
    height: 100%;
    background: $blue;
    color: $white;
    text-align:center;
  }

</style>
<script type="text/javascript">

  export default {
    data() {
      return {
        showFade:true,
        scaleOut:true,
        scaleIn:true,
        slideTop:true,
        slideBottom:true,
        slideLeft:true,
        slideRight:true
      }
    },
    methods:{

    }
  };
</script>
