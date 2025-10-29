import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
import { router } from './router' 

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
  
