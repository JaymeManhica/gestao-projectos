import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../views/Menu.vue'
import Projecto from '../views/Projecto.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
    ,
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/projecto',
      name: 'projecto',
      component: Projecto
    }
   
  ]
})

export default router
