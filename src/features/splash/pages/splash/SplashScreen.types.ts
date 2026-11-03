// src/features/splash/pages/splash/SplashScreen.types.ts
import { Animated } from 'react-native';

export interface SplashScreenProps {
  logoScale: Animated.Value;
  logoOpacity: Animated.Value;
  contentOpacity: Animated.Value;
  contentTranslateY: Animated.Value;
  indicatorOpacity: Animated.Value;
}
