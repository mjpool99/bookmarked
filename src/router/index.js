import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allreviews',
    name: 'AllReviews',
    component: () => import('../views/AllReviews.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin/upload/',
    name: 'ContentUpload',
    component: () => import('../views/ContentUpload.vue')
  },
  {
    path: '/admin/preview/',
    name: 'ContentPreview',
    component: () => import('../views/ContentPreview.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
