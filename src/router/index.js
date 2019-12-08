import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page404 from '@/components/Page404'
import VroomService from '@/components/VroomService/Home'
import Voitures from '@/components/VroomService/Voitures'
import Reservations from '@/components/VroomService/Reservations'
import Profil from '@/components/VroomService/Profil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Page404',
      component: Page404,
      meta: {
        title: 'Page non trouvée'
      }
    },
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
      },
      children: [
        {
          path: 'voitures',
          name: 'Voitures',
          component: Voitures,
          meta: {
            title: 'VroomService'
          }
        },
        {
          path: 'reservations',
          name: 'Reservations',
          component: Reservations,
          meta: {
            title: 'VroomService'
          }
        },
        {
          path: 'profil',
          name: 'Profil',
          component: Profil,
          meta: {
            title: 'VroomService'
          },
        }
      ]
    }
  ]
})
