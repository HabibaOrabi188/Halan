import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Job DetailsScreen.styles';
import { Job DetailsScreenProps } from './Job DetailsScreen.types';
import { colors } from '../../../../theme';

const Job DetailsScreenUI: React.FC<Job DetailsScreenProps> = () => {
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
        <Text>Job Details Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Job DetailsScreenUI;
