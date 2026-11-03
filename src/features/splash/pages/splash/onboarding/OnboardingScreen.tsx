// src/features/onboarding/pages/onboarding/OnboardingScreen.tsx
import React from 'react';

import OnboardingScreenUI from './OnboardingScreen_UI';
import useOnboardingScreen from './OnboardingScreen.hooks';

const OnboardingScreen: React.FC = () => {
  const props = useOnboardingScreen();

  return <OnboardingScreenUI {...props} />;
};

export default OnboardingScreen;
