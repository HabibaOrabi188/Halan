// src/core/constants/app.constants.ts
export const APP_CONFIG = {
  APP_NAME: 'Halan',
  DEFAULT_LOCALE: 'ar',
  FALLBACK_LOCALE: 'en',
  API_TIMEOUT_MS: 15000,
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
} as const;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: '@halan_access_token',
  REFRESH_TOKEN: '@halan_refresh_token',
  USER_DATA: '@halan_user_data',
  THEME_MODE: '@halan_theme_mode',
  APP_LANGUAGE: '@halan_app_language',
  ONBOARDING_COMPLETED: '@halan_onboarding_completed',
} as const;
