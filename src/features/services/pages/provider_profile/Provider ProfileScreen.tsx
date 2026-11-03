import React from 'react';

import Provider ProfileScreenUI from './Provider ProfileScreen_UI';
import useProvider ProfileScreen from './Provider ProfileScreen.hooks';

const Provider ProfileScreen: React.FC = () => {
  const props = useProvider ProfileScreen();

  return <Provider ProfileScreenUI {...props} />;
};

export default Provider ProfileScreen;
