<template>
  <div class="sidebar">
    <h1 class="titulo">Contenidos</h1>
    <div class="nav">
      <router-link to="/"> Inicio</router-link>
      <router-link to="/contador"> Contador</router-link>
      <router-link to="/lista"> Lista de tareas</router-link>
    </div>
  </div>
</template>
<script setup></script>
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
