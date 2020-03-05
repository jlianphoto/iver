<template>
  <div>
    <div class="demo-wrapper">
      <h1><img src="../img/logo.png" alt="vui"></h1>
      <p class="demo-index-title">I V E R</p>
      <p class="demo-index-des">Light ui component for vue2.0</p>
    </div>
    <ul class="list">
      <router-link to="/demo/swiper" tag="li" class="arrow"><span>Swiper</span></router-link>
      <router-link to="/demo/lottery" tag="li" class="arrow"><span>Lottery</span></router-link>
      <router-link to="/demo/countUp" tag="li" class="arrow"><span>CountUp</span></router-link>
      <router-link to="/demo/datetime" tag="li" class="arrow"><span>Datetime</span></router-link>
      <router-link to="/demo/addressPicker" tag="li" class="arrow"><span>AddressPicker</span></router-link>
      <router-link to="/demo/selectPicker" tag="li" class="arrow"><span>SelectPicker</span></router-link>
      <router-link to="/demo/dropDown" tag="li" class="arrow"><span>DropDown</span></router-link>
      <router-link to="/demo/dialog" tag="li" class="arrow"><span>Dialog</span></router-link>
      <router-link to="/demo/switch" tag="li" class="arrow"><span>Switch</span></router-link>
      <router-link to="/demo/grid" tag="li" class="arrow"><span>Grid</span></router-link>
      <router-link to="/demo/button" tag="li" class="arrow"><span>Button</span></router-link>
      <router-link to="/demo/loading" tag="li" class="arrow"><span>Loading</span></router-link>
      <router-link to="/demo/slideDown" tag="li" class="arrow"><span>SlideDown</span></router-link>
      <router-link to="/demo/transition" tag="li" class="arrow"><span>Transition</span></router-link>
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
    padding:10px;
    margin-bottom: 10px;
    h1 img{
      width: 30%;
      position: relative;
      right: 2px;
    }
  }
  .demo-index-title{
      font-weight:bold;
      color: #41b883;
      margin: 10px 0;
      font-size : 20px;
    }
  .demo-index-des{
    color:#bbb;
    font-size: 16px;
  }
  footer.demo-index{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align:center;
    font-size: 14px;
  }

</style>