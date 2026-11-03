import React from 'react';

import Saved ItemsScreenUI from './Saved ItemsScreen_UI';
import useSaved ItemsScreen from './Saved ItemsScreen.hooks';

const Saved ItemsScreen: React.FC = () => {
  const props = useSaved ItemsScreen();

  return <Saved ItemsScreenUI {...props} />;
};

export default Saved ItemsScreen;
