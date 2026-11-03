import React from 'react';

import SettingsScreenUI from './SettingsScreen_UI';
import useSettingsScreen from './SettingsScreen.hooks';

const SettingsScreen: React.FC = () => {
  const props = useSettingsScreen();

  return <SettingsScreenUI {...props} />;
};

export default SettingsScreen;
