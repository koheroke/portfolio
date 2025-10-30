import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify' 

createApp(App)
  .use(vuetify)
  .mount('#app')
  
