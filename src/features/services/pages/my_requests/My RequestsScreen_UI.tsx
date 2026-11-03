import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './My RequestsScreen.styles';
import { My RequestsScreenProps } from './My RequestsScreen.types';
import { colors } from '../../../../theme';

const My RequestsScreenUI: React.FC<My RequestsScreenProps> = () => {
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
        <Text>My Requests Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default My RequestsScreenUI;
