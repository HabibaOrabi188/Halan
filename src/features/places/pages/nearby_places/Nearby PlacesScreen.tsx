import React from 'react';

import Nearby PlacesScreenUI from './Nearby PlacesScreen_UI';
import useNearby PlacesScreen from './Nearby PlacesScreen.hooks';

const Nearby PlacesScreen: React.FC = () => {
  const props = useNearby PlacesScreen();

  return <Nearby PlacesScreenUI {...props} />;
};

export default Nearby PlacesScreen;
