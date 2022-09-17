import AppVue from '@/App.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AppVue
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterView
    }
  ]
})

export default router
