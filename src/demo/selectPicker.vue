<template>
  <div>
    <div class="title">options : ["select","select1","select2","select3"...]</div>
    <select-picker :options="options" v-on:change="getValue">请选择</select-picker>

    <div class="title">defaultVal : select5</div>
    <select-picker :options="options" v-on:change="getValue" defaultVal="select5">请选择</select-picker>
  </div>
</template>


<script type="text/javascript">

  import selectPicker from '../packages/selectPicker';
  export default {
    data() {
      return {
        options : ["select","select1","select2","select3","select4","select5","select6","select7","select8","select9","select10","select11","select12","select13","select14"]
      };
    },
    created(){
      
    },
    methods:{
      getValue(msg){
        console.log(msg)
      }
    },
    components:{
      selectPicker : selectPicker
    }
  };
</script>

<style type="text/css">

</style>