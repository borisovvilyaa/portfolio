// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'
import Education from '@/views/Education.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      alias: '/' // Используем alias для отображения /home на /
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Portfolio
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    }
  ]
})

export default router
