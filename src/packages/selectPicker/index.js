/*
* plugin selectPicker
*
* @param options Array : select options
* default []
*
* @param defaultVal String : default value in select
* defalt ""
*
* Example
* <select-picker :options="options" v-on:change="getValue">请选择</select-picker>
*
* import selectPicker from '../packages/selectPicker';
* export default {
*    data() {
*      return {
*        options : ["select","select1","select2","select3","select4"]
*      };
*    },
*    methods:{
*      getValue(msg){
*        console.log(msg)
*      }
*    },
*    components:{
*      selectPicker,
*    }
*  };
*/ 

export { default } from './src/selectPicker.vue';