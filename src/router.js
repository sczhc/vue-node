import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/helper/auth'
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
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // base: process.env.BASE_URL,
  routes: route
})

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.name == 'login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    console.log(to)
    // next()
    // next({ path: '/login' })
    next('/login')
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router