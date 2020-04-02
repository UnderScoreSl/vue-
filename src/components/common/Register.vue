<template>
  <el-form ref="form" :model="form">
    <el-input v-model="form.user" placeholder="用户名" style="margin-bottom: 5px;" clearable>
      <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
    </el-input>
    <el-input type="password" v-model="form.password" placeholder="密码" show-password>
      <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
    </el-input>
    <el-button type="primary" size="medium" style="width: 100%; margin-top: 17px;">注册</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        user: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
