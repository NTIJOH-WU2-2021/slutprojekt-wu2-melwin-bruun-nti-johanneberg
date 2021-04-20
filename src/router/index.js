import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChuckNorisJokes from '../views/chuck_noris.vue'
import TrumpQuotes from '../views/trump.vue'
import AdviceForYou from '../views/advice.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Chuck_Noris_Jokes',
    name: 'chuck',
    component: ChuckNorisJokes,
  },
  {
    path: "/TrumpQuotes",
    name: "trump",
    component: TrumpQuotes,
 },
 {
  path: "/Advice_For_you",
  name: "advice",
  component: AdviceForYou
 },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
