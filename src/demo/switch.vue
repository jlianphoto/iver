<template>
  <div>
    <ul class="list">
      <li>
        <span>{{switchVal}}</span>
        <v-switch class="demo-switch" v-on:sChange="getValue" v-model="value"></v-switch>
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
        disabled : "true",
        value : true
      };
    },
    methods:{
      getValue(msg){
        this.switchVal = msg
      }
    },
    components:{
      vSwitch : vSwitch
    },
    watch:{
      value(val){
        console.log(val)
      }
    }
  };
</script>

<style type="text/css">
  .demo-switch{
    display: flex;
    align-items:center;
  }
</style>