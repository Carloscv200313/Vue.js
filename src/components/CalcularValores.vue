<template>
  <h1>{{ props.a * props.b }}</h1>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['a', 'b'])
</script>
<style scoped></style>
