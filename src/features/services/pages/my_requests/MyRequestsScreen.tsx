import React from 'react';

import MyRequestsScreenUI from './MyRequestsScreen_UI';
import useMyRequestsScreen from './MyRequestsScreen.hooks';

const MyRequestsScreen: React.FC = () => {
  const props = useMyRequestsScreen();

  return <MyRequestsScreenUI {...props} />;
};

export default MyRequestsScreen;
