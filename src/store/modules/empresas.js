import { fetchEmpresas } from '../../services/empresaService'; // Importa o serviço

export default {
  namespaced: true,
  state: {
    empresas: [],
    loading: false,
  },
  mutations: {
    setEmpresas(state, empresas) {
      state.empresas = empresas;
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
    updateEmpresa(state, empresaAtualizada) {
      const index = state.empresas.findIndex(emp => emp.empresas_id === empresaAtualizada.empresas_id);
      if (index !== -1) {
        state.empresas.splice(index, 1, empresaAtualizada);
      }
    },
  },
  actions: {
    async fetchEmpresas({ commit }) {
      commit('setLoading', true);
      try {
        const data = await fetchEmpresas(); // Chama o serviço
        commit('setEmpresas', data); // Comita os dados para o estado
      } catch (error) {
        console.error(error.message); // Loga o erro em caso de falha
      } finally {
        commit('setLoading', false); // Finaliza o loading
      }
    },
  },
  getters: {
    empresas: (state) => state.empresas,
    loading: (state) => state.loading,
  },
};