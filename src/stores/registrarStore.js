import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegistrar = defineStore('registro', () => {
  const nombre = ref('')
  const email = ref('')
  const guardarRegistro = (nombreForm, emailForm) => {
    nombre.value = nombreForm
    email.value = emailForm
  }
  return { nombre, email, guardarRegistro }
})
