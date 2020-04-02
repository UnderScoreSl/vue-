<template>
  <div class='loginpage'>
    <div class="link">
      <router-link :to="{name:'login'}">登录</router-link>
      <span> / </span>
      <router-link :to="{name:'register'}">注册</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'loginpage',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.loginpage {
  width: 50%;
  margin: 0 auto;
  .link {
    width: 100%;
    margin: 15px auto;
  }
}
</style>
