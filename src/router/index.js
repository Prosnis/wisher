import { PATHS } from '@/constants/paths'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: PATHS.AUTH.REGISTER, component: () => import('@/views/RegisterPageView.vue') },
    { path: PATHS.MAIN, component: () => import('@/views/MainPageView.vue') },
    { path: PATHS.CARDS.INVITATION_CREATE, component: () => import('@/views/InvitationPageView.vue') },
    { path: PATHS.AUTH.LOGIN, component: () => import('@/views/AuthPageView.vue') },
    { path: PATHS.CARDS.MAIN, component: () => import('@/views/CardsPageView.vue') },
    { path: PATHS.CARDS.ADD, component: () => import('@/views/WiCardAddView.vue') },
    {
      path: `${PATHS.USER.PROFILE}/:uid`,
      component: () => import('@/views/UserPageView2.vue'),
      name: 'UserProfile',
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `/wishes/:uid`,
      component: () => import('@/views/UserWishesView.vue'),
      name: 'UserWishes',
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `${PATHS.CARDS.SINGLE}/:uid`,
      component: () => import('@/views/CardDetailsPageView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `${PATHS.CARDS.INVITATION_CREATE}/:uid`,
      component: () => import('@/views/InvitationPageShare.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: `${PATHS.USER.SETTINGS}/:uid`,
      component: () => import('@/views/UserPageSettingsView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    { path: PATHS.MAIN, component: () => import('@/views/MainPageView.vue') },
  ],
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next(PATHS.AUTH.LOGIN)
    }
    else {
      next()
    }
  })
})

export default router
