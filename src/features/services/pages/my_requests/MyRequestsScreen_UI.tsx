import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './MyRequestsScreen.styles';
import { MyRequestsScreenProps } from './MyRequestsScreen.types';
import { colors } from '../../../../theme';

const MyRequestsScreenUI: React.FC<MyRequestsScreenProps> = () => {
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

export default MyRequestsScreenUI;
