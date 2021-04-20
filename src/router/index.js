import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import chuck_noris from '../views/chuck_noris.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Chuck_Noris_Jokes',
    name: 'Chuck_Noris_Jokes',
    component: Chuck_Noris_Jokes,
  },
  {
    path: "/Trupms_quotes",
    name: "Trupms_quotes",
    component: Trupms_quotes,
 },
 {
  path: "/Advice_For_you",
  name: "Advice_For_you",
  component: Advice_For_you
 },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
