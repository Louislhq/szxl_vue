//引入axios
import Axios from 'axios'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Axios.defaults.baseURL = 'http://127.0.0.1:80'


export const requseLogin = params => {
    return Axios.post('/user/login', params);
}