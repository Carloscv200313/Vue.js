import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../components/MiContador.vue'),
    },
    {
      path: '/lista',
      name: 'Lista de tareas',
      component: () => import('../components/ListaDeTareas.vue'),
    },
    {
      path: '/registro',
      name: 'Formulario',
      component: () => import('../components/RegistrarUsuario.vue'),
    },
  ],
})

export default router
