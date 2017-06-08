import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/:title',
      name: 'Detail',
      component: Detail
    }
  ]
})
