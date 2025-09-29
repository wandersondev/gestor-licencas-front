<template>
  <v-container>
    <v-form v-if="empresa">
      <v-text-field
        v-model="empresa.ntermais"
        label="Número de Terminais"
        type="number"
        required
      />
      <v-text-field
        v-model="validade_licenca"
        label="Validade da Licença"
        type="date"
        required
      />
      <v-checkbox
        v-model="isBloqueado" 
        label="Bloquear Sistema"
      />

      <v-btn @click="saveEmpresa">Gravar</v-btn>
      <v-btn @click="$emit('cancelar-edicao')">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ref, watch } from 'vue';
import { updateEmpresa } from '@/services/empresaService'; // Importando o serviço

export default {
  props: {
    empresa: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const validade_licenca = ref('');
    const isBloqueado = ref(false);

    // Atualizar os valores locais quando a prop 'empresa' mudar
    watch(() => props.empresa, (newValue) => {
      if (newValue) {
        validade_licenca.value = newValue.validade_licenca.split('T')[0];
        isBloqueado.value = !!newValue.bloqueado;
      }
    }, { immediate: true });

    const saveEmpresa = async () => {
      try {
        const empresaId = props.empresa.empresas_id;

        if (!empresaId) {
          throw new Error('O ID da empresa não é válido.');
        }

        const dadosAtualizacao = {
          ntermais: props.empresa.ntermais,
          validade_licenca: validade_licenca.value,
          bloqueado: isBloqueado.value ? 1 : 0,
        };

        const updatedEmpresa = await updateEmpresa(empresaId, dadosAtualizacao); // Chama o serviço

        // Emitir evento com a empresa atualizada
        emit('empresa-atualizada', updatedEmpresa);
        emit('cancelar-edicao'); // Fecha o formulário de edição
      } catch (error) {
        console.error('Erro ao salvar empresa:', error.message);
      }
    };

    return {
      validade_licenca,
      isBloqueado,
      saveEmpresa,
    };
  },
};
</script>