import AppVue from '@/App.vue'
import DashboardVue from '@/views/Dashboard.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterView,
      meta: {
        title: 'Sign Up'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardVue,
      meta: {
        title: 'Dashboard'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Tutu-test`;
  next();
});

export default router
