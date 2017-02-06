/*
* plugin addressPicker
*
* @param hasCounty  Boolean : Do you need county;
*		 default : "true"
* @param value Array: Initial value  ["广东省","佛山市","南海区"];
*	     default : []
*
* Example
* <address-picker v-on:change="getValue">区域:</address-picker>
* import address from '../../packages/addressPicker';
* export default {
*    data() {
*      return {
*        value:["广东省","佛山市","南海区"]
*      };
*    },
*    methods:{
*    //get message from child component
*    getValue(msg){
*      console.log(msg);
*     }
*    },
*    components:{
*      addressPicker : address
*    }
*  };
*
*/ 

export { default } from './src/addressPicker.vue';