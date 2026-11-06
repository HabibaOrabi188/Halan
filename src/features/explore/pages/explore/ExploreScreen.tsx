import React from 'react';

import ExploreScreenUI from './ExploreScreen_UI';
import useExploreScreen from './ExploreScreen.hooks';

const ExploreScreen: React.FC = () => {
  const props = useExploreScreen();

  return <ExploreScreenUI {...props} />;
};

export default ExploreScreen;
