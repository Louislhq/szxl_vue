import request from '@/utils/request'

export function loginIn(username,password){
    const data = {
        username,
        password
    }
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function success(){
    return request.get('/sucess')
}

export function getUserInfo(token) {
    return request({
        url: '/profile',
        method: 'get',
        params: {
            access_token: token
        }
    })
}