import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login'

const Login = resolve => require(['@/components/login/Login'], resolve)
const Home = resolve => require(['@/components/Home'], resolve)

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
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})
