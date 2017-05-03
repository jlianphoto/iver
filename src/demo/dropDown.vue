<template>
  <div>
    <dropDown :dropDownData="dropDownData" :selectCallback="selectCallback"></dropDown>
  </div>
</template>


<script type="text/javascript">

  import dropDown from '../packages/dropDown';

  export default {
    data() {
      return {
        dropDownData:[
          {
            name:"地区",
            children:[
              {name:"全国"},
              {
                name:"广东省",
                children:[
                  {
                    name:"广州市",
                    children:[{name:"越秀区"},{name:"天河区"}]
                  },
                  {
                    name:"深圳市",
                    children:[{name:"南山区"},{name:"福田区"}]
                  },
                  {
                    name:"佛山市",
                    children:[{name:"南海区"},{name:"顺德区"}]
                  },
                  {
                    name:"佛山市",
                    children:[{name:"南海区"},{name:"顺德区"}]
                  },
                  {
                    name:"佛山市",
                    children:[{name:"南海区"},{name:"顺德区"}]
                  },
                  {
                    name:"佛山市",
                    children:[{name:"南海区"},{name:"顺德区"}]
                  }
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
                    children:[{name:"秀峰区"},{name:"象山区"}]
                  },
                ]
              },
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
          {
            name:"商圈",
            children:[
              {
                name:"福田区",
                children:[
                  {name:"全部"},
                  {name:"CBD中心区"},
                  {name:"香蜜湖"},
                  {name:"梅林"},
                  {name:"新城市广场"}
                ]
              },
              { 
                name:"罗湖区",
                children:[
                  {name:"全部"},
                  {name:"万象城"},
                  {name:"火车站"},
                  {name:"黄贝岭"},
                  {name:"梧桐山"}
                ]
              },
            ]
          },
        ]
      };
    },
    methods:{
      selectCallback(msg){
        console.log(msg,"selectCallback");
      },
    },
    components:{
      dropDown : dropDown
    }
  };
</script>

<style type="text/css">

</style>