<template>
  <div>
    <ul class="list">
      <li>
        <span>{{switchVal}}</span>
        <v-switch class="demo-switch" v-on:sChange="getValue" ref="s1"></v-switch>
      </li>
      <li>
        <span>disable :  {{disabled}}</span>
        <v-switch class="demo-switch" v-on:sChange="getValue" :value="true" :disabled="true"></v-switch>
      </li>
    </ul>
    
    
  </div>
</template>


<script type="text/javascript">

  import vSwitch from '../packages/switch';

  export default {
    data() {
      return {
        switchVal:"false",
        disabled : "true"
      };
    },
    mounted(){
      // console.log(this.$refs.s1.value)
    },
    methods:{
      getValue(msg){
        this.switchVal = msg
      }
    },
    components:{
      vSwitch : vSwitch
    }
  };
</script>

<style type="text/css">
  .demo-switch{
    display: flex;
    align-items:center;
  }
</style>