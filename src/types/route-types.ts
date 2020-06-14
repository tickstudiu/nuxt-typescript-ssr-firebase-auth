export const RouteType = {
  HOME: { path: '/' },
  LOGIN: { path: '/login' },
  REGISTER: { path: '/register' },
  PROFILE: { path: '/profile' },
  PROFILE_SETTINGS: { path: '/profile/settings' },
  ACTION: { path: '/auth/action' },
  FORGET_PASSWORD: { path: '/auth/forget-password' },
  RESET_PASSWORD: { path: '/auth/reset-password' },
  CORP: { path: '/crop' },
  IMAGES: { path: '/images' },
  LIGHT_BOX: { path: '/lightbox' },
  TERMS: { path: '/terms' },
  PRIVACY_POLICY: { path: '/privacy-policy' },
}

export enum RouteParameters {
  ACTION_CODE = 'ACTION_CODE',
}

export enum RouteQueryParameters {
  NEXT = 'NEXT',
}
