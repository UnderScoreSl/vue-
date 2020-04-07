<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class='login' v-if="user!==isLogin">
      <p>您已登录,点击退出</p>
      <button @click='exit'>退出</button>
    </div>
    <div class='exit' v-else>
      <p>请先登录</p>
      <router-link :to="{name:'loginpage'}">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home页面',
      // 不能给user直接赋值this.$store.getters.getUser
      user: null
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    exit () {
      this.$store.dispatch('changeLoginAction', null)
      console.log('退出登录')
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
