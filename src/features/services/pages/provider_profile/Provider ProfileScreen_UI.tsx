import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Provider ProfileScreen.styles';
import { Provider ProfileScreenProps } from './Provider ProfileScreen.types';
import { colors } from '../../../../theme';

const Provider ProfileScreenUI: React.FC<Provider ProfileScreenProps> = () => {
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

export default Provider ProfileScreenUI;
