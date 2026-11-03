import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Places ListScreen.styles';
import { Places ListScreenProps } from './Places ListScreen.types';
import { colors } from '../../../../theme';

const Places ListScreenUI: React.FC<Places ListScreenProps> = () => {
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
        <Text>Places List Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Places ListScreenUI;
