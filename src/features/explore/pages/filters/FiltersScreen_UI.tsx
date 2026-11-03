import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './FiltersScreen.styles';
import { FiltersScreenProps } from './FiltersScreen.types';
import { colors } from '../../../../theme';

const FiltersScreenUI: React.FC<FiltersScreenProps> = () => {
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
        <Text>Filters Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FiltersScreenUI;
