export const PATHS = {
  AUTH: {
    REGISTER: '/register',
    LOGIN: '/auth',
  },
  USER: {
    PROFILE: '/user',
    SETTINGS: '/settings',
    WISHES: '/wishes',
    FRIENDS: '/friends',
    GIFTS: '/gifts'
  },
  CARDS: {
    MAIN: '/cards',
    ADD: '/createCard',
    SINGLE: '/card',
    INVITATION_CREATE: '/iCard',
  },
  INVITATIONS_TO_SHARE: '/invitations',
  EXTENSION_PROMO: '/extension',
  MAIN: '/',
} as const
