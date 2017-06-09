<template>
<div>
  <button class="btn-blue" @click="show = !show">click slideDown</button>
  <slide-down>
    <div v-show="show">
      <ul class = "demo-slideDown">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </slide-down>
</div>
</template>

<style>
  .demo-slideDown{
    margin: 20px;
    padding: 30px;
    background: #2e9fe5;
  }
  .demo-slideDown li{
    height: 20px;
  }
</style>
<script type="text/javascript">

  import slideDown from '../packages/slideDown';

  export default {
    data() {
      return {
        show:false
      }
    },
    methods:{

    },
    components:{
      slideDown:slideDown
    }
  };
</script>

<style type="text/css">

</style>