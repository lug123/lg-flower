import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import Vue from 'vue'
const load = new Vue()
// 创建一个实例
const request = axios.create({
  baseURL: '/database',
  timeout: 5000
})

// 添加 请求 拦截器
request.interceptors.request.use(function (config) {
  // 可以在请求发送之前做一些事情  config 请求信息 config.headers
  //全局loading
  load.$showLoading()
  // 处理post请求的参数
  if (config.method === 'post' && config.data) {
    config.data = qs.stringify(config.data)
  }
  // 请求头传入access_token
  const acccessToken = localStorage.getItem('access_token')
  // console.log(config);
  if (acccessToken) {
    config.headers.access_token = acccessToken
  }
  return config
}, function (error) {
  // 出错了 走这里
  return Promise.reject(error)
})

// 添加相应拦截
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // 在相应数据 发送到 ajax之前，可以在这里拦截
  load.$hideLoading()
  //判断token是否过期
  if (response.data.code === 401) {
    Toast('token已过期，请重新登录')
    load.$router.push('/login')
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default request
