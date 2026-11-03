import React from 'react';

import Service ListScreenUI from './Service ListScreen_UI';
import useService ListScreen from './Service ListScreen.hooks';

const Service ListScreen: React.FC = () => {
  const props = useService ListScreen();

  return <Service ListScreenUI {...props} />;
};

export default Service ListScreen;
