<script setup lang="ts">
import AuthTemplate from '@/components/auth/authTemplate.vue'
import { ref } from 'vue'
const username = ref("")
const password = ref("")
const confirm = ref("")
const error = ref("")
function register() {
  if(username.value == '' || password.value == '') return error.value = "empty"
  if(password.value != confirm.value) return error.value = "confirm invalid"
  console.log(username.value, password.value, confirm.value)
}
</script>
<template>
  <AuthTemplate @auth-click="register" :error="error">
    <template #title>Register</template>
    <template #inputs>
      <input v-model="username" type="text" placeholder="username">
      <input v-model="password" type="password" placeholder="password">
      <input v-model="confirm" type="password" placeholder="confirm password">
    </template>
    <template #buttonLabel>Register</template>
    <template #options>
      <div @click="$emit('auth-switch')">Already have an account?</div>
    </template>
  </AuthTemplate>
</template>