import React from 'react';

import EditProfileScreenUI from './EditProfileScreen_UI';
import useEditProfileScreen from './EditProfileScreen.hooks';

const EditProfileScreen: React.FC = () => {
  const props = useEditProfileScreen();

  return <EditProfileScreenUI {...props} />;
};

export default EditProfileScreen;
