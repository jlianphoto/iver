<template>
<div>
  <div class="wrapper">
    <h1><img src="../img/logo.png" alt="vui"></h1>
    <p class="demo-index-title">VUI</p>
    <p class="demo-index-des">Light ui component for v2.0</p>
  </div>
  <ul class="list">
    <router-link to="/demo/swiper" tag="li" class="arrow"><span>Swiper</span></router-link>
    <router-link to="/demo/countUp" tag="li" class="arrow"><span>countUp</span></router-link>
    <router-link to="/demo/datetime" tag="li" class="arrow"><span>datetime</span></router-link>
    <router-link to="/demo/addressPicker" tag="li" class="arrow"><span>addressPicker</span></router-link>
    <router-link to="/demo/selectPicker" tag="li" class="arrow"><span>selectPicker</span></router-link>
    <router-link to="/demo/dialog" tag="li" class="arrow"><span>dialog</span></router-link>
    <router-link to="/demo/switch" tag="li" class="arrow"><span>switch</span></router-link>
  </ul>
  <footer class="demo-index">by J.Lian</footer>
</div>
</template>


<script type="text/javascript">

</script>

<style lang="scss">
@import "../scss/dep/_common";
  .wrapper{
    position: relative ;
    text-align: center;
    padding:torem(10px);
    h1 img{
      width: 30%;
    }
  }
  .demo-index-title{
      font-weight:bold;
      color: #41b883;
      font-size : torem(20px);
    }
  .demo-index-des{
    color:#bbb;
  }
  footer.demo-index{
    position: fixed;
    width: 100%;
    bottom : torem(20px);
    text-align:center;
    font-size:torem(14px);
  }

</style>