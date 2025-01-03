<template>
  <h1>La temperatura es:</h1>
  <h2>{{ weatherStore.temperatura }}</h2>
</template>
<script setup>
import { useWeather } from '@/modules/useWheather'
import { onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weatherStore'
const weatherStore = useWeatherStore()
onMounted(() => {
  useWeather()
})
</script>
<style scoped></style>
