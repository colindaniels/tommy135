import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
      meta: {
        title: 'Game'
      }
    },


    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import('../components/NotFound.vue'),
      meta: {
        title: 'Page Not Found'
      }
    }
  ]
})




export default router
