<template>
  <div>
    <HeaderTemperatura />
    <div class="sidebar">
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
.sidebar {
  display: flex;
  flex-direction: row;
}
</style>
