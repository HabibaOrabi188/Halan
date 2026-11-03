import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Service ListScreen.styles';
import { Service ListScreenProps } from './Service ListScreen.types';
import { colors } from '../../../../theme';

const Service ListScreenUI: React.FC<Service ListScreenProps> = () => {
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
        <Text>Service List Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Service ListScreenUI;
