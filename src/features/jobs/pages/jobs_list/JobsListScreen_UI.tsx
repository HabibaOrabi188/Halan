import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../../theme';
import { JobsListScreenProps } from './JobsListScreen.types';
import { styles } from './JobsListScreen.styles';

const JobsListScreenUI: React.FC<JobsListScreenProps> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.foreground,
      }}
    >
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <Text>Jobs List Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default JobsListScreenUI;
