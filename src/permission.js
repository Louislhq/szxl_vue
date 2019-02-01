import router from './router'
import store from './vuex/store'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {

    if (getToken()) {
        
        if (to.path === '/login') {
            next({ path: '/home'})
        }else{
            store.dispatch('GetUserInfo').then(res => {
                // console.log(res)
                // console.log(store.state)
                // next({ ...to, replace: true })
                next()
            }).catch(err => {
                console.log(err)
            })
        }
    } else {
        if ( whiteList.indexOf(to.path) !== -1) {
            next()
        } else{
            next('/login')
        }
    }
})