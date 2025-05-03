<script setup lang=ts>
defineProps<{
  error?: string
}>()
</script>
<template>
  <div>
    <div class="title"><slot name='title' /></div>
    <div class="inputs"><slot name='inputs' /></div>
    <button class="button" @click="$emit('auth-click')"><slot name='buttonLabel' /></button>
    <div class="error">{{ error }}</div>
    <div class="options"><slot name='options' /></div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
.title {
  text-align: center;
}
.inputs {
  display: flex;
  flex-direction: column;
}
.inputs ::v-deep(input) {
  border: 1px solid black
}
button  {
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.options ::v-deep(div) {
  text-align: end;
  cursor: pointer;
}
</style>