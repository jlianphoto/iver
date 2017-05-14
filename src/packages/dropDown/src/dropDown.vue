<template>
  <div class="vi-dropDown">
      <ul class="vi-dropDown-nav" ref="titleList">
        <li v-for="(title , index) in titleText" @click="changeTab(index , $event)">{{title}}</li>
      </ul>
      <div :class="[{show:show}, 'vi-dropDown-wrapper']" ref="dropDownWrapper">
        <div class="vi-dropDown-list" v-for="(list , index) in dropDownList">
          <ul>
            <li v-for="(item , index) in list[0]" @click="selectFirstItem(index , $event)">{{item}}</li>
          </ul>

          <template v-if="list[1].length>0 && isInit[index]">
            <ul>
              <li v-for="(item , index) in list[1]" @click="selectSecondItem(index , $event)">{{item}}</li>
            </ul>
          </template>
          <template v-if="list[2].length>0">
            <ul>
              <li v-for="(item , index) in list[2]" @click="thirdSecondItem(index , $event)">{{item}}</li>
            </ul>
          </template>
        </div>
        <div class="vi-dropDown-cover" @click="hideWrapper"></div>

      </div>
  </div>
</template>



<script type="text/javascript">
  import './dropDown.scss';

  Array.prototype.arrClear = function(){
    this.splice(0,this.length);
  }

  var firstIndex=[],
      secondIndex=0,
      thirdIndex=0;

  var selectedText = []


  export default {
    name:"dropDown",
    data(){
      return {
        show : false,
        titleText:[],
        isInit : [],
        dropDownList:[

        ]
      }
    },
    listEl : null,
    tabIndex : 0,
    props:{
      dropDownData:{
        type    : Array,
        default(){
          return []
        }
      },
      selectCallback : {
        type : Function,
        default(){}
      }
    },
    created(){

      this.dropDownData.forEach((item , i)=>{
          var arr = [[],[],[]];
          this.isInit.push(false);
          this.dropDownList.push(arr);
          firstIndex.push(0);

          this.titleText.push(item.name);

          item.children.forEach((firstItem , j)=>{
            this.dropDownList[i][0].push(firstItem.name);

            if (firstItem.children && j ===0) {
              firstItem.children.forEach((secondItem , k)=>{
                this.dropDownList[i][1].push(secondItem.name);

                if (secondItem.children && k===0) {
                  secondItem.children.forEach(thirdItem=>{
                    this.dropDownList[i][2].push(thirdItem.name);
                  })
                }
              })
            }
          })
        });

    },
    mounted(){
      this.$options.titleList = this.$refs.titleList;
      this.$options.listEl = this.$refs.dropDownWrapper.querySelectorAll('.vi-dropDown-list'); //
      this.$options.listEl[0].classList.add('active');
    },
    methods:{
      changeTab(index , e){

        this.$options.listEl.forEach(item=>{
          item.classList.remove('active');
        })
        this.$options.listEl[index].classList.add('active');
        this.$options.tabIndex = index;

        if (e.target.classList.contains("cur")){
          this.show = false;
          e.target.classList.remove("cur");
        }else{
          this.classHandler(e);
          this.show = true;
        } 
  

      }, 
      selectFirstItem(index , e){
        let i = this.$options.tabIndex; //第几个tab
            firstIndex[i] = index;

        let child = this.dropDownData[i].children[firstIndex[i]];

        this.isInit[i] = true;
        this.classHandler(e);

        selectedText.splice(1,selectedText.length);
        selectedText[0] = child.name;
        //change secondArr
        if (!child.children) {
          this.dropDownList[i][1].arrClear();
          this.dropDownList[i][2].arrClear();
          this.hideWrapper();
        }else{

          // set init state
          this.classInit(e , "first")

          this.dropDownList[i][1].arrClear();
          child.children.forEach(item=>{
            this.dropDownList[i][1].push(item.name);
          })
          this.dropDownList[i][2].arrClear();

        }
        
        this.titleText[i] = selectedText[0];
        this.selectCallback(selectedText);
      },
      selectSecondItem(index , e){
        let i = this.$options.tabIndex;

        this.classHandler(e); //第几个tab
        secondIndex = index;

        let child = this.dropDownData[i].children[firstIndex[i]];


        selectedText.splice(2,selectedText.length);
        selectedText[0] = selectedText[0]? selectedText[0] : child.name;
        selectedText[1] = child.children[secondIndex].name;
        if (!child.children[secondIndex].children) {
          this.dropDownList[i][2].arrClear();
          this.hideWrapper();
        }else{

          // set init state
          this.classInit(e , "second")

          this.dropDownList[i][2].arrClear();
          child.children[secondIndex].children.forEach(item=>{
            this.dropDownList[i][2].push(item.name);
          })

        }
        
        this.titleText[i] = selectedText[1];
        this.selectCallback(selectedText);
      },
      thirdSecondItem(index , e){
        let i = this.$options.tabIndex; //第几个tab
            thirdIndex = index;

        let child = this.dropDownData[i].children[firstIndex[i]];

        this.classHandler(e);

        selectedText[0] = selectedText[0]? selectedText[0] : child.name;
        selectedText[1] = selectedText[1]? selectedText[1] : child.children[0].name;
        selectedText[2] = child.children[secondIndex].children[thirdIndex].name;

        this.titleText.splice(i,1,selectedText[2]);
        this.selectCallback(selectedText);

        this.hideWrapper();

      },
      hideWrapper(){
        this.show = false;
        this.$options.titleList.querySelectorAll("li").forEach(item=>{
          item.classList.remove("cur");
        })
      },
      classHandler(e){
        e.target.parentNode.childNodes.forEach(item=>{
          item.classList.remove("cur");
        })
        e.target.classList.add("cur")
      },
      // init other ul's class when user click
      classInit(e , sequence){
        var parent = e.target.parentNode.parentNode;
        var childs = parent.querySelectorAll("ul");
        
        var index = sequence==="first"?1:2;

        if (childs[index]) {
          var lis = childs[index].querySelectorAll("li");
          lis.forEach(item=>{
            item.classList.remove('cur');
          })
        }


      }
    }
  };
</script>
