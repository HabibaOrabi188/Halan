import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SearchScreen.styles';
import { SearchScreenProps } from './SearchScreen.types';
import { colors } from '../../../../theme';

const SearchScreenUI: React.FC<SearchScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.foreground,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.foreground}
      />

      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreenUI;
