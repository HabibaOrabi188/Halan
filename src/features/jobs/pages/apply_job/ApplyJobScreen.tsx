import React from 'react';

import ApplyJobScreenUI from './ApplyJobScreen_UI';
import useApplyJobScreen from './ApplyJobScreen.hooks';

const ApplyJobScreen: React.FC = () => {
  const props = useApplyJobScreen();

  return <ApplyJobScreenUI {...props} />;
};

export default ApplyJobScreen;
