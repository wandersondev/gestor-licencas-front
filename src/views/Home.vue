<!-- src/views/Home.vue -->
<template>
  <div class="home-view">
    <h1>Página Inicial</h1>
    
    <HomeComponent />
     <router-link to="/ListarEmpresas">Ir para Listar Empresas</router-link> <!-- Link para ListarEmpresas -->
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'; // Importando o componente

export default {
  name: 'Home',
  components: {
    HomeComponent, // Registrando o componente
  },
};
</script>

<style scoped>
.home-view {
  text-align: center;
  margin: 20px;
}
</style>