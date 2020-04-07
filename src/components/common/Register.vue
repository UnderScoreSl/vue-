<template>
  <el-form ref="form" :model="form">
    <el-input v-model="form.user" placeholder="用户名" style="margin-bottom: 5px;" clearable>
      <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
    </el-input>
    <el-input type="password" v-model="form.passwd" placeholder="密码" style="margin-bottom: 5px;" show-password>
      <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
    </el-input>
    <el-button type="primary" size="medium" style="width: 100%; margin-top: 17px;" @click="reg">注册</el-button>
    <router-link to="/login">已有账号，去登录</router-link>
  </el-form>
</template>

<script>
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
    reg () {
      this.$apis.userRegister({
        name: this.form.user,
        passwd: this.form.passwd,
        apikey: this.$store.getters.getApiKey
      })
        .then(res => {
          console.log(res)
          this.$router.push({
            path: '/login'
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
