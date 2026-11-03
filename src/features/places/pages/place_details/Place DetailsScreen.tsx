import React from 'react';

import Place DetailsScreenUI from './Place DetailsScreen_UI';
import usePlace DetailsScreen from './Place DetailsScreen.hooks';

const Place DetailsScreen: React.FC = () => {
  const props = usePlace DetailsScreen();

  return <Place DetailsScreenUI {...props} />;
};

export default Place DetailsScreen;
