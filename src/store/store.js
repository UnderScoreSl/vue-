/*
 * @Author: your name
 * @Date: 2020-04-02 10:56:02
 * @LastEditTime: 2020-04-07 15:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-elm\src\store\store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { localSto } from '../apis/localStorage'
// import * as types from './dataconst'

Vue.use(Vuex)
// 先保存apikey信息
let apikey = '6e7046c63cae345e95597d9a8bc387d0'
localSto.saveToLocal('apikey', apikey)

export default new Vuex.Store({
  state: {
    apikey: localSto.getFromLocal('apikey'),
    user: localSto.getFromLocal('user')
  },
  getters: {
    // types.GETKEY
    getApiKey (state) {
      return state.apikey
    },
    // [types.ISLOGIN]
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    // 更新开发者apikey, 更新会
    // 删除用户
    // [types.CHANGEKEY]
    changeApiKey (state) {
      console.log(state.apikey)
      this.$apis.updateApiKey({
        name: '我是一个大水牛',
        passwd: '123456'
      })
        .then(res => {
          console.log(res)
          let str = res.data.result.apikey
          console.log(str)
          state.apikey = str
        })
        .catch(err => console.log(err))
    },
    // [types.CHANGEUSER]
    // 登录状态
    changeLogin (state, data) {
      localSto.saveToLocal('user', data)
      state.user = data
    }
  },
  actions: {
    // [types.CHANGEKEYACTION]
    changeKeyAction ({ commit }) {
      commit('changeKey')
    },
    changeLoginAction ({ commit }, data) {
      commit('changeLogin', data)
    }
  }
})
