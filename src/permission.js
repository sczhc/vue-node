// import router from './router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import { getToken } from '@/helper/auth'

// NProgress.configure({ showSpinner: false })

// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     if (getToken()) {
//         if (to.path == '/login') {
//             next({ path: '/' })
//             NProgress.done()
//         } else {
//             next()
//         }
//     } else {
//         next('/login')
//         NProgress.done()
//     }
// })

// router.afterEach( () => {
//     NProgress.done()
// })