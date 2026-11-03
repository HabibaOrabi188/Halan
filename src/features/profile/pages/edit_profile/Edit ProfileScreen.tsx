import React from 'react';

import Edit ProfileScreenUI from './Edit ProfileScreen_UI';
import useEdit ProfileScreen from './Edit ProfileScreen.hooks';

const Edit ProfileScreen: React.FC = () => {
  const props = useEdit ProfileScreen();

  return <Edit ProfileScreenUI {...props} />;
};

export default Edit ProfileScreen;
