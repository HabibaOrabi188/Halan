import React from 'react';

import PlaceDetailsScreenUI from './PlaceDetailsScreen_UI';
import usePlaceDetailsScreen from './PlaceDetailsScreen.hooks';

const PlaceDetailsScreen: React.FC = () => {
  const props = usePlaceDetailsScreen();

  return <PlaceDetailsScreenUI {...props} />;
};

export default PlaceDetailsScreen;
