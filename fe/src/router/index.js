import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/:title',
      name: 'Detail',
      component: Detail
    }
  ]
})
