// src/core/api/endpoints.ts

export const API_BASE_URL = 'https://api.halan.example.com/v1';

export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refreshToken: '/auth/refresh',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
  },
  profile: {
    me: '/profile/me',
    update: '/profile/update',
    settings: '/profile/settings',
    savedItems: '/profile/saved-items',
  },
  home: {
    feed: '/home/feed',
    search: '/home/search',
    banners: '/home/banners',
  },
  explore: {
    Explore: '/explore/Explore',
    search: '/explore/search',
    filters: '/explore/filters',
  },
  jobs: {
    list: '/jobs',
    details: (id: string | number) => `/jobs/${id}`,
    apply: (id: string | number) => `/jobs/${id}/apply`,
    myApplications: '/jobs/my-applications',
  },
  places: {
    list: '/places',
    details: (id: string | number) => `/places/${id}`,
    nearby: '/places/nearby',
  },
  services: {
    list: '/services',
    details: (id: string | number) => `/services/${id}`,
    createRequest: '/services/requests',
    myRequests: '/services/my-requests',
    providerProfile: (id: string | number) => `/services/providers/${id}`,
  },
} as const;
