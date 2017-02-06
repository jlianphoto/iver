<template>
  <div>
    <count-up :startVal="0" :endVal="100"  class="countUp"></count-up>
    <div class="test"></div>
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

<style type="text/css">
  .test{
    height: 1000px;
  }
  .countUp{
    font-size: 30px;
    color: orange;
    padding-bottom: 20px;
    text-align: center;
  }
</style>