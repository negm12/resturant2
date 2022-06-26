import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import menu from '../views/menu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
