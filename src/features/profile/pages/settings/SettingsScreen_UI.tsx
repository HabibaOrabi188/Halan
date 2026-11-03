import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SettingsScreen.styles';
import { SettingsScreenProps } from './SettingsScreen.types';
import { colors } from '../../../../theme';

const SettingsScreenUI: React.FC<SettingsScreenProps> = () => {
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
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreenUI;
