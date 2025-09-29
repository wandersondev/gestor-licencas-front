<!-- src/components/HomeComponent.vue -->
<template>
  <div class="home-component">
    <h1>Bem-vindo à Homepage!</h1>
    <p>Este é um componente reutilizável dentro da Home.vue.</p>
     <button @click="logout">Sair</button> <!-- Botão de Logout -->
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
   setup() {
    const router = useRouter();

    const logout = () => {
      localStorage.removeItem('isAuthenticated'); // Remove autenticacao do localStorage
      router.push('/'); // Redireciona para a tela de login
    };

    return { logout };
  },
};
</script>

<style scoped>
.home-component {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 20px;
}
</style>