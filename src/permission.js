import router from './router'
import store from './vuex/store'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {

    if (getToken()) {
        
        if (to.path === '/login') {
            next({ path: '/home'})
        }else{
            if (store.getters.roles.length === 0) {
                store.dispatch('GetUserInfo').then(res => {
                    const roles = res.data.data.roles
                    store.dispatch('GenerateRoutes', { roles }).then(() => {
                        next()
                    })
                }).catch(err => {
                    console.log(err)
                })
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