/*
* plugin swiper
*
* @param imgs  Array : img url and href in object;
*		 default : []
* @param defaultIndex Number: default of img;
*	     default : 0
*
* @param auto Boolean: if auto play;
*	     default : false
*
*
* Example
* <swiper :imgs="imgs" :defaultIndex="1" :auto="true"></swiper>
* import swiper from '../packages/swiper';
*  export default {
*    data() {
*      return {
*          imgs : [
*            {
*              imgUrl:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg' 
*            },
*            {
*              imgUrl:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg' , 
*              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
*            },
*            {
*              imgUrl:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg' , 
*              href:'http://img2.imgtn.bdimg.com/it/u=3205972290,1389369162&fm=23&gp=0.jpg'
*            }
*          ]
*        }
*    },
*    components:{
*      swiper : swiper
*    }
*  };
*
*/ 

export { default } from './src/swiper.vue';