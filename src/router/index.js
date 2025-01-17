import path from '@/components/constants/pathes.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: path.register, component: () => import('@/views/RegisterPageView.vue') },
    { path: path.feed, component: () => import('@/views/FeedPageView.vue') },
    { path: path.invitationCard, component: () => import('@/views/InvitationPageView.vue') },
    { path: path.auth, component: () => import('@/views/AuthPageView.vue') },
    { path: path.cards, component: () => import('@/views/CardsPageView.vue') },
    { path: path.cardAdd, component: () => import('@/views/WiCardAddView.vue') },
    {
      path: `${path.user}/:uid`,
      component: () => import('@/views/UserPageView.vue'),
      name: 'UserProfile',
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `${path.card}/:uid`,
      component: () => import('@/views/CardDetailsPageView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `${path.invitationCard}/:uid`,
      component: () => import('@/views/InvitationPageShare.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `${path.settings}/:uid`,
      component: () => import('@/views/UserPageSettingsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    { path: path.main, component: () => import('@/views/FeedPageView.vue') },
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
