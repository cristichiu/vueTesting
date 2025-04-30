<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="flex gap-16 text-3xl m-8">
      <RouterLink to="/salut">salut</RouterLink>
      <RouterLink to="/hello">hello</RouterLink>
    </nav>
</template>