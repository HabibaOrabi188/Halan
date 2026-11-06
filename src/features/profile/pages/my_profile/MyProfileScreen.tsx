import React from 'react';

import MyProfileScreenUI from './MyProfileScreen_UI';
import useMyProfileScreen from './MyProfileScreen.hooks';

const MyProfileScreen: React.FC = () => {
  const props = useMyProfileScreen();

  return <MyProfileScreenUI {...props} />;
};

export default MyProfileScreen;
