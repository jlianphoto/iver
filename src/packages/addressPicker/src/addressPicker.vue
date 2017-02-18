<template>
  <div :class="['picker-wraper' , 'picker-address' , {isShow : isShow}]">
    
    <div class="list">
      <div class="arrow lis" @click="init">
        <span><slot></slot></span>
        <span :class="['text-right' , {placeholder : placeholder}]">{{showText}}</span>
      </div>
    </div>

    <div class="picker-container">
     <div class="picker-header">
        <span class="picker-cancle" @click="cancleHandler">取消</span>
        <span class="picker-confirm" @click="confirmHandler">确认</span>
      </div>
      <div :class="['wrapper','picker-content' , {showMask:showMask}]" >
        <picker :nowIndex="provinceIndex.nowIndex" :dataArr="provinceData" v-on:change="changeProvince" :isShow="isShow"></picker>
        <picker :nowIndex="cityIndex.nowIndex" :dataArr="cityData" v-on:change="changeCity"></picker>
        <picker :nowIndex="countyIndex.nowIndex" :dataArr="countyData" v-on:change="changeCounty" v-if="hasCounty"></picker>
      </div>
    </div>
    <div class="v-cover" @click="cancleHandler"></div>
  </div>
</template>



<script type="text/javascript">

  import AreaData from './AreaData.json';
  import picker from '../../picker';



  export default {
    data() {
      return {
        isShow:false,
        showMask:false,
        placeholder:true,
        showText:"",
        addressCash:{},
        provinceData:[],
        cityData:[],
        countyData:[],
        provinceIndex:{
          pickerIndex:0, //the index of after rolling
          nowIndex:0  //the index of confirmation
        },
        cityIndex:{
          pickerIndex:0,
          nowIndex:0
        },
        countyIndex:{
          pickerIndex:0,
          nowIndex:0
        }
      };
    },
    props:{
      value:{
        type:Array,
        default(){
          return [];
        }
      },
      hasCounty:{
        type:Boolean,
        default:true
      }
    },
    // handle default data
    created(){

      for (let obj of AreaData) {
        this.provinceData.push(obj.n);
      }

      if (this.value.length > 0) {
        let defaultProvince = this.provinceData.indexOf(this.value[0]);
        this.setCity(defaultProvince);
        this.provinceIndex.nowIndex = defaultProvince;
        this.provinceIndex.pickerIndex = defaultProvince;


        let defaultCity = this.cityData.indexOf(this.value[1]);
        this.setCounty(defaultCity);
        this.cityIndex.nowIndex = defaultCity;
        this.cityIndex.pickerIndex = defaultCity;

        if (this.hasCounty) {
          let defaultCounty = this.countyData.indexOf(this.value[2]);
          this.countyIndex.nowIndex = defaultCounty;
          this.countyIndex.pickerIndex = defaultCounty;
        }
        
        this.placeholder=false;
        this.showText = this.value.join(" ");
      }else{
        this.showText = this.hasCounty ? "省 / 区 / 街道" : "省 / 区";
        this.setCity(0);
      }

    },
    methods:{
      /*
      * set city
      * set address cash , initialize the data of city and county
      *
      * @param index : province index
      */ 
      setCity(index){
        this.addressCash = AreaData[index];
        this.cityData=[];
        this.countyData=[];
        for (let obj of this.addressCash.c) {
          this.cityData.push(obj.n); 
        }
        this.cityIndex.pickerIndex = 0;

        if (this.hasCounty) {
          for (let obj of this.addressCash.c[0].c) {
            this.countyData.push(obj.n)
          }
          this.countyIndex.pickerIndex = 0;
        }
        
      },
      /*
      * set county
      * set county data and initialize county data
      * 
      * @param index : city index
      */ 
      setCounty(index){
        this.countyData=[];
        for (let obj of this.addressCash.c[index].c) {
          this.countyData.push(obj.n)
        }
        this.countyIndex.pickerIndex = 0;
      },

      // change value
      changeProvince(n){
        this.provinceIndex.pickerIndex=n;
        this.setCity(n);
      },
      changeCity(n){
        this.cityIndex.pickerIndex=n;
        if (this.hasCounty) {
          this.setCounty(n);
        }
      },
      changeCounty(n){
        this.countyIndex.pickerIndex=n;
      },

      // confirm handler
      confirmHandler(){
        this.provinceIndex.nowIndex = this.provinceIndex.pickerIndex;
        this.cityIndex.nowIndex = this.cityIndex.pickerIndex;
        
        if (this.hasCounty) {
          this.countyIndex.nowIndex = this.countyIndex.pickerIndex;
        }

        this.addressCash = AreaData[this.provinceIndex.nowIndex];

        if (this.hasCounty) {
          var data = {
            province:this.addressCash.n,
            city:this.cityData[this.cityIndex.nowIndex],
            county:this.countyData[this.countyIndex.nowIndex] || ""
          }
          this.showText = data.province+" "+data.city+" "+data.county;
        }else{
          var data = {
            province:this.addressCash.n,
            city:this.cityData[this.cityIndex.nowIndex]
          }
          this.showText = data.province+" "+data.city;
        }
        
        this.placeholder=false;
        this.isShow = false;

        this.$emit('change', data);
      },
      // cancle handler
      cancleHandler(){
        this.isShow = false;
        this.showMask = false;
        this.setCity(this.provinceIndex.nowIndex);

        if (this.hasCounty) {
          this.setCounty(this.cityIndex.nowIndex);
        }
      },
      init(){
        this.isShow=true;
        this.$children.forEach( function(item) {
          item.init()
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

<style lang="scss">
  @import "addresPicker.scss"
</style>