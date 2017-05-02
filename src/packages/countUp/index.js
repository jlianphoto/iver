/*
* plugin countup
*
* @param startVal  Number;
*		 default : 0
* @param endVal Number;
*	     default : 0
* @param decimals Number;
*		 default : 0;
* @param duration Number;
*		 default : 2;
* @param options object;
*        default {};
*
*  var easeOutCubic = function(t, b, c, d) {
*      var ts = (t /= d) * t;
*      var tc = ts * t;
*      return b + c * (1.77635683940025e-15 * tc * ts + 0.999999999999998 * tc + -3 * ts + 3 * t);
*  };
*  var options = {
*    easingFn: easeOutCubic
*  };
*
*
* Example
* <count-up :startVal="0" :endVal="2000.98" :decimals="2" class="countUp"></count-up>
* import datetime from '../../packages/datetime';
* export default {
*    components:{
*      countUp : countUp
*    }
* }
*
*/ 

export { default } from './src/countUp.vue';