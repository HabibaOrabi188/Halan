import React from 'react';

import SavedItemsScreenUI from './SavedItemsScreen_UI';
import useSavedItemsScreen from './SavedItemsScreen.hooks';

const SavedItemsScreen: React.FC = () => {
  const props = useSavedItemsScreen();

  return <SavedItemsScreenUI {...props} />;
};

export default SavedItemsScreen;
