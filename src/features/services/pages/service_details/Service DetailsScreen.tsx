import React from 'react';

import Service DetailsScreenUI from './Service DetailsScreen_UI';
import useService DetailsScreen from './Service DetailsScreen.hooks';

const Service DetailsScreen: React.FC = () => {
  const props = useService DetailsScreen();

  return <Service DetailsScreenUI {...props} />;
};

export default Service DetailsScreen;
