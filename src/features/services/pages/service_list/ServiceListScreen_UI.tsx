import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './ServiceListScreen.styles';
import { ServiceListScreenProps } from './ServiceListScreen.types';
import { colors } from '../../../../theme';

const ServiceListScreenUI: React.FC<ServiceListScreenProps> = () => {
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

export default ServiceListScreenUI;
