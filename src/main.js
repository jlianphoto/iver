import Vue from 'vue'
import App from './App'


// 路由
import router from './router/'

import resource from 'vue-resource'

//图片懒加载
import VueLazyload from 'vue-lazyload'


// 公用css
import "./scss/dep/public.scss"

Vue.use(resource)

      
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})

router.beforeEach((to, from, next) => {
  
  document.title = to.meta.title;
  next();
})


export { app, router }
