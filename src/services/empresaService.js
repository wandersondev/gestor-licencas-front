// src/services/empresaService.js
import api from './axiosInstance'; // Importa a instância do Axios

export const fetchEmpresas = async () => {
  try {
    const response = await api.get('/empresas'); // Faz a requisição GET
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    throw new Error(`Erro ao buscar empresas: ${error.response ? error.response.data : error.message}`);
  }
};

export const updateEmpresa = async (id, dados) => {
  try {
    const response = await api.put(`/empresas/${id}`, dados);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao atualizar empresa: ${error.response ? error.response.data : error.message}`);
  }
};