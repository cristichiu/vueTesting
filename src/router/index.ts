import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/hello.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/salut',
      name: 'salut',
      component: () => import('../views/salut.vue'),
    },
  ],
})

export default router
