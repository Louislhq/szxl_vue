import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login'

const Login = resolve => require(['@/views/login/index'], resolve)
const Layout = resolve => require(['@/views/layout/Layout'], resolve)
const Redirect = resolve => require(['@/views/redirect/index'], resolve)
const AuthRedirect = resolve => require(['@/views/login/authredirect'], resolve)
const error404 = resolve => require(['@/views/errorPage/404'], resolve)

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: Redirect
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/auth-redirect',
    component: AuthRedirect,
    hidden: true
  },
  {
    path: '/404',
    component: error404,
    hidden: true
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

export default new Router({
  scrollBehavior: () =>({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true,
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
        }
      }
    ]
  }
]