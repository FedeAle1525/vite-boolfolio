// 1 - Importare il Router
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import PortfolioShow from './pages/PortfolioShow.vue'
import About from './pages/About.vue'
import Page404 from './pages/Page404.vue'

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
      path: '/projects/:slug',
      name: 'portfolio.show',
      component: PortfolioShow,
      // Indica che le Parametro della Rotta verrà usato come Proprietà del componente
      props: true
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/error404',
      name: 'error404',
      component: Page404
    }


  ]
})

// 3 - Esportazione Router
export { router }