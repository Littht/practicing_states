import { createRouter, createWebHistory } from 'vue-router'
import FirstMethodView from '../views/FirstMethodView.vue'
import HomeView from '../views/HomeView.vue'
import MapStateView from '../views/MapStateView.vue'

const routes = [
  {
    path:"/",
    name:"home",
    component:HomeView
  },
  {
    path:"/first",
    name:"firstMethod",
    component:FirstMethodView
  },
  {
    path:"/second",
    name:"mapState",
    component:MapStateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
