// 1 - Importare il Router
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import About from './pages/About.vue'

// 2 - Creazione del Router
const router = createRouter({

  history: createWebHistory(),

  routes: [

    // Registrazione Rotta 'home' che monta Componente 'Home'
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/portfolio',
      name: 'portfolio.index',
      component: Portfolio
    },

    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

// 3 - Esportazione Router
export { router }