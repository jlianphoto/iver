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
            name:"全国",
            children:[
              {
                name:"广东省",
                children:[
                  {
                    name:"佛山市",
                    children:[{name:"南海区"},{name:"顺德区"}]
                  },
                  {
                    name:"广州市",
                    children:[{name:"越秀区"},{name:"天河区"}]
                  },
                  {
                    name:"深圳市",
                    children:[{name:"南山区"},{name:"福田区"}]
                  },
                ]
              },
              { 
                name:"广西壮族自治区",
                children:[
                  {
                    name:"南宁市",
                    children:[{name:"兴宁区"},{name:"青秀区"}]
                  },
                  {
                    name:"柳州市",
                    children:[{name:"城中区"},{name:"鱼峰区"}]
                  },
                  {
                    name:"桂林市",
                    children:[{name:"傻B区"},{name:"傻B2区"}]
                  },
                ]
              },
              {name:"全国"}
            ]
          },
          {
            name:"距离",
            children:[
              {name:"离我最近"},
              {name:"50米以内"},
              {name:"500米以内"},
              {name:"1000米以内"},
            ]
          },
          {
            name:"排序",
            children:[
              {name:"价格"},
              {name:"销量"},
              {name:"距离"},
              {name:"人气"},
            ]
          },
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