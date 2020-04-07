import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginPage from '@/components/loginpage/LoginPage'
import Login from '@/components/common/Login'
import Register from '@/components/common/Register'
// import { localSto } from '@/apis/localStorage'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title;
  // }
  // if (to.name === "index") {
  //   if (localSto.get("userId")) {

  //   } else {
  //     router.push({
  //       name: 'login'
  //     })
  //   }
  // }
  next()
})

export default router
