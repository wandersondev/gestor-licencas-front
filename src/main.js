// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { createPinia } from 'pinia'; // Importando o Pinia
import store from './store'; // Importando o Vuex

let isAuthenticated = false; // Estado de autenticação global
const app = createApp(App);
// Adicionando a propriedade de autenticação ao aplicativo
// app.config.globalProperties.$auth = {
//   get isAuthenticated() {
//     return isAuthenticated;
//   },
//   set isAuthenticated(value) {
//     isAuthenticated = value;
//   },
// };
const pinia = createPinia(); // Criar a instância do Pinia

app.use(vuetify);
app.use(router);
app.use(pinia); // Usar o Pinia
app.use(store); // Usar o Vuex
app.mount('#app');