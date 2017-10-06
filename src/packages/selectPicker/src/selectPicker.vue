<template>
  <div :class="[prefixCls+'-wraper' , {isShow : isShow}]">
    
    <div class="list">
      <div class="arrow lis" @click="init">
        <span><slot></slot></span>
        <span :class="['text-right' , {placeholder : placeholder}]">{{showText}}</span>
      </div>
    </div>

    <div :class="prefixCls+'-container'">
     <div :class="prefixCls+'-header'">
        <span :class="prefixCls+'-cancle'" @click="cancleHandler">取消</span>
        <span :class="prefixCls+'-confirm'" @click="confirmHandler">确认</span>
      </div>
      <div :class="['wrapper',prefixCls+'-content' , {showMask:showMask}]" >
        <picker :nowIndex="dataIndex.nowIndex" :dataArr="options"  v-on:change="changeData" :isShow="isShow"></picker>
      </div>
    </div>
    <div class="v-cover" @click="cancleHandler"></div>
  </div>
</template>



<script type="text/javascript">
  import './selectPicker.scss';
  import picker from '../../picker';

  export default {
      name:'selectPicker',
      data() {
          return {
              prefixCls:'iv-picker',
              isShow:false,
              showMask:false,
              placeholder:true,
              showText:'',
              dataIndex:{
                  pickerIndex:0, //the index of after rolling
                  nowIndex:0  //the index of confirmation
              }
          };
      },
      props:{
          options:{
              type:Array,
              default(){
                  return [];
              }
          },
          defaultVal:{
              type:String,
              default:''
          }
      },
      // handle default data
      created(){

          if (this.defaultVal) {
              this.dataIndex.pickerIndex = this.options.indexOf(this.defaultVal);
              this.dataIndex.nowIndex = this.options.indexOf(this.defaultVal);

              this.placeholder = false;
              this.showText = this.defaultVal;

          }

      },
      methods:{
          changeData(n){
              this.dataIndex.pickerIndex = n;
          },
          // confirm handler
          confirmHandler(){
              this.dataIndex.nowIndex = this.dataIndex.pickerIndex;

              var data = this.options[this.dataIndex.nowIndex];

              this.showText = data;
              this.showMask = false;

              this.placeholder=false;
              this.isShow = false;

              this.$emit('change', data);
          },

          // cancle handler
          cancleHandler(){
              this.isShow = false;
          },
          init(){
              this.isShow=true;
              this.$children.forEach( function(item) {
                  item.init();
              });

              // be compatible with ISO10
              setTimeout(()=>{
                  this.showMask = true;
              },120);
          },
      },
      components:{
          picker : picker
      }
  };
</script>
