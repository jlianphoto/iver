<template>
  <div>
    <lottery ref="lottery" :lotteryHandler="lotteryHandler" :lotteryBtn="lotteryBtn" :prizesList="prizesList" :prize="prize" :resultHandler="resultHandler"></lottery>
  </div>
</template>


<script type="text/javascript">

  import lottery from '../packages/lottery';

  export default {
    data() {
      return {
        prize:0,
        prizesList:[
          require("../img/lottery/icon-lottery-prize4.png"),
          require("../img/lottery/icon-lottery-prize2.png"),
          require("../img/lottery/icon-lottery-prize1.png"),
          require("../img/lottery/icon-lottery-prize3.png"),
          require("../img/lottery/icon-lottery-prize5.png"),
          require("../img/lottery/icon-lottery-prize6.png"),
          require("../img/lottery/icon-lottery-prize7.png"),
          require("../img/lottery/icon-lottery-prize8.png"),
        ],
        lotteryBtn:{
          img : require("../img/lottery/icon-lottery-btn.png")
        }
      }
    },
    methods:{
      lotteryHandler(){

          /*
          * send ajax to get result and pass to child component
          **/ 
          
          // get result : this.prize
          setTimeout(()=>{
            this.prize = 1;
            // start rolling
            if (!this.$refs.lottery.lock) {
              this.$refs.lottery.lock = true;
              this.$refs.lottery.roll();
            }
          },10)
          

      },
      resultHandler(){
        alert("draw"+ this.prize)
      }
    },
    components:{
      lottery:lottery
    }
  };
</script>

<style type="text/css">

</style>