// src/stores/empresaStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEmpresaStore = defineStore('empresa', () => {
  const empresas = ref([]);
  const loading = ref(false);

  const fetchEmpresas = async () => {
    loading.value = true;
    try {
      const response = await fetch('/api/empresas');
      const data = await response.json();
      empresas.value = data;
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
    } finally {
      loading.value = false;
    }
  };

  return { empresas, loading, fetchEmpresas };
});