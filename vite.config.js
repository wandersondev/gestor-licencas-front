import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify'; // Importando o plugin Vuetify
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Adicionando o plugin do Vuetify
  ], 
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
    server: {
    port: 8080, // Porta do servidor de desenvolvimento

    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});