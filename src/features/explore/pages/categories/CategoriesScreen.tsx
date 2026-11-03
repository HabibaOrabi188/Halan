import React from 'react';

import CategoriesScreenUI from './CategoriesScreen_UI';
import useCategoriesScreen from './CategoriesScreen.hooks';

const CategoriesScreen: React.FC = () => {
  const props = useCategoriesScreen();

  return <CategoriesScreenUI {...props} />;
};

export default CategoriesScreen;
