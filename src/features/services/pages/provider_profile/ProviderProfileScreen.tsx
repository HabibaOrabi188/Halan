import React from 'react';

import ProviderProfileScreenUI from './ProviderProfileScreen_UI';
import useProviderProfileScreen from './ProviderProfileScreen.hooks';

const ProviderProfileScreen: React.FC = () => {
  const props = useProviderProfileScreen();

  return <ProviderProfileScreenUI {...props} />;
};

export default ProviderProfileScreen;
