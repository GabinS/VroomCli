import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page404 from '@/components/Page404'
import VroomService from '@/components/VroomService/Home'
import Connexion from '@/components/VroomService/Connexion'
import Voitures from '@/components/VroomService/Voitures'
import Reservations from '@/components/VroomService/Reservations'
import Profil from '@/components/VroomService/Profil'


import PrtchService from '@/components/PrtchService/Home'
import Voyages from '@/components/PrtchService/Voyages'

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
          path: '/',
          name: 'VroomService',
          component: Connexion,
          meta: {
            title: 'Connexion VroomService'
          }
        },
        {
          path: '/',
          name: 'Connexion',
          component: Connexion,
          meta: {
            title: 'Connexion VroomService'
          }
        },
        {
          path: 'voitures',
          name: 'Voitures',
          component: Voitures,
          meta: {
            title: 'Les Voitures VroomService'
          }
        },
        {
          path: 'reservations',
          name: 'Reservations',
          component: Reservations,
          meta: {
            title: 'Mes Réservations VroomService'
          }
        },
        {
          path: 'profil',
          name: 'Profil',
          component: Profil,
          meta: {
            title: 'Mon compte VroomService'
          },
        }
      ]
    },
    {
      path: '/prtchservice',
      name: 'PrtchService',
      component: PrtchService,
      meta: {
        title: 'PrtchService'
      },
      children: [
        {
          path: '/',
          name: 'PrtchService',
          component: Voyages,
          meta: {
            title: 'Les Voyages PrtchService'
          }
        },
        {
          path: 'voyages',
          name: 'Voyages',
          component: Voyages,
          meta: {
            title: 'Les Voyages PrtchService'
          }
        },
      ]
    }
  ]
})
