import React from 'react';

import MyApplicationsScreenUI from './MyApplicationsScreen_UI';
import useMyApplicationsScreen from './MyApplicationsScreen.hooks';

const MyApplicationsScreen: React.FC = () => {
  const props = useMyApplicationsScreen();

  return <MyApplicationsScreenUI {...props} />;
};

export default MyApplicationsScreen;
