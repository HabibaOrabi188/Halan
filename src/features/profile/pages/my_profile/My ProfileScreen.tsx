import React from 'react';

import My ProfileScreenUI from './My ProfileScreen_UI';
import useMy ProfileScreen from './My ProfileScreen.hooks';

const My ProfileScreen: React.FC = () => {
  const props = useMy ProfileScreen();

  return <My ProfileScreenUI {...props} />;
};

export default My ProfileScreen;
