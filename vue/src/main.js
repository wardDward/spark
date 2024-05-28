import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

axios.defaults.baseURL = 'http://api.spark.test'
axios.defaults.withCredentials = true

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.mount('#app')
