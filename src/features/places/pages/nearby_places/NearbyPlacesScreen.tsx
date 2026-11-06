import React from 'react';

import NearbyPlacesScreenUI from './NearbyPlacesScreen_UI';
import useNearbyPlacesScreen from './NearbyPlacesScreen.hooks';

const NearbyPlacesScreen: React.FC = () => {
  const props = useNearbyPlacesScreen();

  return <NearbyPlacesScreenUI {...props} />;
};

export default NearbyPlacesScreen;
