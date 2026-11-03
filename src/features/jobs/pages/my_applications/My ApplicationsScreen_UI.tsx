import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './My ApplicationsScreen.styles';
import { My ApplicationsScreenProps } from './My ApplicationsScreen.types';
import { colors } from '../../../../theme';

const My ApplicationsScreenUI: React.FC<My ApplicationsScreenProps> = () => {
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
        <Text>My Applications Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default My ApplicationsScreenUI;
