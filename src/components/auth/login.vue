<script setup lang="ts">
import AuthTemplate from '@/components/auth/authTemplate.vue'
import { ref } from 'vue'
const username = ref("")
const password = ref("")
const error = ref("")
function login() {
  if(username.value == '' || password.value == '') return error.value = "empty"
  console.log(username.value, password.value)
  // fetch post catre API
}
</script>
<template>
  <AuthTemplate @auth-click="login" :error="error">
    <template #title>Log in</template>
    <template #inputs>
      <input v-model="username" type="text" placeholder="username">
      <input v-model="password" type="password" placeholder="password">
    </template>
    <template #buttonLabel>Login</template>
    <template #options>
      <div @click="$emit('auth-switch')">Don't have an accout yet?</div>
    </template>
  </AuthTemplate>
</template>