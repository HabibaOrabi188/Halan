import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './ApplyJobScreen.styles';
import { ApplyJobScreenProps } from './ApplyJobScreen.types';
import { colors } from '../../../../theme';

const ApplyJobScreenUI: React.FC<ApplyJobScreenProps> = () => {
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
        <Text>Apply Job Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ApplyJobScreenUI;
