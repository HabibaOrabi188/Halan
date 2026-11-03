// src/app/providers/AuthProvider.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { User, AuthTokens, AuthState } from '../../core/types';
import { storage } from '../../core/storage';

export interface AuthContextValue extends AuthState {
  login: (tokens: AuthTokens, user: User) => Promise<void>;
  register: (tokens: AuthTokens, user: User) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tokens, setTokens] = useState<AuthTokens | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore stored session on mount
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const [savedTokens, savedUser] = await Promise.all([
          storage.getTokens(),
          storage.getUser(),
        ]);

        if (savedTokens && savedUser) {
          setTokens(savedTokens);
          setUser(savedUser);
        }
      } catch (err) {
        console.warn('[AuthProvider] Failed to restore auth session', err);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = useCallback(async (newTokens: AuthTokens, newUser: User) => {
    setIsLoading(true);
    try {
      await Promise.all([
        storage.setTokens(newTokens),
        storage.setUser(newUser),
      ]);
      setTokens(newTokens);
      setUser(newUser);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (newTokens: AuthTokens, newUser: User) => {
    await login(newTokens, newUser);
  }, [login]);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await Promise.all([
        storage.clearTokens(),
        storage.clearUser(),
      ]);
      setTokens(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateUser = useCallback(async (partial: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...partial };
    await storage.setUser(updated);
    setUser(updated);
  }, [user]);

  const value: AuthContextValue = {
    user,
    tokens,
    isAuthenticated: Boolean(tokens?.accessToken),
    isLoading,
    login,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
