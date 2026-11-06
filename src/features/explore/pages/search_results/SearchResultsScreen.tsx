import React from 'react';

import SearchResultsScreenUI from './SearchResultsScreen_UI';
import useSearchResultsScreen from './SearchResultsScreen.hooks';

const SearchResultsScreen: React.FC = () => {
  const props = useSearchResultsScreen();

  return <SearchResultsScreenUI {...props} />;
};

export default SearchResultsScreen;
