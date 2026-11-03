import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './My ProfileScreen.styles';
import { My ProfileScreenProps } from './My ProfileScreen.types';
import { colors } from '../../../../theme';

const My ProfileScreenUI: React.FC<My ProfileScreenProps> = () => {
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
        <Text>My Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default My ProfileScreenUI;
