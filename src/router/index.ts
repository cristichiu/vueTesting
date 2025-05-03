import { createRouter, createWebHistory } from 'vue-router'
import Hello from '@/views/hello.vue'
import Salut from '@/views/salut.vue'
import Auth from '@/views/auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/hello', name: 'hello', component: Hello },
    { path: '/salut', name: 'salut', component: Salut },
    { path: '/auth', name: 'auth', component: Auth },
  ],
})

export default router
