import React from 'react';

import RegisterScreenUI from './RegisterScreen_UI';
import useRegisterScreen from './RegisterScreen.hooks';

const RegisterScreen: React.FC = () => {
  const props = useRegisterScreen();

  return <RegisterScreenUI {...props} />;
};

export default RegisterScreen;
