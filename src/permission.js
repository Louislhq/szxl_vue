import router from './router'
import store from './vuex/store'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']
//全局前置守卫每次都判断用户是否已经登录，没有登录则跳到登录页
router.beforeEach((to, from, next) => {

    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/home'})
        }else{
            if (store.getters.roles.length === 0) {
                store.dispatch('GetUserInfo').then(res => {
                    const roles = res.data.data.roles
                    store.dispatch('GenerateRoutes', { roles }).then(() => {
                        router.addRoutes(store.getters.addRouters)
                        
                        next({ ...to, replace: true })
                    })
                }).catch(err => {
                    console.log(err)
                })
            }else{
                console.log(store.getters)
                console.log(router.options.routes)
                next()
            }
        }
    } else {
        if ( whiteList.indexOf(to.path) !== -1) {
            next()
        } else{
            next('/login')
        }
    }
})