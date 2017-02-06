/*
* plugin switch
*
* @param value  Boolean : false or true;
*		 default : "false"
* @param disabled Boolean: if it can be changed;
*	     default : "false"
*
* Example
* <v-switch v-on:sChange="getValue" :value="true" :disabled="true"></v-switch>
* import vSwitch from '../packages/switch';
* export default {
*     mounted(){
*		//get initial value	
*       console.log(this.$refs.s1.value)
*    },
*    methods:{
*	   // get value when the value is changed
*      getValue(msg){
*        console.log(msg)
*      }
*    }
*    
*    }
*  };
*
*/ 

export { default } from './src/swiper.vue';