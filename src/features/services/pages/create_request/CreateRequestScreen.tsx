import React from 'react';

import CreateRequestScreenUI from './CreateRequestScreen_UI';
import useCreateRequestScreen from './CreateRequestScreen.hooks';

const CreateRequestScreen: React.FC = () => {
  const props = useCreateRequestScreen();

  return <CreateRequestScreenUI {...props} />;
};

export default CreateRequestScreen;
