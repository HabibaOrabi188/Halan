// src/features/splash/pages/splash/SplashScreen.tsx
import React from 'react';

import SplashScreenUI from './SplashScreen_UI';
import useSplashScreen from './SplashScreen.hooks';

const SplashScreen: React.FC = () => {
  const props = useSplashScreen();

  return <SplashScreenUI {...props} />;
};

export default SplashScreen;
