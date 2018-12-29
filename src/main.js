// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//初始化CSS
import Normalize from 'normalize.css'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//引入mock数据
// import Mock from '../mock'
// Mock.init()

import store from './vuex/store'
import './permission' 


//设置title
// router.beforeEach((to, from, next) => {
//   if(to.meta.title){
//     document.title = to.meta.title
//   }
//   next()
// })


Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
