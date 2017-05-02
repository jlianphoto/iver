/*
* plugin datetime
*
* @param format  String: "YYYY-MM-DD" , "MM-DD" , "YYYY-MM" ;
		 default : "YYYY-MM-DD"
* @param value String: Initial value ; 
	     default : today
* @param minYear Number: Minimum year ; 
		 default : new Date().getFullYear()-10;
* @param maxYear Number: Maximum year ; 
		 default : new Date().getFullYear()+10;
*
*
* Example
* <datetime v-on:change="getValue"></datetime>
* import datetime from '../../packages/datetime';
* export default {
*	methods:{
*	  //get message from child component
*      getValue(msg){
*        console.log(msg)
*      }
*    },
*    components:{
*      datetime : datetime
*    }
* }
*
*/ 




export { default } from './src/picker.vue';