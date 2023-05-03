import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/link',
      name: 'link',
      component: () => import('../views/LinkTask.vue')
    },
    {
      path: '/datetimepicker',
      name: 'datetimepicker',
      component: () => import('../views/DateTimePicker.vue')
    },
    {
      path: '/multiselect',
      name: 'multiselect',
      component: () => import('../views/MultiSelect.vue')
    },
    {
      path: '/cell',
      name: 'cell',
      component: () => import('../views/Cell.vue')
    }
  ]
})

export default router
