import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './NearbyPlacesScreen.styles';
import { NearbyPlacesScreenProps } from './NearbyPlacesScreen.types';
import { colors } from '../../../../theme';

const NearbyPlacesScreenUI: React.FC<NearbyPlacesScreenProps> = () => {
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
        <Text>Nearby Places Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NearbyPlacesScreenUI;
