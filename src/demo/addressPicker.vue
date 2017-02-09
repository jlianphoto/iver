<template>
  <div>
    <div class="title">default</div>
    <address-picker v-on:change="getValue">区域:</address-picker>

    <div class="title">hasCounty : false</div>
    <address-picker v-on:change="getValue" :hasCounty="false">区域:</address-picker>


    <div class="title" :value="value">value : ["广东省","深圳市","南山区"]</div>
    <address-picker v-on:change="getValue" :value="value">区域:</address-picker>

  </div>
</template>


<script type="text/javascript">

  import address from '../packages/addressPicker';
  export default {
    data() {
      return {
        value:["广东省","深圳市","南山区"],
      };
    },
    //页面载入执行
    created(){

    },
    methods:{
    //get message from child component
    getValue(msg){
      console.log(msg);
     }
    },
    components:{
      addressPicker : address
    }
  };
</script>