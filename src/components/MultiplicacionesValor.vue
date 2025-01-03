<template>
  <div>
    <h1>Multiplicacion de 2 valores</h1>
    <input type="text" v-model="a" />
    <input type="text" v-model="b" />
    <CalcularValores :a="a" :b="b" />
  </div>
</template>
<script setup>
import CalcularValores from '@/components/CalcularValores.vue'
import { ref } from 'vue'
const a = ref(null)
const b = ref(null)
</script>
<style scoped></style>
