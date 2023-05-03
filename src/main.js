import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 4 - Importare il Router
import { router } from './router'

// 5 - Montare il Router
createApp(App).use(router).mount('#app')
