<template>
  <div>
    <div class="demo-wrapper">
      <h1><img src="../img/logo.png" alt="vui"></h1>
      <p class="demo-index-title">I V E R</p>
      <p class="demo-index-des">Light ui component for vue2.0</p>
    </div>
    <ul class="list">
      <router-link to="/demo/swiper" tag="li" class="arrow"><span>Swiper</span></router-link>
      <router-link to="/demo/countUp" tag="li" class="arrow"><span>countUp</span></router-link>
      <router-link to="/demo/datetime" tag="li" class="arrow"><span>datetime</span></router-link>
      <router-link to="/demo/addressPicker" tag="li" class="arrow"><span>addressPicker</span></router-link>
      <router-link to="/demo/selectPicker" tag="li" class="arrow"><span>selectPicker</span></router-link>
      <router-link to="/demo/dialog" tag="li" class="arrow"><span>dialog</span></router-link>
      <router-link to="/demo/switch" tag="li" class="arrow"><span>switch</span></router-link>
      <router-link to="/demo/grid" tag="li" class="arrow"><span>grid</span></router-link>
      <router-link to="/demo/button" tag="li" class="arrow"><span>button</span></router-link>
      <router-link to="/demo/loading" tag="li" class="arrow"><span>loading</span></router-link>
    </ul>
    <footer class="demo-index">© by J.Lian</footer>
  </div>
</template>


<script type="text/javascript">

</script>

<style lang="scss">
@import "../scss/_common";
  .demo-wrapper{
    position: relative ;
    text-align: center;
    padding:torem(10);
    margin-bottom:torem(10);
    h1 img{
      width: 30%;
      position: relative;
      right:torem(2);
    }
  }
  .demo-index-title{
      font-weight:bold;
      color: #41b883;
      margin:torem(10) 0;
      font-size : torem(20);
    }
  .demo-index-des{
    color:#bbb;
  }
  footer.demo-index{
    width: 100%;
    height:torem(40);
    line-height:torem(40);
    text-align:center;
    font-size:torem(14);
  }

</style>