import React from 'react';

import SearchScreenUI from './SearchScreen_UI';
import useSearchScreen from './SearchScreen.hooks';

const SearchScreen: React.FC = () => {
  const props = useSearchScreen();

  return <SearchScreenUI {...props} />;
};

export default SearchScreen;
