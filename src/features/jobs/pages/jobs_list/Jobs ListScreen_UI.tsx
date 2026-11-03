import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Jobs ListScreen.styles';
import { Jobs ListScreenProps } from './Jobs ListScreen.types';
import { colors } from '../../../../theme';

const Jobs ListScreenUI: React.FC<Jobs ListScreenProps> = () => {
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
        <Text>Jobs List Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Jobs ListScreenUI;
