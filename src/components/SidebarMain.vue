<template>
  <div class="sidebar">
    <h1 class="titulo">Bienvenido</h1>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Correo: {{ email }}</h3>
    <div class="nav">
      <router-link to="/contador"> Contador</router-link>
      <router-link to="/lista"> Lista de tareas</router-link>
      <router-link to="/registro"> Formulario</router-link>
    </div>
  </div>
</template>
<script setup>
import { useRegistrar } from '../stores/registrarStore'
import { ref, watch } from 'vue'
const registro = useRegistrar()
const nombre = ref(registro.nombre.value)
const email = ref(registro.email.value)
watch(
  () => registro.nombre,
  (newValue) => {
    nombre.value = newValue
  },
)
watch(
  () => registro.email,
  (newValue) => {
    email.value = newValue
  },
)
</script>
<style>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: aqua;
}
.titulo {
  font-size: x-large;
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: x-large;
  color: black;
}
</style>
