// src/services/axiosInstance.js
import axios from 'axios';

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api', // Define a URL base da API
});

// Opcional: Configura interceptores, se necessário
api.interceptors.request.use(config => {
  // Aqui você pode adicionar cabeçalhos ou modificar a configuração da requisição
  return config;
}, error => {
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  // Aqui você pode processar a resposta antes de retorná-la
  return response;
}, error => {
  // Aqui você pode tratar os erros de resposta
  return Promise.reject(error);
});

export default api; // Exporta a instância para uso em outros arquivos