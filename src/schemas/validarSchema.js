import * as yup from 'yup'

export const schema = yup.object({
  nombre: yup.string().required('El nombre es obligatorio'),
  correo: yup.string().email('Correo inválido').required('El correo es obligatorio'),
})
