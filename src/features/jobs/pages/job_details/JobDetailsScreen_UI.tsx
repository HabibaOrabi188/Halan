import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './JobDetailsScreen.styles';
import { JobDetailsScreenProps } from './JobDetailsScreen.types';
import { colors } from '../../../../theme';

const JobDetailsScreenUI: React.FC<JobDetailsScreenProps> = () => {
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

export default JobDetailsScreenUI;
