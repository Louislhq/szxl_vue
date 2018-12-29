import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginIn, getUserInfo } from '@/api/login'

const user = {
    state: {
        user: '',
        name: '',
        avatar: '',
        email: '',
        mobile: '',
        token: getToken()
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        SET_MOBILE: (state, mobile) => {
            state.mobile = mobile
        },
        SET_TOKEN: (state,token) => {
            state.token = token
        }
    },
    actions: {
        LoginByUsername({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            return new Promise((resolve, reject) => {
                loginIn(username, password).then(res => {
                    const data = res.data
                    if(data.code == '0'){
                        commit('SET_TOKEN', data.data.access_token)
                        setToken(data.data.access_token)
                        resolve()
                    }else{
                        reject(data.code)
                    }
                    
                }).catch(err => {
                    reject(err)
                })
            })
        },
        GetUserInfo({commit,state}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(res => {
                    console.log(res)
                    resolve(res)
                })
            })
        }
    }
}

export default user