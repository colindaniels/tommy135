import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



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
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import('../components/NotFound.vue'),
      meta: {
        title: 'Page Not Found'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  ]
})




export default router
