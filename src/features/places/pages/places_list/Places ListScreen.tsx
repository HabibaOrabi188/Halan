import React from 'react';

import Places ListScreenUI from './Places ListScreen_UI';
import usePlaces ListScreen from './Places ListScreen.hooks';

const Places ListScreen: React.FC = () => {
  const props = usePlaces ListScreen();

  return <Places ListScreenUI {...props} />;
};

export default Places ListScreen;
