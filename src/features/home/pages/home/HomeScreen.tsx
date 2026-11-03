import React from 'react';

import HomeScreenUI from './HomeScreen_UI';
import useHomeScreen from './HomeScreen.hooks';

const HomeScreen: React.FC = () => {
  const props = useHomeScreen();

  return <HomeScreenUI {...props} />;
};

export default HomeScreen;
