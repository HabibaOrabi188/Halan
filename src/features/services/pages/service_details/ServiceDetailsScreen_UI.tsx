import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './ServiceDetailsScreen.styles';
import { ServiceDetailsScreenProps } from './ServiceDetailsScreen.types';
import { colors } from '../../../../theme';

const ServiceDetailsScreenUI: React.FC<ServiceDetailsScreenProps> = () => {
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
        <Text>Service Details Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ServiceDetailsScreenUI;
