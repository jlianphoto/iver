<template>
  <div class="vi-dropDown">
      <ul class="vi-dropDown-nav">
        <li v-for="(title , index) in titleText" @click="changeTab(index)">{{title}}</li>
      </ul>
      <div class="vi-dropDown-wrapper">
        <div class="vi-dropDown-list">
          <ul>
              <li  v-for="item in firstArr">{{item}}</li>
          </ul>
          <template v-if="secondArr.length>0">
            <ul>
              <li  v-for="item in secondArr">{{item}}</li>
            </ul>             
          </template>
          <template v-if="thirdArr.length>0">
            <ul>
              <li  v-for="item in thirdArr">{{item}}</li>
            </ul>             
          </template>
        </div>

      </div>
      <div class="vi-dropDown-cover"></div>
  </div>
</template>



<script type="text/javascript">
  import './dropDown.scss';
  
  export default {
    name:"dropDown",
    data(){
      return {
        titleText:[],
        firstArr:[],
        secondArr:[],
        thirdArr:[],
        dropDownList:[
          {
            firstArr:[],
            secondArr:[],
            thirdArr:[],
          },
          {
            firstArr:[],
            secondArr:[],
            thirdArr:[],
          },
          {
            firstArr:[],
            secondArr:[],
            thirdArr:[],
          }
        ]
      }
    },
    props:{
      dropDownData:{
        type    : Array,
        default(){
          return []
        }
      }
    },
    created(){
      this.dropDownData.forEach((item , i)=>{
          this.titleText.push(item.name);

          item.children.forEach(firstItem=>{
            this.dropDownList[i].firstArr.push(firstItem.name);

            if (firstItem.children) {
              firstItem.children.forEach(secondItem=>{
                this.dropDownList[i].secondArr.push(secondItem.name)
              })
            }
          })
        })




      console.log(this.dropDownList)








      
      this.dropDownData[0].children.forEach(item=>{
        this.firstArr.push(item.name);
      })

      if (this.dropDownData[0].children[0].children[0]) {
        this.dropDownData[0].children[0].children.forEach(item=>{
          this.secondArr.push(item.name)
        })
      }

      if (this.dropDownData[0].children[0].children[0].children) {
        this.dropDownData[0].children[0].children[0].children.forEach(item=>{
          this.thirdArr.push(item.name);
        })
      }



    },
    methods:{
      changeTab(index){
        console.log(index)
      }
    }
  };
</script>
