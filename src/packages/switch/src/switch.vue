<template>
  <div>
    <input type="checkbox" :disabled="disabled" class="vi-switch" v-model="currentValue">
  </div>
</template>



<script type="text/javascript">

  export default {
    data(){
      return {
        currentValue : this.value
      }
    },
    props:{
      disabled:{
        type:Boolean,
        default:false
      },
      value:{
        type:Boolean,
        default:false
      }
    },
    watch:{
      currentValue(){
        this.$emit('sChange', this.currentValue);
      }
    },
    methods:{
      
    }
  };
</script>

<style lang="scss">
  @import "switch.scss";
</style>