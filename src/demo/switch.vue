<template>
  <div>
    <v-switch v-on:sChange="getValue" ref="s1"></v-switch>
    <v-switch v-on:sChange="getValue" :value="true" :disabled="true"></v-switch>
  </div>
</template>


<script type="text/javascript">

  import vSwitch from '../packages/switch';

  export default {
    data() {
      return {
        
      };
    },
    mounted(){
      // console.log(this.$refs.s1.value)
    },
    methods:{
      getValue(msg){
        console.log(msg)
      }
    },
    components:{
      vSwitch : vSwitch
    }
  };
</script>

<style type="text/css">

</style>