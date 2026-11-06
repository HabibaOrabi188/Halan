import React from 'react';

import ServiceDetailsScreenUI from './ServiceDetailsScreen_UI';
import useServiceDetailsScreen from './ServiceDetailsScreen.hooks';

const ServiceDetailsScreen: React.FC = () => {
  const props = useServiceDetailsScreen();

  return <ServiceDetailsScreenUI {...props} />;
};

export default ServiceDetailsScreen;
