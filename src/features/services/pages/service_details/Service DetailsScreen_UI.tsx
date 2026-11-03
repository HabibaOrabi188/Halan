import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Service DetailsScreen.styles';
import { Service DetailsScreenProps } from './Service DetailsScreen.types';
import { colors } from '../../../../theme';

const Service DetailsScreenUI: React.FC<Service DetailsScreenProps> = () => {
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

export default Service DetailsScreenUI;
