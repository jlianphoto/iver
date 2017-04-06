<template>
  <div>
    <dropDown :dropDownData="dropDownData"></dropDown>    
  </div>
</template>


<script type="text/javascript">

  import dropDown from '../packages/dropDown';

  export default {
    data() {
      return {
        dropDownData:[
          { 
            name:"广东省",
            children:[
              {
                name:"佛山市",
                children:["南海区","顺德区"]
              },
              {
                name:"广州市",
                children:["越秀区","天河区"]
              },
              {
                name:"深圳市",
                children:["南山区","福田区"]
              },
            ]
          },
          { 
            name:"广西壮族自治区",
            children:[
              {
                name:"南宁市",
                children:["兴宁区","青秀区"]
              },
              {
                name:"柳州市",
                children:["城中区","鱼峰区"]
              },
              {
                name:"桂林市",
                children:["傻B区","傻B2区"]
              },
            ]
          } 
        ]
      };
    },
    mounted(){

    },
    methods:{

    },
    components:{
      dropDown : dropDown
    }
  };
</script>

<style type="text/css">

</style>