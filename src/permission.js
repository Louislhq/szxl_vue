import router from './router'
import store from './vuex/store'
import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
    if (getToken()) {
        store.dispatch('GetUserInfo').then(res => {
            // console.log(res)
        })
    } else {
        next()
    }
})