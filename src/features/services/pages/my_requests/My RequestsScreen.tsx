import React from 'react';

import My RequestsScreenUI from './My RequestsScreen_UI';
import useMy RequestsScreen from './My RequestsScreen.hooks';

const My RequestsScreen: React.FC = () => {
  const props = useMy RequestsScreen();

  return <My RequestsScreenUI {...props} />;
};

export default My RequestsScreen;
