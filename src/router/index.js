import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginPage from '@/components/loginpage/LoginPage'
import Login from '@/components/common/Login'
import Register from '@/components/common/Register'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage,
    redirect: '/login',
    children: [{
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }]
  }]
})
