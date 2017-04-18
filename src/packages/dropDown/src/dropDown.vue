<template>
  <div class="vi-dropDown">
      <ul class="vi-dropDown-nav">
        <li v-for="(title , index) in titleText" @click="changeTab(index)">{{title}}</li>
      </ul>
      <div class="vi-dropDown-wrapper" ref="dropDownWrapper">
        <div class="vi-dropDown-list" v-for="(list , index) in dropDownList">
          <ul>
            <li v-for="(item , index) in list[0]" @click="selectFirstItem(index)">{{item}}</li>
          </ul>

          <template v-if="list[1].length>0">
            <ul>
              <li v-for="item in list[1]">{{item}}</li>
            </ul>
          </template>
          <template v-if="list[2].length>0">
            <ul>
              <li v-for="item in list[2]">{{item}}</li>
            </ul>
          </template>
        </div>
        <div class="vi-dropDown-cover"></div>

      </div>
  </div>
</template>



<script type="text/javascript">
  import './dropDown.scss';
  
  export default {
    name:"dropDown",
    data(){
      return {
        titleText:[],
        dropDownList:[
          [
            [],
            [],
            [],
          ],
          [
            [],
            [],
            [],
          ],
          [
            [],
            [],
            [],
          ],
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
      firstSelectCallback : {
        type : Function,
        default(){}
      }
    },
    created(){
      this.dropDownData.forEach((item , i)=>{
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
        })

    },
    mounted(){
      this.$options.listEl = this.$refs.dropDownWrapper.querySelectorAll('.vi-dropDown-list');
      this.$options.listEl[0].classList.add('active');
    },
    methods:{
      changeTab(index){

        this.$options.listEl.forEach(item=>{
          item.classList.remove('active');
        })
        this.$options.listEl[index].classList.add('active');
        this.$options.tabIndex = index;
      }, 
      selectFirstItem(index){
        let i = this.$options.tabIndex; //第几个tab
        let secondArrCash = [];
        let thirdArrCash = [];

        //change secondArr
        if (!this.dropDownData[i].children[index].children) {
          this.dropDownList[i][1].splice(0,this.dropDownList[i][1].length);
          this.dropDownList[i][2].splice(0,this.dropDownList[i][2].length);
          return
        }
        this.dropDownData[i].children[index].children.forEach(item=>{
          secondArrCash.push(item.name);
        })
        this.dropDownList[i][1].splice(0,this.dropDownList[i][1].length);
        secondArrCash.forEach(item=>{
          this.dropDownList[i][1].push(item);
        })


        //change thirdArr
        if (!this.dropDownData[i].children[index].children[0].children) {
          this.dropDownList[i][2].splice(0,this.dropDownList[i][1].length);
          return
        }
        this.dropDownData[i].children[index].children[0].children.forEach(item=>{
          thirdArrCash.push(item.name);
        })
        this.dropDownList[i][2].splice(0,this.dropDownList[i][2].length);
        thirdArrCash.forEach(item=>{
          this.dropDownList[i][2].push(item);
        })

        this.firstSelectCallback();
      }
    }
  };
</script>
