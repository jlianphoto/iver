/*
* plugin lottery
*
* @param prizesList  Array : prize img in the lottery;
*		 default : []
* @param lotteryBtn Object : button of lottery;
*	     default : {img : ""}
*
* @param prize Number: Winning position;
*	     default : 0
*
* @param speed Number: rolling speed;
*	     default : 100
*
* @param cycle Number: rotation number ;
*	     default : 20
*
* @param lotteryHandler Function: the Function before the start of lottery;
*	     default : Necessary
*
* @param resultHandler Function: the Function after rolling;
*	     default : null
*
*
* Example
  import lottery from '../packages/lottery';
*
*  export default {
*    data() {
*      return {
*        prize:0,
*        prizesList:[
*          require("../img/lottery/icon-lottery-prize4.png"),
*          require("../img/lottery/icon-lottery-prize2.png"),
*          require("../img/lottery/icon-lottery-prize1.png"),
*          require("../img/lottery/icon-lottery-prize3.png"),
*          require("../img/lottery/icon-lottery-prize5.png"),
*          require("../img/lottery/icon-lottery-prize6.png"),
*          require("../img/lottery/icon-lottery-prize7.png"),
*          require("../img/lottery/icon-lottery-prize8.png"),
*        ],
*        lotteryBtn:{
*          img : require("../img/lottery/icon-lottery-btn.png")
*        }
*      }
*    },
*    methods:{
*      lotteryHandler(){
*	
*          //send ajax to get result and pass to child component
*          // get result : this.prize
*          setTimeout(()=>{
*            this.prize = 1;
*            // start rolling
*            if (!this.$refs.lottery.lock) {
*              this.$refs.lottery.lock = true;
*              this.$refs.lottery.roll();
*            }
*          },10)
*      
*      },
*      resultHandler(){
*        alert("draw"+ this.prize)
*      }
*    },
*    components:{
*      lottery:lottery
*    }
*  };
*
*/ 

export { default } from './src/lottery.vue';