// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Importando Material Design Icons

export default createVuetify({

  components,
  directives,
  icons: {
       defaultSet: 'mdi', // Define o ícone padrão como Material Design Icons
    },
});