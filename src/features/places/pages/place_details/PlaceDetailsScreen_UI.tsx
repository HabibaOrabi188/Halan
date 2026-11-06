import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './PlaceDetailsScreen.styles';
import { PlaceDetailsScreenProps } from './PlaceDetailsScreen.types';
import { colors } from '../../../../theme';

const PlaceDetailsScreenUI: React.FC<PlaceDetailsScreenProps> = () => {
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
        <Text>Place Details Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default PlaceDetailsScreenUI;
