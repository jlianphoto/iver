<template>
  <div>
    <div class="title">default</div>
    <datetime v-on:change="getValue"></datetime>

    <div class="title">format : MM-DD</div>
    <datetime v-on:change="getValue" format="MM-DD"></datetime>

    <div class="title">format : YYYY-MM</div>
    <datetime v-on:change="getValue" format="YYYY-MM"></datetime>

    <div class="title">value : 2017-07-09</div>
    <datetime v-on:change="getValue" value="2017-07-09"></datetime>

    <div class="title">minYear : 1992  &nbsp&nbsp&nbsp&nbsp  maxYear : 2019</div>
    <datetime v-on:change="getValue" :minYear="1992" :maxYear="2019"></datetime>
  </div>
</template>


<script type="text/javascript">

  import datetime from '../packages/datetime';
  export default {
      methods:{
          getValue(msg){
            console.log(msg)
          }
        },
      components:{
        datetime : datetime
      }
  }
</script>