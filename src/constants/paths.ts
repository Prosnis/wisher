export const PATHS = {
  AUTH: {
    REGISTER: '/register',
    LOGIN: '/auth',
  },
  USER: {
    PROFILE: '/user',
    SETTINGS: '/settings',
  },
  CARDS: {
    MAIN: '/cards',
    ADD: '/createCard',
    SINGLE: '/card',
    INVITATION_CREATE: '/iCard',
  },
  INVITATIONS_TO_SHARE: '/invitations',
  MAIN: '/',
} as const
