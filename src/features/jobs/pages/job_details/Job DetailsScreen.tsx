import React from 'react';

import Job DetailsScreenUI from './Job DetailsScreen_UI';
import useJob DetailsScreen from './Job DetailsScreen.hooks';

const Job DetailsScreen: React.FC = () => {
  const props = useJob DetailsScreen();

  return <Job DetailsScreenUI {...props} />;
};

export default Job DetailsScreen;
