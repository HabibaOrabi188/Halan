import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './PlacesListScreen.styles';
import { PlacesListScreenProps } from './PlacesListScreen.types';
import { colors } from '../../../../theme';

const PlacesListScreenUI: React.FC<PlacesListScreenProps> = () => {
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
        <Text>Places List Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PlacesListScreenUI;
