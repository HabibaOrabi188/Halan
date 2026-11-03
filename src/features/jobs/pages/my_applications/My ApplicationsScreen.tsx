import React from 'react';

import My ApplicationsScreenUI from './My ApplicationsScreen_UI';
import useMy ApplicationsScreen from './My ApplicationsScreen.hooks';

const My ApplicationsScreen: React.FC = () => {
  const props = useMy ApplicationsScreen();

  return <My ApplicationsScreenUI {...props} />;
};

export default My ApplicationsScreen;
