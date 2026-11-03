import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './CategoriesScreen.styles';
import { CategoriesScreenProps } from './CategoriesScreen.types';
import { colors } from '../../../../theme';

const CategoriesScreenUI: React.FC<CategoriesScreenProps> = () => {
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
        <Text>Categories Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreenUI;
