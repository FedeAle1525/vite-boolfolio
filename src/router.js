// 1 - Importare il Router
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

// 2 - Creazione del Router
const router = createRouter({

  history: createWebHistory(),

  routes: [

    // Registrazione Rotta 'home' che monta Componente 'Home'
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

// 3 - Esportazione Router
export { router }