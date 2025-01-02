<template>
  <div class="cont">
    <h1>Hola mundo</h1>
    <p>{{ contador }}</p>
    <button @click="incrementar">Aumenta</button>
    <button @click="noIncrementar">Disminuye</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const contador = ref(0)
const incrementar = () => {
  contador.value++
}
const noIncrementar = () => {
  contador.value--
}
</script>
<style scoped>
p {
  color: blue;
}
</style>
