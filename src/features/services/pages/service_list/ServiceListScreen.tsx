import React from 'react';

import ServiceListScreenUI from './ServiceListScreen_UI';
import useServiceListScreen from './ServiceListScreen.hooks';

const ServiceListScreen: React.FC = () => {
  const props = useServiceListScreen();

  return <ServiceListScreenUI {...props} />;
};

export default ServiceListScreen;
