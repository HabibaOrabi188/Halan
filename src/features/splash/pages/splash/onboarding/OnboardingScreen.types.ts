// src/features/onboarding/pages/onboarding/OnboardingScreen.types.ts
import {
  ImageSourcePropType,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

export interface OnboardingSlideItem {
  id: string;
  title: string;
  description: string;
  img: ImageSourcePropType;
}

export interface OnboardingScreenProps {
  slides: OnboardingSlideItem[];
  currentIndex: number;
  onScrollBeginDrag?: () => void;
  onSkipPress: () => void;
  onGetStartedPress: () => void;
  flatListRef: React.RefObject<any>;
}

