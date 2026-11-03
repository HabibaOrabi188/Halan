import React from 'react';

import Jobs ListScreenUI from './Jobs ListScreen_UI';
import useJobs ListScreen from './Jobs ListScreen.hooks';

const Jobs ListScreen: React.FC = () => {
  const props = useJobs ListScreen();

  return <Jobs ListScreenUI {...props} />;
};

export default Jobs ListScreen;
