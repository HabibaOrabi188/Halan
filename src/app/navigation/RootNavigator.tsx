// src/app/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import { SplashScreen } from '../../features/splash';
import { AuthNavigator } from './AuthNavigator';
import HomeScreen from '../../features/home/pages/home';
import { colors } from '../../theme';
import OnboardingScreen from '../../features/splash/pages/splash/onboarding';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'fade',
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Main"
        component={HomeScreen as any}
        options={{ animation: 'fade' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
