// src/app/providers/AppProvider.tsx
import React, { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './AuthProvider';

export interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <AuthProvider>{children}</AuthProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
