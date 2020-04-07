/*
 * @Author: your name
 * @Date: 2020-04-03 11:09:29
 * @LastEditTime: 2020-04-06 22:21:47
 * @LastEditors: Please set LastEditors
 * @Description: 处理注册登录
 * @FilePath: \vue-elm\src\apis\users.js
 */
import axios from 'axios'
import Qs from 'qs'
// import store from '../store/store'
// import router from '../router/index'

const instance = axios.create({
  timeout: 5000, // 请求超时5s
  header: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  baseURL: 'https://api.apiopen.top/'
})

export default {
  // 注册
  userRegister (data) {
    return instance.post('registerUser', Qs.stringify(data))
  },
  // 登录
  userLogin (data) {
    return instance.post('loginUser', Qs.stringify(data))
  },
  // 更新开发者apikey
  updateApiKey (data) {
    return instance.post('developerUpdateKey', Qs.stringify(data))
  }
}
