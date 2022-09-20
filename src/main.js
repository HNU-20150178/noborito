import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import BootstrapVue3 from 'bootstrap-vue-3'


createApp(App).use(BootstrapVue3).use(router).mount('#app')
