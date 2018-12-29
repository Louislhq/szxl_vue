//保存token方式

const TokenKey = 'token'

export function getToken(){
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token){
    return sessionStorage.setItem(TokenKey,token)
}

export function removeToken(token){
    return sessionStorage.removeItem(TokenKey)
}

export function clearStorage(){
    return sessionStorage.clear()
}