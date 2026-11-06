import React from 'react';

import JobDetailsScreenUI from './JobDetailsScreen_UI';
import useJobDetailsScreen from './JobDetailsScreen.hooks';

const JobDetailsScreen: React.FC = () => {
  const props = useJobDetailsScreen();

  return <JobDetailsScreenUI {...props} />;
};

export default JobDetailsScreen;
