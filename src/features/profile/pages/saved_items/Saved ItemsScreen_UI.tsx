import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Saved ItemsScreen.styles';
import { Saved ItemsScreenProps } from './Saved ItemsScreen.types';
import { colors } from '../../../../theme';

const Saved ItemsScreenUI: React.FC<Saved ItemsScreenProps> = () => {
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
        <Text>Saved Items Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Saved ItemsScreenUI;
