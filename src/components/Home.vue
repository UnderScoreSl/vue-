<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class='login' v-if='isLogin'>
      <p>请先登录</p>
      <router-link :to="{name:'loginpage'}">登录</router-link>
    </div>
    <div class='exit' v-else>
      <p>您已登录,点击退出</p>
      <button @click='exit'>退出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '未登录的Home页面',
      isLogin: true
    }
  },
  methods: {
    login () {
      console.log('进入登录')
      this.isLogin = !this.isLogin
    },
    exit () {
      console.log('退出登录')
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
