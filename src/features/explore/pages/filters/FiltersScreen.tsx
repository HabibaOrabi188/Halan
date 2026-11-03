import React from 'react';

import FiltersScreenUI from './FiltersScreen_UI';
import useFiltersScreen from './FiltersScreen.hooks';

const FiltersScreen: React.FC = () => {
  const props = useFiltersScreen();

  return <FiltersScreenUI {...props} />;
};

export default FiltersScreen;
