import React from 'react';

import Search ResultsScreenUI from './Search ResultsScreen_UI';
import useSearch ResultsScreen from './Search ResultsScreen.hooks';

const Search ResultsScreen: React.FC = () => {
  const props = useSearch ResultsScreen();

  return <Search ResultsScreenUI {...props} />;
};

export default Search ResultsScreen;
