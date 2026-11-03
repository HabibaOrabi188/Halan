import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Apply JobScreen.styles';
import { Apply JobScreenProps } from './Apply JobScreen.types';
import { colors } from '../../../../theme';

const Apply JobScreenUI: React.FC<Apply JobScreenProps> = () => {
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
        <Text>Apply Job Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Apply JobScreenUI;
