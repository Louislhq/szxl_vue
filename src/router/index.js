import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login'

const Login = resolve => require(['@/views/login/index'], resolve)
const Layout = resolve => require(['@/views/layout/Layout'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Layout,
      meta: {
        title: '首页'
      }
    }
  ]
})
