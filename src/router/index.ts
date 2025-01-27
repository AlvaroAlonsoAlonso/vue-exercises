import { createRouter, createWebHistory } from 'vue-router'
import CatalogoView from '../views/catalogoView.vue'
import HomeView from '../views/homeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: CatalogoView,
    },
  ],
})

export default router
