<template>
  <div>
    <HeaderTemperatura />
    <div class="contenido">
      <SidebarMain></SidebarMain>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import SidebarMain from '../components/SidebarMain.vue'
import HeaderTemperatura from '../components/HeaderTemperatura.vue'
</script>
<style scoped>
.contenido {
  display: flex;
  flex-direction: row;
}
</style>
