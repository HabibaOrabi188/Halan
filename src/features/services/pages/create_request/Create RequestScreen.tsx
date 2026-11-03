import React from 'react';

import Create RequestScreenUI from './Create RequestScreen_UI';
import useCreate RequestScreen from './Create RequestScreen.hooks';

const Create RequestScreen: React.FC = () => {
  const props = useCreate RequestScreen();

  return <Create RequestScreenUI {...props} />;
};

export default Create RequestScreen;
