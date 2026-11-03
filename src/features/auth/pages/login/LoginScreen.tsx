import React from 'react';

import LoginScreenUI from './LoginScreen_UI';
import useLoginScreen from './LoginScreen.hooks';

const LoginScreen: React.FC = () => {
  const props = useLoginScreen();

  return <LoginScreenUI {...props} />;
};

export default LoginScreen;
