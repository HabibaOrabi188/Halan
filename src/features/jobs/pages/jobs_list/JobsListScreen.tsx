import React from 'react';

import JobsListScreenUI from './JobsListScreen_UI';
import useJobsListScreen from './JobsListScreen.hooks';
import { JobsListScreenProps } from './JobsListScreen.types';

const JobsListScreen: React.FC<JobsListScreenProps> = () => {
  const props = useJobsListScreen();

  return <JobsListScreenUI {...props} />;
};

export default JobsListScreen;
