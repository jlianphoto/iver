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

          <template v-if="list[1].length>0">
            <ul ref="secondUl">
              <li v-for="(item , index) in list[1]" @click="selectSecondItem(index , $event)">{{item}}</li>
            </ul>
          </template>
          <template v-if="list[2].length>0">
            <ul ref="thirdUl">
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

  var firstIndex=0,
      secondIndex=0,
      thirdIndex=0;

  var selectedText = []


  export default {
    name:"dropDown",
    data(){
      return {
        show : false,
        titleText:[],
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
          this.dropDownList.push(arr)

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



        //init firstIndex
        let firstLis = this.$options.listEl[0].childNodes[0].querySelectorAll("li");
        firstLis.forEach((item , index)=>{
            if (item.classList.contains("cur")) {
              firstIndex = index;
            }
        })   
  

      }, 
      selectFirstItem(index , e){
        let i = this.$options.tabIndex; //第几个tab
            firstIndex = index;

        let child = this.dropDownData[i].children[firstIndex];


        this.classHandler(e);

        selectedText.splice(1,selectedText.length);
        selectedText[0] = child.name;
        //change secondArr
        if (!child.children) {
          this.dropDownList[i][1].arrClear();
          this.dropDownList[i][2].arrClear();
        }else{

          // set init state
          this.classInit()

          this.dropDownList[i][1].arrClear();
          child.children.forEach(item=>{
            this.dropDownList[i][1].push(item.name);
          })

        }
        
        this.titleText[i] = selectedText[0];
        this.selectCallback(selectedText);
      },
      hideWrapper(){
        this.show = false;
        this.$options.titleList.querySelectorAll("li").forEach(item=>{
          item.classList.remove("cur");
        })
      },
      selectSecondItem(index , e){
        let i = this.$options.tabIndex; //第几个tab
            secondIndex = index;

        let child = this.dropDownData[i].children[firstIndex];


        this.classHandler(e);

        selectedText.splice(2,selectedText.length);
        selectedText[0] = selectedText[0]? selectedText[0] : child.name;
        selectedText[1] = child.children[secondIndex].name;
        if (!child.children[secondIndex].children) {
          this.dropDownList[i][2].arrClear();
        }else{

          // set init state
          this.classInit(true)

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

        let child = this.dropDownData[i].children[firstIndex];

        this.classHandler(e);

        selectedText[0] = selectedText[0]? selectedText[0] : child.name;
        selectedText[1] = selectedText[1]? selectedText[1] : child.children[0].name;
        selectedText[2] = child.children[secondIndex].children[thirdIndex].name;

        this.titleText.splice(i,1,selectedText[2]);
        this.selectCallback(selectedText);

      },
      classHandler(e){
        e.target.parentNode.childNodes.forEach(item=>{
          item.classList.remove("cur");
        })
        e.target.classList.add("cur")
      },
      // init other ul's class when user click
      classInit(boolean){

        if (this.$refs.secondUl &&  this.$refs.secondUl.length>0 && !boolean) {
          this.$refs.secondUl[0].childNodes.forEach(item=>{
            item.classList.remove("cur");
          })
        }

        if (this.$refs.thirdUl && this.$refs.thirdUl.length>0) {
          this.$refs.thirdUl[0].childNodes.forEach(item=>{
            item.classList.remove("cur");
          })
        }

      }
    }
  };
</script>
