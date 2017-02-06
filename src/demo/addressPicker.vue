<template>
  <div>
    <address-picker v-on:change="getValue" :value="value">区域:</address-picker>
  </div>
</template>


<script type="text/javascript">

  import address from '../packages/addressPicker';
  export default {
    data() {
      return {
        value:["广东省","佛山市","南海区"]
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