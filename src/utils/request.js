import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

// 创建 axios 实例
const service = axios.create({
    // baseURL: '/api',
    baseURL: 'http://172.16.0.110:3000/mock/32/api',
    timeout: 1000,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.method == 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  }, function (error) {
    // 对请求错误做些什么
    console.log(err)
    return Promise.reject(error)
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 对响应错误做点什么
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  });

export default service