<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
         <v-card-title>
          Editar Empresa
        </v-card-title>
       <v-card-text>
        <edit-empresa
        v-if="empresaEditada"
        :empresa="empresaEditada"
        @cancelar-edicao="fecharDialog"
        @empresa-atualizada="atualizarEmpresaNaLista"
      />
      </v-card-text>
      </v-card>
    </v-dialog>

    <v-text-field
      v-model="filter"
      label="Filtrar empresas"
      clearable
    />
    
    <v-data-table
        :headers="headers"
        :items="filteredEmpresas"
        :loading="loading"
        :items-per-page="5"
        class="elevation-1"
        
    >
      <template #item.bloqueado="{ item }">
        <v-icon :color="item.bloqueado ? 'red' : 'green'" @click="editarEmpresa(item)">
          {{ item.bloqueado ? 'mdi-lock' : 'mdi-lock-open' }}
        </v-icon>
      </template>
      <template #item.data="{ item }">
        {{ formatDate(item.data) }} <!-- Formata a data ao exibir -->
      </template>
      <template #item.validade_licenca="{ item }">
        {{ formatDate(item.validade_licenca) }} <!-- Formata a validade da licença ao exibir -->
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import EditEmpresa from './EditEmpresa.vue'; // Importa o componente de edição

export default {
  components: {
    EditEmpresa,
  },
  setup() {
    const store = useStore();
    const filter = ref('');
    const dialog = ref(false);
    const empresaEditada = ref(null);

    const headers = [
      { title: 'ID', value: 'empresas_id' },
      { title: 'Data', value: 'data' },
      { title: 'CNPJ', value: 'cnpj' },
      { title: 'Razão Social', value: 'razao' },
      { title: 'E-mail', value: 'email' },
      { title: 'Validade Licença', value: 'validade_licenca' },
      { title: 'Bloqueado', value: 'bloqueado' },
    ];

    const empresas = computed(() => store.getters['empresas/empresas']);
    const loading = computed(() => store.getters['empresas/loading']);

    const filteredEmpresas = computed(() => {
      if (!filter.value) {
        return empresas.value;
      }
      const filterLower = filter.value.toLowerCase();
      return empresas.value.filter(emp => {
        return (
          emp.razao.toLowerCase().includes(filterLower) ||
          emp.cnpj.includes(filter.value) || 
          emp.email.toLowerCase().includes(filterLower)
        );
      });
    });

    // Função para formatar a data
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return date.toLocaleDateString('pt-BR', options); // Retorna a data formatada
    };

    const editarEmpresa = (empresa) => {
      empresaEditada.value = empresa;
      dialog.value = true; // Abre o diálogo
    };

    const fecharDialog = () => {
      dialog.value = false;
      empresaEditada.value = null; // Limpa a empresa editada
    };

    const atualizarEmpresaNaLista = (empresaAtualizada) => {
      // Atualiza a empresa na store Vuex
      store.commit('empresas/updateEmpresa', empresaAtualizada);
      fecharDialog(); // Fecha o diálogo
    };

    onMounted(() => {
      store.dispatch('empresas/fetchEmpresas'); // Chama a ação no módulo de empresas
    });

    return { filter, loading, filteredEmpresas, headers, formatDate, dialog, empresaEditada, editarEmpresa, fecharDialog, atualizarEmpresaNaLista };
  },
};
</script>

<style scoped>
/* Adicione seus estilos aqui, caso necessário */
</style>