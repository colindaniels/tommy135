import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import EPKView from '../views/EPKView.vue'
import NotFound from '../components/NotFound.vue'

const base_path = process.env.VUE_APP_BASE_PATH

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: `/${base_path}`,
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: `/${base_path}/game`,
      name: 'game',
      component: GameView,
      meta: {
        title: 'Game'
      }
    },
    {
      path: `/epk`,
      name: 'epk',
      component: EPKView,
      meta: {
        title: 'epk'
      }
    },


    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
      meta: {
        title: 'Page Not Found'
      }
    }
  ]
})




export default router
