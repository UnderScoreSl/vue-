<template>
  <el-form ref="form" :model="form">
    <el-input v-model="form.user" placeholder="用户名" style="margin-bottom: 5px;" clearable>
      <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
    </el-input>
    <el-input type="password" v-model="form.passwd" placeholder="密码" show-password>
      <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
    </el-input>
    <el-button type="primary" size="medium" style="width: 100%; margin-top: 17px;" @click="login">登录</el-button>
    <router-link to="/register">还没有账号，去注册</router-link>
  </el-form>
</template>

<script>
import { localSto } from '@/apis/localStorage'
export default {
  name: 'login',
  data () {
    return {
      form: {
        user: '',
        passwd: ''
      }
    }
  },
  methods: {
    login () {
      this.$apis.userLogin({
        name: this.form.user,
        passwd: this.form.passwd,
        apikey: this.$store.getters.getApiKey
      })
        .then(res => {
          if (res.data.code === 200) {
            let userInfo = res.data.result.name
            localSto.saveToLocal('user', userInfo)
            // 测试是否存储成功
            let userName = localSto.getFromLocal('user')
            console.log(userName)
            // 更新user
            this.$store.dispatch('changeLoginAction', userInfo)
          }
          this.$router.push({
            path: '/'
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
