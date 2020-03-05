<template>
  <div class="demo-countup">
    <count-up :startVal="0" :endVal="100"  class="countUp"></count-up>
    <div class="test"> 往 下 拉  ...</div>
    <count-up :startVal="0" :endVal="2000.98" :decimals="2" class="countUp"></count-up>
  </div>
</template>


<script type="text/javascript">

  import countUp from '../packages/countUp';
  export default {
      data() {
          return {
      
          };
      },
      created(){

      },
      methods:{

      },
      components:{
          countUp : countUp
      }
  };
</script>

<style lang="scss">
@import '../scss/_common';
  .demo-countup{
    padding: 20px 0;
  }
  .demo-countup .test{
    height: 1000px;
    width: 100%;
    writing-mode: vertical-lr;
    padding-left: 46%;
    color: #a7a7a7;
    box-sizing: border-box;
  }
  .demo-countup .countUp{
    font-size: 30px;
    color: $orange;
    padding-bottom: 20px;
    text-align: center;
  }
</style>