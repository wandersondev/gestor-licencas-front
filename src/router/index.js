// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue'; // ajuste o caminho conforme necessário
import Home from '@/views/Home.vue'; // Importa a view Home, se necessário
import ListarEmpresas from '@/views/ListarEmpresas.vue'; // Importa a view ListarEmpresas


const routes = [
  // {
  //     path: '/',
  //     name: 'Login',
  //     component: Login,
  //   },
    {
      path: '/Home',
      name: 'Home',
      component: Home, // Usando a Home.vue como página
     // meta: { requiresAuth: true },
    },
    {
      path: '/ListarEmpresas',
      name: 'ListarEmpresas',
      component: ListarEmpresas,
    //  meta: { requiresAuth: true },
   }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;