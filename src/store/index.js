// src/store/index.js
import { createStore } from 'vuex';
import empresas from './modules/empresas'; // Importa o módulo de empresas

export default createStore({
  modules: {
    empresas, // Registra o módulo de empresas
  },
});