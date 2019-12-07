import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VroomService from '@/components/VroomService/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Accueil'
      }
    },
    {
      path: '/vroomservice',
      name: 'VroomService',
      component: VroomService,
      meta: {
        title: 'VroomService'
      }
    }
  ]
})
