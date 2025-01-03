<template>
  <div>
    <h2>Formulario</h2>
    <Form :validation-schema="schema" @submit="onsubmit">
      <div>
        <label for="nombre">Nombre:</label>
        <Field
          v-model="nombre"
          name="nombre"
          type="text"
          id="nombre"
          placeholder="Ingrese el nombre"
        />
        <ErrorMessage name="nombre" />
      </div>

      <div>
        <label for="correo">Correo:</label>
        <Field
          v-model="email"
          name="correo"
          type="email"
          id="correo"
          placeholder="Ingrese el correo"
        />
        <ErrorMessage name="correo" />
      </div>

      <button type="submit">Registrar</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import { schema } from '../schemas/validarSchema'
import { useRegistrar } from '../stores/registrarStore'

// Refs para los datos
const nombre = ref('')
const email = ref('')
const registrar = useRegistrar()

// Manejador de envío
const onsubmit = () => {
  registrar.guardarRegistro(nombre.value, email.value)
}
</script>
