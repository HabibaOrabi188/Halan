import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Nearby PlacesScreen.styles';
import { Nearby PlacesScreenProps } from './Nearby PlacesScreen.types';
import { colors } from '../../../../theme';

const Nearby PlacesScreenUI: React.FC<Nearby PlacesScreenProps> = () => {
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

export default Nearby PlacesScreenUI;
