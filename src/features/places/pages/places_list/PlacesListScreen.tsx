import React from 'react';

import PlacesListScreenUI from './PlacesListScreen_UI';
import usePlacesListScreen from './PlacesListScreen.hooks';

const PlacesListScreen: React.FC = () => {
  const props = usePlacesListScreen();

  return <PlacesListScreenUI {...props} />;
};

export default PlacesListScreen;
