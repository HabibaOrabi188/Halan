import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './MyApplicationsScreen.styles';
import { MyApplicationsScreenProps } from './MyApplicationsScreen.types';
import { colors } from '../../../../theme';

const MyApplicationsScreenUI: React.FC<MyApplicationsScreenProps> = () => {
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

export default MyApplicationsScreenUI;
