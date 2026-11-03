import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Search ResultsScreen.styles';
import { Search ResultsScreenProps } from './Search ResultsScreen.types';
import { colors } from '../../../../theme';

const Search ResultsScreenUI: React.FC<Search ResultsScreenProps> = () => {
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
        <Text>Search Results Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search ResultsScreenUI;
