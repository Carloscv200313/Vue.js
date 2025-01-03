<template>
  <div class="contenedor">
    <WheatherView />
  </div>
</template>
<script setup>
import WheatherView from '../components/WheatherView.vue'
</script>
<style scoped>
.contenedor {
  width: auto;
  background-color: rgb(168, 114, 114);
  padding: 10px;
  color: rgb(165, 3, 3);
}
</style>
