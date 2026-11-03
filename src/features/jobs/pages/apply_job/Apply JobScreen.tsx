import React from 'react';

import Apply JobScreenUI from './Apply JobScreen_UI';
import useApply JobScreen from './Apply JobScreen.hooks';

const Apply JobScreen: React.FC = () => {
  const props = useApply JobScreen();

  return <Apply JobScreenUI {...props} />;
};

export default Apply JobScreen;
