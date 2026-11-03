import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Place DetailsScreen.styles';
import { Place DetailsScreenProps } from './Place DetailsScreen.types';
import { colors } from '../../../../theme';

const Place DetailsScreenUI: React.FC<Place DetailsScreenProps> = () => {
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

export default Place DetailsScreenUI;
