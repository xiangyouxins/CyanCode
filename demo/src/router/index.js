import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: resolve=>(require(["@/components/login"],resolve))
    },
    {
      path: '/login',
      name: 'login',
      component: resolve=>(require(["@/components/login"],resolve))
    },
    {
      path: '/index',
      name: 'index',
      component: resolve=>(require(["@/views/index"],resolve))
    },
    {
      path: '/my',
      name: 'my',
      component: resolve=>(require(["@/views/my/my"],resolve))
    },
  ]
})
