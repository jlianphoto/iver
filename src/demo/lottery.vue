<template>
  <div>
    <lottery :beforeLottery="beforeLottery" :lotteryBtn="lotteryBtn" :prizesList="prizesList" :prize="prize" :afterLottery="afterLottery"></lottery>
  </div>
</template>


<script type="text/javascript">

  import lottery from '../packages/lottery';

  export default {
      data() {
          return {
              prize:0,
              prizesList:[
                  require('../img/lottery/icon-lottery-prize4.png'),
                  require('../img/lottery/icon-lottery-prize2.png'),
                  require('../img/lottery/icon-lottery-prize1.png'),
                  require('../img/lottery/icon-lottery-prize3.png'),
                  require('../img/lottery/icon-lottery-prize5.png'),
                  require('../img/lottery/icon-lottery-prize6.png'),
                  require('../img/lottery/icon-lottery-prize7.png'),
                  require('../img/lottery/icon-lottery-prize8.png'),
              ],
              lotteryBtn:{
                  img : require('../img/lottery/icon-lottery-btn.png')
              }
          };
      },
      methods:{
          beforeLottery(resolve,reject){

          /*
          * send ajax to get result and pass to child component
          **/ 
          
          // get result : this.prize
              setTimeout(()=>{
                  this.prize = 1;
                  resolve();
              },10);

          },
          afterLottery(){
              alert('draw'+ this.prize);
          }
      },
      components:{
          lottery:lottery
      }
  };
</script>

<style type="text/css">

</style>