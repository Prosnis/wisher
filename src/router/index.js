import path from '@/components/constants/pathes.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: path.register, component: () => import('@/views/RegisterView.vue') },
    { path: path.feed, component: () => import('@/views/FeedView.vue') },
    { path: path.invitationCard, component: () => import('@/views/InvitationСard.vue') },
    { path: path.auth, component: () => import('@/views/AuthView.vue') },
    // { path: '/wisher/modal',component: () => import('@/services/EditUserPage.vue')},
    {
      path: `${path.user}/:uid`,
      component: () => import('@/views/UserPage.vue'),
      name: 'UserProfile',
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: `${path.card}/:uid`,
      component: () => import('@/views/WishCardPreview.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: `${path.invitations}/:uid`,
      component: () => import('@/views/UserInvitationsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    { path: path.main, component: () => import('@/views/RegisterView.vue') },
  ],
})

// Асинхронная проверка аутентификации перед переходом на защищенные маршруты
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const auth = getAuth()

  // Проверка состояния аутентификации через onAuthStateChanged
  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next(path.auth) // Если пользователь не аутентифицирован, перенаправляем на страницу авторизации
    }
    else {
      next() // Если пользователь аутентифицирован или маршрут не требует аутентификации
    }
  })
})

export default router
