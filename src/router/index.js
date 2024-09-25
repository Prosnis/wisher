import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: () => import('../views/RegisterView.vue')},
    { path: '/auth', component: () => import('../views/AuthView.vue')},
    { path: '/user', component: () => import('../views/UserPage.vue')},
    { path: '/', component: () => import('../views/FeedView.vue'),
      meta: {
        requiresAuth: true
      }

    },
  ]
})

// router.beforeEach((to, from, next)=> {
//   if(to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getAuth().currentUser) {
//       next()
//     } else {
//       alert('нет доступа')
//       next('/')
//     }
//   } else {
//     next()
//   }
// })

export default router
