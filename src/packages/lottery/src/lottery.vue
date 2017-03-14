<template>
  <div class="vi-lottery">
      <ul>
        <li class="row">
          <div :class="['col-4' , {active : activeClass[index]}]" v-for="(prize,index) in lis1" ><img :src="prize"></div>
        </li>
        <li class="row">
          <div :class="['col-4' , {active : activeClass[7]}]"><img :src="prizesList[7]"></div>
          <div class="col-4" @click="lotteryHandler"><img :src="lotteryBtn.img"></div>
          <div :class="['col-4' , {active : activeClass[3]}]"><img :src="prizesList[3]"></div>
        </li>
        <li class="row">
          <div :class="['col-4' , {active : activeClass[6-index]}]" v-for="(prize,index) in lis2"><img :src="prize"></div>
        </li>
      </ul>
  </div>
</template>



<script type="text/javascript">
  import './lottery.scss';
  export default {
    name:"swiper",
    data(){
      return {
        activeClass:[false,false,false,false,false,false,false,false],
        index:-1,
        count:8,
        timer:null,    
        times:0,
        speed :100,
        lock :false
      }
    },
    props:{

     prizesList :{
      type: Array,
      default(){
        return []
      }
     },

     lotteryBtn:{
      type : Object,
      default(){
        return {
          img : ""
        };
      }
     },

     lotteryHandler:{
        type : Function,
        default(){throw new Error("you must define lotteryHandler before draw a lottery ")}
     },

     resultHandler:{
      type : Function,
      default(){console.warn("you can use resultHandler after rolling")}
     },

     prize:{
      type : Number,
      default :0
     },
     speed:{
      type : Number,
      default :100
     },
     cycle:{
      type : Number,
      default : 20
     }
    },
    computed:{
      lis1(){
        return this.prizesList.slice(0,3);
      },
      lis2(){
        return this.prizesList.slice(4,7).reverse();
      }
    },
    methods:{
      _rollHandler(){
          var index = this.index;
          var count = this.count;

          for(let i=0 , len=this.activeClass.length; i<len ; i++){
            this.activeClass[i] = false;
          }
          index += 1;
          if (index>count-1) {
              index = 0;
          };
          this.activeClass[index] = true;
          this.index=index;
          return false;
      },
      roll(){
          this.activeClass = this.activeClass.map(item=>{
              item =  false;
          })
          this.times += 1;
          this._rollHandler();
          if (this.times > this.cycle+10 && this.prize==this.index) {

              clearTimeout(this.timer);

              setTimeout(
                  ()=>{this._showResult()}
              ,1000)
              
              this.lock=false;
              this.index=-1;
              this.count=8;
              this.timer=null;    
              this.speed=100;
              this.times=0;

          }else{
              if (this.times<this.cycle) {
                  this.speed -= 2; //调整加速度
              }else{
                if (this.times > this.cycle+10 && ((this.prize==0 && this.index==7) || this.prize==this.index+1)) {
                    this.speed += 110;
                }else{
                    this.speed += 20;
                }
              }
              if (this.speed<40) {
                  this.speed=40;
              };
              this.timer = setTimeout(
                  ()=>{this.roll();}
              ,this.speed);
          }
          return false;
      },
      _showResult(){
        this.resultHandler();
      }
    }
  };
</script>
