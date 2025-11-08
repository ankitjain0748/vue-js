// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// ✅ Correct import
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')