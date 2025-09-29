<template>
  <v-app>
    <v-container>
      <h1>Gerenciamento de Empresas</h1>
      <ListarEmpresas @edit-empresa="editarEmpresa" />
      <EditEmpresa v-if="empresaSelecionada" :empresa="empresaSelecionada" @cancelar-edicao="empresaSelecionada = null" />
    </v-container>
  </v-app>
</template>

<script>
import ListarEmpresas from '../components/ListarEmpresas.vue';
import EditEmpresa from '../components/EditEmpresa.vue';

export default {
  components: {
    ListarEmpresas,
    EditEmpresa,
  },
  data() {
    return {
      empresaSelecionada: null, // Empresa que está sendo editada
    };
  },
  methods: {
    editarEmpresa(empresa) {
      this.empresaSelecionada = empresa; // Define a empresa selecionada para edição
    },
  }
};
</script>

<style>
/* Adicione qualquer estilo global aqui se necessário */
</style>