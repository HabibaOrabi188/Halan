
import {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';

import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../../app/navigation/types';
import { storage } from '../../../../../core/storage';
import { images } from '../../../../../core';

import {
  OnboardingScreenProps,
  OnboardingSlideItem,
} from './OnboardingScreen.types';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

const onboardingSlidesData: OnboardingSlideItem[] = [
  {
    id: 'slide-places',
    title: 'اكتشف كل اللي حواليك',
    description:
      'اكتشف الأماكن والخدمات القريبة منك بسهولة، وتعرّف على الخيارات المتاحة في منطقتك، علشان تلاقي اللي بتدور عليه بسرعة وتوفّر وقتك ومجهودك في كل خطوة.',
    img: images.onboarding2,
  },
  {
    id: 'slide-services',
    title: 'كل خدمة.. حالًا',
    description:
      'دور على مقدم الخدمة اللي يناسب احتياجاتك، واكتشف الخدمات المتاحة حواليك، وقارن بين اختياراتك، وتواصل مع مقدم الخدمة بسهولة علشان توصل للحل المناسب ليك.',
    img: images.onboarding3,
  },
  {
    id: 'slide-jobs',
    title: 'فرصتك الجاية هنا',
    description:
      'اكتشف فرص عمل جديدة تناسب مهاراتك وخبراتك، وتعرّف على أصحاب الأعمال في منطقتك، وقدّم على الفرص اللي تناسب طموحاتك، وخد أول خطوة ناحية مستقبلك المهني مع حالًا.',
    img: images.onboarding1,
  },
];

export const useOnboardingScreen = (): OnboardingScreenProps => {
  const navigation = useNavigation<NavigationProp>();
  const { width } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const flatListRef = useRef<FlatList<OnboardingSlideItem>>(null);
  const isNavigatingRef = useRef(false);

  const completeOnboardingAndNavigate = useCallback(
    async (targetScreen: 'Login' | 'Register' = 'Login') => {
      if (isNavigatingRef.current) {
        return;
      }

      isNavigatingRef.current = true;

      try {
        await storage.setHasCompletedOnboarding(true);
      } catch (error) {
        console.warn(
          '[Onboarding] Failed to set onboarding completed flag',
          error,
        );
      }

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Auth',
            params: { screen: targetScreen },
          },
        ],
      });
    },
    [navigation],
  );

  // Auto slide and navigate after the last slide
  useEffect(() => {
    if (isInteracting || isNavigatingRef.current) {
      return;
    }

    const isLastSlide =
      currentIndex === onboardingSlidesData.length - 1;

    const timer = setTimeout(() => {
      if (isLastSlide) {
        void completeOnboardingAndNavigate('Login');
        return;
      }

      const nextIndex = currentIndex + 1;

      flatListRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });

      // Update pagination immediately
      setCurrentIndex(nextIndex);
    }, isLastSlide ? 3000 : 3500);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    width,
    isInteracting,
    completeOnboardingAndNavigate,
  ]);

  

  const onScrollBeginDrag = useCallback(() => {
    setIsInteracting(true);
  }, []);

  const onSkipPress = useCallback(() => {
    void completeOnboardingAndNavigate('Login');
  }, [completeOnboardingAndNavigate]);

  const onGetStartedPress = useCallback(() => {
    void completeOnboardingAndNavigate('Register');
  }, [completeOnboardingAndNavigate]);

  return {
    slides: onboardingSlidesData,
    currentIndex,
    onScrollBeginDrag,
    onSkipPress,
    onGetStartedPress,
    flatListRef,
  };
};

export default useOnboardingScreen;
