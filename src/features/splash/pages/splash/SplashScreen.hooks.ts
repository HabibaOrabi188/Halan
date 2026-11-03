// src/features/splash/pages/splash/SplashScreen.hooks.ts
import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../app/navigation/types';
import { storage } from '../../../../core/storage';
import { SplashScreenProps } from './SplashScreen.types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SPLASH_DURATION_MS = 2200;

export const useSplashScreen = (): SplashScreenProps => {
  const navigation = useNavigation<NavigationProp>();

  const logoScale = useRef(new Animated.Value(0.7)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const contentTranslateY = useRef(new Animated.Value(24)).current;
  const indicatorOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Entrance animation sequence
    Animated.sequence([
      // Step A: Logo pop and fade in
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 6,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      // Step B: Text and badge reveal
      Animated.parallel([
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.out(Easing.quad),
        }),
        Animated.timing(contentTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.out(Easing.quad),
        }),
        Animated.timing(indicatorOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // 2. Determine target route & navigate
    let isMounted = true;

    const checkStateAndNavigate = async () => {
      const startTime = Date.now();

      let targetRoute: 'Onboarding' | 'Auth' | 'Main' = 'Onboarding';

      try {
        const [hasCompletedOnboarding, tokens] = await Promise.all([
          storage.getHasCompletedOnboarding(),
          storage.getTokens(),
        ]);

        if (!hasCompletedOnboarding) {
          targetRoute = 'Onboarding';
        } else if (tokens?.accessToken) {
          targetRoute = 'Main';
        } else {
          targetRoute = 'Auth';
        }
      } catch (err) {
        console.warn('[SplashScreen] Error resolving initial route, falling back to Onboarding', err);
        targetRoute = 'Onboarding';
      }

      // Ensure minimum splash time for brand exposure
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, SPLASH_DURATION_MS - elapsedTime);

      setTimeout(() => {
        if (!isMounted) return;

        navigation.reset({
          index: 0,
          routes: [{ name: targetRoute }],
        });
      }, remainingTime);
    };

    checkStateAndNavigate();

    return () => {
      isMounted = false;
    };
  }, [
    navigation,
    logoOpacity,
    logoScale,
    contentOpacity,
    contentTranslateY,
    indicatorOpacity,
  ]);

  return {
    logoScale,
    logoOpacity,
    contentOpacity,
    contentTranslateY,
    indicatorOpacity,
  };
};

export default useSplashScreen;
