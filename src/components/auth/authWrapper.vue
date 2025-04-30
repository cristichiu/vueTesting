<script setup lang="ts">
import Login from '@/components/auth/login.vue'
import Register from '@/components/auth/register.vue'
import { ref } from 'vue'
const isLoginPage = ref(true)
</script>
<template>
  <Login v-if="isLoginPage" @auth-switch="() => isLoginPage = false"></Login>
  <Register v-else @auth-switch="() => isLoginPage = true"></Register>
</template>