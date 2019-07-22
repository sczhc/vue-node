import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
const route = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue')
  }
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: route
})

export default router