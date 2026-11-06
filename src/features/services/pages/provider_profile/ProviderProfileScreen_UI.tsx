import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './ProviderProfileScreen.styles';
import { ProviderProfileScreenProps } from './ProviderProfileScreen.types';
import { colors } from '../../../../theme';

const ProviderProfileScreenUI: React.FC<ProviderProfileScreenProps> = () => {
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
        <Text>Provider Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProviderProfileScreenUI;
