import { createRouter, createWebHistory } from 'vue-router'
import Hello from '@/views/hello.vue'
import Salut from '@/views/salut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/hello', name: 'hello', component: Hello },
    { path: '/salut', name: 'salut', component: Salut },
  ],
})

export default router
