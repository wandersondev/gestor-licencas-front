<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Usuário:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup(props, { emit }) {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter(); // Usando useRouter

    const handleLogin = () => {
      // Simulação de uma chamada de API para login
      if (username.value === 'admin' && password.value === 'senha') {
        localStorage.setItem('isAuthenticated', 'true'); // Armazenar estado no localStorage
        emit('authenticated', true); // Emitindo um evento com o estado de autenticação
        router.push('/home'); // Redirecionando para a página home
      } else {
        errorMessage.value = 'Usuário ou senha incorretos.';
      }
    };

    return { username, password, errorMessage, handleLogin };
  },
};
</script>

<style scoped>
/* Estilos do componente aqui */
</style>