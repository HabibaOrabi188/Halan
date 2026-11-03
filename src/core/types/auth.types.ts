// src/core/types/auth.types.ts

export interface User {
  id: string;
  name: string;
  email?: string;
  phone: string;
  avatarUrl?: string;
  role?: 'customer' | 'provider' | 'admin';
  createdAt?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
