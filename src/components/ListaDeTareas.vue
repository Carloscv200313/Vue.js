<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="nueva_tareas" @keyup.enter="añadirTarea" />
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="Borrar(index)">X</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const tareas = ref([])
const nueva_tareas = ref('')
const añadirTarea = () => {
  tareas.value.push(nueva_tareas.value)
  nueva_tareas.value = ''
}
const Borrar = (index) => {
  tareas.value.splice(index, 1)
}
</script>
<style></style>
