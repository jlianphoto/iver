<template>
  <div class="v-loader">
    <div class="v-loader-inner line-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="v-loading-msg">{{message}}</p>
  </div>
</template>



<script type="text/javascript">
  import './loading.scss';
  export default {
      data(){
          return {
              message : ''
          };
      }
  };
</script>
